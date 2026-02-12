// 기존 시그니처와 호환되도록 number 또는 옵션 객체 모두 허용
function formatNaverBlogText(raw, paragraphSpacingLinesOrOptions = 2) {
  // 0단계: 전체 문자열에서 따옴표 안 개행은 먼저 공백으로 치환
  const cleaned = replaceNewlinesInsideQuotes(raw);
  const trimmed = cleaned.trim();
  if (!trimmed) return "";

  const baseParagraphGap =
    typeof paragraphSpacingLinesOrOptions === "number"
      ? paragraphSpacingLinesOrOptions
      : paragraphSpacingLinesOrOptions.paragraphGap ?? 2;

  const opts =
    typeof paragraphSpacingLinesOrOptions === "number"
      ? { paragraphGap: baseParagraphGap }
      : { ...paragraphSpacingLinesOrOptions, paragraphGap: baseParagraphGap };

  const wrapWidth = opts.wrapWidth ?? 25;
  const paragraphGap = Math.min(3, Math.max(1, Math.floor(opts.paragraphGap ?? 2)));
  const minBreak = opts.minBreak ?? Math.floor(wrapWidth * 0.7);

  // 개행/탭 정리 (기존 문단 구조는 최대한 유지)
  const normalized = trimmed
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, " ")
    .replace(/[ ]+\n/g, "\n");

  const seg =
    typeof Intl !== "undefined" && "Segmenter" in Intl
      ? new Intl.Segmenter("ko", { granularity: "grapheme" })
      : null;

  const graphemes = (s) =>
    seg ? Array.from(seg.segment(s), (x) => x.segment) : Array.from(s);

  // 따옴표 쌍 사이(인용구 안)는 줄바꿈 금지
  const getQuoteRanges = (g) => {
    const openToClose = {
      '"': '"',
      "'": "'",
      "\u201C": "\u201D",
      "\u2018": "\u2019",
    };
    const closeToOpen = {
      '"': '"',
      "'": "'",
      "\u201D": "\u201C",
      "\u2019": "\u2018",
    };

    const stack = [];
    const ranges = [];

    for (let i = 0; i < g.length; i++) {
      const ch = g[i];

      if (openToClose[ch]) {
        stack.push({ ch, idx: i });
      } else if (closeToOpen[ch]) {
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

  const isInsideQuoteRange = (idx, ranges) =>
    ranges.some((r) => idx >= r.start && idx <= r.end);

  const isNewlineInsideQuotes = (s, newlineIndex) => {
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
      } else if (ch === "\u2018" || ch === "\u2019") {
        inCurlySingle = !inCurlySingle;
      } else if (ch === "\u201C" || ch === "\u201D") {
        inCurlyDouble = !inCurlyDouble;
      }
    }

    return inSingle || inDouble || inCurlySingle || inCurlyDouble;
  };

  function replaceNewlinesInsideQuotes(s) {
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
      if (ch === "\u2018" || ch === "\u2019") {
        inCurlySingle = !inCurlySingle;
        out += ch;
        continue;
      }
      if (ch === "\u201C" || ch === "\u201D") {
        inCurlyDouble = !inCurlyDouble;
        out += ch;
        continue;
      }

      if (ch === "\n" && (inSingle || inDouble || inCurlySingle || inCurlyDouble)) {
        out += " ";
      } else {
        out += ch;
      }
    }

    return out;
  }

  const wrapOneLine = (line) => {
    const text = line.replace(/ {2,}/g, " ").trim();
    if (!text) return "";

    const lines = [];
    const sentenceChunks = text
      .split(/(?<=[.!?])\s*/u)
      .map((s) => s.trim())
      .filter(Boolean);

    const softPunct = [",", "\u00B7", ":", ";"];
    const hardPunct = ["!", "?", "\u2026", ")", "]", "}", "\u201D", "\u2019"];

    const wrapChunk = (chunk) => {
      const g = graphemes(chunk);
      const quoteRanges = getQuoteRanges(g);
      if (g.length <= wrapWidth) {
        lines.push(chunk.trimEnd());
        return;
      }

      const localLines = [];
      let i = 0;

      while (i < g.length) {
        if (g.length - i <= wrapWidth) {
          const last = g.slice(i).join("").trimEnd();
          if (last) localLines.push(last);
          break;
        }

        const idealEnd = i + wrapWidth;
        const maxEnd = Math.min(i + wrapWidth + 6, g.length);
        const minPos = i + minBreak;

        let bestIdx = -1;
        let bestScore = -1;

        for (let k = minPos; k < maxEnd; k++) {
          const ch = g[k];

          if (isInsideQuoteRange(k, quoteRanges)) {
            continue;
          }

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
          const score = baseScore - distFromIdeal;

          if (score > bestScore) {
            bestScore = score;
            bestIdx = k;
          }
        }

        let cutAt;

        if (bestIdx !== -1) {
          cutAt = bestIdx + 1;
        } else {
          cutAt = Math.min(idealEnd, g.length);
        }

        const lineStr = g.slice(i, cutAt).join("").trimEnd();
        if (lineStr) localLines.push(lineStr);

        while (cutAt < g.length && g[cutAt] === " ") cutAt++;
        i = cutAt;
      }

      if (localLines.length >= 2) {
        const last = localLines[localLines.length - 1];
        const prev = localLines[localLines.length - 2];
        const lastLen = graphemes(last).length;

        const head = last.replace(/^[\s"'\u201C\u201D\u2018\u2019]+/, "");
        const firstToken = (head.split(/\s+/)[0]) ?? "";
        const josaTokens = new Set([
          "\uC740", "\uB294", "\uC774", "\uAC00", "\uC744",
          "\uB97C", "\uB3C4", "\uB9CC", "\uBFD0",
          "\uAE4C\uC9C0", "\uBD80\uD130", "\uC870\uCC28", "\uB9C8\uC800",
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

  const mergeAwkwardBreaks = (lines) => {
    const merged = [];
    const josaTokens = new Set([
      "\uC740", "\uB294", "\uC774", "\uAC00", "\uC744",
      "\uB97C", "\uB3C4", "\uB9CC", "\uBFD0",
      "\uAE4C\uC9C0", "\uBD80\uD130", "\uC870\uCC28", "\uB9C8\uC800",
    ]);

    for (let i = 0; i < lines.length; i++) {
      if (i === 0) {
        merged.push(lines[i]);
        continue;
      }

      const prev = merged[merged.length - 1];
      const cur = lines[i];

      const combined = prev + "\n" + cur;
      const newlineIdx = prev.length;
      if (isNewlineInsideQuotes(combined, newlineIdx)) {
        merged[merged.length - 1] = (prev + " " + cur.trimStart()).trim();
        continue;
      }

      const head = cur.replace(/^[\s"'\u201C\u201D\u2018\u2019]+/, "");
      const firstToken = (head.split(/\s+/)[0]) ?? "";

      if (josaTokens.has(firstToken)) {
        merged[merged.length - 1] = (prev + " " + head).trim();
      } else {
        merged.push(cur);
      }
    }

    return merged;
  };

  const allLines = normalized.split("\n");
  const paragraphBlocks = [];
  let currentBlock = [];

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

  const resultLines = [];

  paragraphBlocks.forEach((block, idx) => {
    const mergedLines = mergeAwkwardBreaks(block);
    const wrappedLines = mergedLines
      .flatMap((l) => wrapOneLine(l).split("\n"))
      .filter((l) => l.length > 0);
    resultLines.push(...wrappedLines);

    if (idx < paragraphBlocks.length - 1) {
      for (let i = 0; i < paragraphGap; i++) {
        resultLines.push("");
      }
    }
  });

  return resultLines.join("\n");
}

// content script에서도, popup에서도 사용 가능하도록
if (typeof window !== "undefined") {
  window.formatNaverBlogText = formatNaverBlogText;
}
