type FormatOptions = {
  wrapWidth?: number; // 기본 20자 근처
  paragraphGap?: number; // 문단 사이 줄바꿈 수 (기본 2)
  minBreak?: number; // 너무 앞에서 끊는 것 방지(기본 wrapWidth의 0.55)
};

// 기존 시그니처와 호환되도록 number 또는 옵션 객체 모두 허용
export function formatNaverBlogText(
  raw: string,
  paragraphSpacingLinesOrOptions: number | FormatOptions = 2
): string {
  // 0단계: 전체 문자열에서 따옴표 안 개행은 먼저 공백으로 치환
  const cleaned = replaceNewlinesInsideQuotes(raw);
  const trimmed = cleaned.trim();
  if (!trimmed) return "";

  const baseParagraphGap =
    typeof paragraphSpacingLinesOrOptions === "number"
      ? paragraphSpacingLinesOrOptions
      : paragraphSpacingLinesOrOptions.paragraphGap ?? 2;

  const opts: FormatOptions =
    typeof paragraphSpacingLinesOrOptions === "number"
      ? { paragraphGap: baseParagraphGap }
      : { ...paragraphSpacingLinesOrOptions, paragraphGap: baseParagraphGap };

  const wrapWidth = opts.wrapWidth ?? 25;
  const paragraphGap = Math.min(3, Math.max(1, Math.floor(opts.paragraphGap ?? 2)));
  const minBreak = opts.minBreak ?? Math.floor(wrapWidth * 0.7); // 너무 짧은 줄 방지

  // 개행/탭 정리 (기존 문단 구조는 최대한 유지)
  const normalized = trimmed
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, " ")
    .replace(/[ ]+\n/g, "\n");

  const seg =
    typeof Intl !== "undefined" && "Segmenter" in Intl
      ? new Intl.Segmenter("ko", { granularity: "grapheme" })
      : null;

  const graphemes = (s: string) =>
    seg ? Array.from(seg.segment(s), x => x.segment) : Array.from(s);

  // 따옴표 쌍 사이(인용구 안)는 줄바꿈 금지
  // 1) 줄 내부에서 "어디가 인용구인지"를 구분하기 위한 helper (grapheme 기반)
  const getQuoteRanges = (g: string[]) => {
    const openToClose: Record<string, string> = {
      '"': '"',
      "'": "'",
      "“": "”",
      "‘": "’",
    };
    const closeToOpen: Record<string, string> = {
      '"': '"',
      "'": "'",
      "”": "“",
      "’": "‘",
    };

    const stack: { ch: string; idx: number }[] = [];
    const ranges: { start: number; end: number }[] = [];

    for (let i = 0; i < g.length; i++) {
      const ch = g[i];

      if (openToClose[ch]) {
        // 여는 따옴표
        stack.push({ ch, idx: i });
      } else if (closeToOpen[ch]) {
        // 닫는 따옴표 -> 스택에서 마지막 대응 여는 따옴표를 찾음
        for (let j = stack.length - 1; j >= 0; j--) {
          const open = stack[j];
          const expectedOpen = closeToOpen[ch];
          if (open.ch === expectedOpen) {
            ranges.push({ start: open.idx, end: i });
            stack.splice(j, 1);
            break;
          }
        }
      }
    }

    return ranges;
  };

  const isInsideQuoteRange = (idx: number, ranges: { start: number; end: number }[]) =>
    ranges.some(r => idx >= r.start && idx <= r.end);

  // 2) 문자열 단위에서 "특정 개행이 따옴표 안에 있는지" 확인
  const isNewlineInsideQuotes = (s: string, newlineIndex: number) => {
    let inSingle = false;
    let inDouble = false;
    let inCurlySingle = false;
    let inCurlyDouble = false;

    for (let i = 0; i <= newlineIndex && i < s.length; i++) {
      const ch = s[i];
      if (ch === "'") {
        inSingle = !inSingle;
      } else if (ch === '"') {
        inDouble = !inDouble;
      } else if (ch === "‘" || ch === "’") {
        inCurlySingle = !inCurlySingle;
      } else if (ch === "“" || ch === "”") {
        inCurlyDouble = !inCurlyDouble;
      }
    }

    return inSingle || inDouble || inCurlySingle || inCurlyDouble;
  };

  // 3) 문자열 전체에서 "인용구 안 개행은 공백으로" 치환
  function replaceNewlinesInsideQuotes(s: string) {
    let inSingle = false;
    let inDouble = false;
    let inCurlySingle = false;
    let inCurlyDouble = false;
    let out = "";

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];

      if (ch === "'") {
        inSingle = !inSingle;
        out += ch;
        continue;
      }
      if (ch === '"') {
        inDouble = !inDouble;
        out += ch;
        continue;
      }
      if (ch === "‘" || ch === "’") {
        inCurlySingle = !inCurlySingle;
        out += ch;
        continue;
      }
      if (ch === "“" || ch === "”") {
        inCurlyDouble = !inCurlyDouble;
        out += ch;
        continue;
      }

      if (ch === "\n" && (inSingle || inDouble || inCurlySingle || inCurlyDouble)) {
        // 인용구 안 개행은 공백으로
        out += " ";
      } else {
        out += ch;
      }
    }

    return out;
  }

  // 한 줄 기준으로만 20자 근처에서 자연스럽게 줄바꿈
  // (기존에 있던 줄바꿈은 건드리지 않고, 너무 긴 줄만 쪼갬)
  const wrapOneLine = (line: string) => {
    const text = line.replace(/ {2,}/g, " ").trim();
    if (!text) return "";

    const lines: string[] = [];
    // 1단계: 마침표/느낌표/물음표 기준으로 문장 단위 강제 분리
    //  - 정규식으로 . ! ? 뒤에서 잘라서, 해당 기호는 앞 문장에 포함
    const sentenceChunks = text
      .split(/(?<=[.!?])\s*/u)
      .map(s => s.trim())
      .filter(Boolean);

    const softPunct = [",", "·", ":", ";"];
    const hardPunct = ["!", "?", "…", ")", "]", "}", "”", "’"];

    const wrapChunk = (chunk: string) => {
      const g = graphemes(chunk);
      const quoteRanges = getQuoteRanges(g);
      if (g.length <= wrapWidth) {
        lines.push(chunk.trimEnd());
        return;
      }

      const localLines: string[] = [];
      let i = 0;

      while (i < g.length) {
        // 남은 글자가 한 줄 폭 이하면 그대로 처리
        if (g.length - i <= wrapWidth) {
          const last = g.slice(i).join("").trimEnd();
          if (last) localLines.push(last);
          break;
        }

        const idealEnd = i + wrapWidth;
        const maxEnd = Math.min(i + wrapWidth + 6, g.length); // 살짝 여유를 두고 앞으로도 탐색
        const minPos = i + minBreak;

        // 가독성 좋은 끊는 지점(공백/구두점)을 점수화해서 선택
        let bestIdx = -1;
        let bestScore = -1;

        for (let k = minPos; k < maxEnd; k++) {
          const ch = g[k];

          // 인용구(따옴표 쌍) 안에서는 줄바꿈하지 않음
          if (isInsideQuoteRange(k, quoteRanges)) {
            continue;
          }

          // "1:1" 같은 패턴은 한 단어로 취급해서 중간에서 끊지 않음
          if (
            ch === ":" &&
            k > 0 &&
            k + 1 < g.length &&
            /\d/.test(g[k - 1]) &&
            /\d/.test(g[k + 1])
          ) {
            continue;
          }

          let baseScore = 0;

          if (ch === " ") baseScore = 10;
          else if (softPunct.includes(ch)) baseScore = 12;
          else if (hardPunct.includes(ch)) baseScore = 15;
          else continue;

          const distFromIdeal = Math.abs(k - idealEnd);
          const score = baseScore - distFromIdeal; // 폭 근처 + 좋은 문자일수록 가중치

          if (score > bestScore) {
            bestScore = score;
            bestIdx = k;
          }
        }

        let cutAt: number;

        if (bestIdx !== -1) {
          cutAt = bestIdx + 1;
        } else {
          // 적당한 끊는 지점을 못 찾았으면 폭 근처에서 강제 줄바꿈
          cutAt = Math.min(idealEnd, g.length);
        }

        const lineStr = g.slice(i, cutAt).join("").trimEnd();
        if (lineStr) localLines.push(lineStr);

        // 다음 시작: 공백으로 끊었으면 공백 스킵
        while (cutAt < g.length && g[cutAt] === " ") cutAt++;
        i = cutAt;
      }

      // 마지막 줄이 어색하게 짧거나, 조사가 맨 앞에 오는 경우는 이전 줄과 합친다
      if (localLines.length >= 2) {
        const last = localLines[localLines.length - 1];
        const prev = localLines[localLines.length - 2];
        const lastLen = graphemes(last).length;

        const head = last.replace(/^[\s"'“”‘’]+/, "");
        const firstToken = head.split(/\s+/)[0] ?? "";
        const josaTokens = new Set([
          "은",
          "는",
          "이",
          "가",
          "을",
          "를",
          "도",
          "만",
          "뿐",
          "까지",
          "부터",
          "조차",
          "마저",
        ]);

        const isOnlyJosaHead = josaTokens.has(firstToken);
        const isTooShort = lastLen > 0 && lastLen < Math.floor(wrapWidth * 0.4);

        if (isTooShort || isOnlyJosaHead) {
          localLines[localLines.length - 2] = (prev + " " + head).trim();
          localLines.pop();
        }
      }

      lines.push(...localLines);
    };

    for (const chunk of sentenceChunks) {
      wrapChunk(chunk);
    }

    return lines.join("\n");
  };

  // 어색한 줄바꿈(조사만 다음 줄로 떨어진 경우 등) 합치기
  const mergeAwkwardBreaks = (lines: string[]) => {
    const merged: string[] = [];
    const josaTokens = new Set([
      "은",
      "는",
      "이",
      "가",
      "을",
      "를",
      "도",
      "만",
      "뿐",
      "까지",
      "부터",
      "조차",
      "마저",
    ]);

    for (let i = 0; i < lines.length; i++) {
      if (i === 0) {
        merged.push(lines[i]);
        continue;
      }

      const prev = merged[merged.length - 1];
      const cur = lines[i];

      // 1) 이전 줄과 현재 줄 사이의 개행이 따옴표 쌍 안에 끼어 있는 경우 → 무조건 합치기
      const combined = prev + "\n" + cur;
      const newlineIdx = prev.length; // raw string 기준 prev 뒤에 오는 개행 위치
      if (isNewlineInsideQuotes(combined, newlineIdx)) {
        merged[merged.length - 1] = (prev + " " + cur.trimStart()).trim();
        continue;
      }

      // 2) 줄 맨 앞이 조사인 경우 → 앞줄과 합치기
      const head = cur.replace(/^[\s"'“”‘’]+/, "");
      const firstToken = head.split(/\s+/)[0] ?? "";

      if (josaTokens.has(firstToken)) {
        // 이전 줄과 이어붙여서 조사가 잘리지 않게 처리
        merged[merged.length - 1] = (prev + " " + head).trim();
      } else {
        merged.push(cur);
      }
    }

    return merged;
  };

  // 문단 기준: "엔터 두 번(빈 줄 1줄)" = 문단 경계
  // - 연속된 빈 줄은 하나의 문단 경계로만 사용
  // - 문단과 문단 사이에는 paragraphGap 개수만큼의 빈 줄을 넣는다.
  const allLines = normalized.split("\n");
  const paragraphBlocks: string[][] = [];
  let currentBlock: string[] = [];

  for (const line of allLines) {
    if (line.trim().length === 0) {
      if (currentBlock.length > 0) {
        paragraphBlocks.push(currentBlock);
        currentBlock = [];
      }
    } else {
      currentBlock.push(line);
    }
  }

  if (currentBlock.length > 0) {
    paragraphBlocks.push(currentBlock);
  }

  const resultLines: string[] = [];

  paragraphBlocks.forEach((block, idx) => {
    const mergedLines = mergeAwkwardBreaks(block);
    const wrappedLines = mergedLines
      .flatMap(l => wrapOneLine(l).split("\n"))
      .filter(l => l.length > 0);
    resultLines.push(...wrappedLines);

    if (idx < paragraphBlocks.length - 1) {
      for (let i = 0; i < paragraphGap; i++) {
        resultLines.push("");
      }
    }
  });

  return resultLines.join("\n");
}
