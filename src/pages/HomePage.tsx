import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { formatNaverBlogText } from "../utils/formatNaverBlogText";
import { getCanonicalUrl } from "../siteConfig";

type Template = {
  title: string;
  description: string;
  text: string;
};

const TEMPLATES: Template[] = [
  {
    title: "맛집 리뷰 (짧게)",
    description: "처음 방문/메뉴/총평까지 6문단",
    text:
      "오늘은 [가게명]에 다녀왔습니다.\n\n" +
      "방문한 이유는 [이유/상황]이었어요.\n\n" +
      "제가 주문한 메뉴는 [메뉴]입니다.\n\n" +
      "맛은 한 줄로 말하면 [한줄평]!\n\n" +
      "가격/양/재방문 의사는 [정리]로 생각해요.\n\n" +
      "한 줄 요약: [누구에게 추천/비추천]합니다.",
  },
  {
    title: "카페 후기 (작업/분위기)",
    description: "분위기/좌석/콘센트/추천 포인트",
    text:
      "[카페명]은 전체적으로 [분위기]한 느낌입니다.\n\n" +
      "좌석은 [좌석/테이블] 위주였고, [혼잡도]였습니다.\n\n" +
      "작업하기 좋은 점은 [콘센트/와이파이/소음]입니다.\n\n" +
      "아쉬운 점은 [단점]이었어요.\n\n" +
      "추천 대상은 [추천 대상]입니다.",
  },
  {
    title: "체험단/협찬 문구",
    description: "제공 내역 + 솔직 후기 고지",
    text:
      "이 글은 [업체명]으로부터 [제공 내역]을 제공받아 작성한 후기입니다.\n\n" +
      "다만, 내용과 평가는 제 경험을 바탕으로 솔직하게 작성했습니다.\n\n" +
      "방문(또는 이용) 날짜는 [날짜]이며, 시간대는 [시간대]였습니다.",
  },
  {
    title: "제품 리뷰 (구매 이유)",
    description: "구매 이유/장단점/추천 대상",
    text:
      "이번에 [제품명]을(를) 구매했습니다.\n\n" +
      "구매한 이유는 [문제/니즈]를 해결하고 싶어서였어요.\n\n" +
      "좋았던 점은 [장점 1] / [장점 2]입니다.\n\n" +
      "아쉬운 점은 [단점]입니다.\n\n" +
      "추천 대상은 [추천 대상], 비추천 대상은 [비추천 대상]입니다.",
  },
  {
    title: "정보 글 (핵심 3줄 요약)",
    description: "요약 → 본문 → 결론 구조",
    text:
      "오늘 글의 결론부터 말하면 [한 줄 결론]입니다.\n\n" +
      "핵심은 [핵심 1], [핵심 2], [핵심 3]이에요.\n\n" +
      "이 글은 [대상]에게 도움이 되도록 정리했습니다.\n\n" +
      "먼저 [주제 1]부터 볼게요.\n\n" +
      "다음으로 [주제 2]는 이렇게 정리할 수 있습니다.\n\n" +
      "마지막으로 [주제 3]와 함께 추천/주의사항을 정리합니다.",
  },
  {
    title: "여행 후기 (동선)",
    description: "이동/먹거리/팁",
    text:
      "이번 여행은 [지역]에 [기간] 다녀왔습니다.\n\n" +
      "전체 동선은 [동선 요약]으로 움직였어요.\n\n" +
      "가장 좋았던 장소는 [장소]입니다.\n\n" +
      "먹거리/카페는 [추천]을(를) 추천해요.\n\n" +
      "다음에 또 간다면 [바꾸고 싶은 점]을(를) 바꿀 것 같아요.\n\n" +
      "팁: [교통/예약/시간대]만 기억하면 훨씬 편합니다.",
  },
  {
    title: "자기계발 후기 (루틴)",
    description: "목표/방법/결과",
    text:
      "[기간] 동안 [루틴/습관]을 실천했습니다.\n\n" +
      "시작한 이유는 [이유]입니다.\n\n" +
      "제가 한 방법은 [방법]이고, 핵심은 [핵심]이었어요.\n\n" +
      "좋았던 변화는 [변화]입니다.\n\n" +
      "힘들었던 점은 [어려움]이었고, 이렇게 해결했습니다.\n\n" +
      "한 줄 결론: [추천 여부/누구에게 추천]입니다.",
  },
  {
    title: "서비스/앱 사용 후기",
    description: "사용 목적/기능/총평",
    text:
      "최근에 [서비스/앱명]을(를) 사용해 봤습니다.\n\n" +
      "사용 목적은 [목적]이었어요.\n\n" +
      "가장 자주 쓰는 기능은 [기능]입니다.\n\n" +
      "좋았던 점은 [장점]이고, 아쉬운 점은 [단점]입니다.\n\n" +
      "추천 대상은 [대상], 대안으로는 [대안]도 고려할 만합니다.",
  },
  {
    title: "공지/안내 글",
    description: "핵심 공지 → 상세 → 문의",
    text:
      "안내드립니다: [핵심 공지]\n\n" +
      "적용 기간은 [기간]이며, 대상은 [대상]입니다.\n\n" +
      "변경 사항은 [변경 1], [변경 2]입니다.\n\n" +
      "자세한 내용은 아래에 정리했습니다.\n\n" +
      "문의는 [문의 방법]으로 부탁드립니다.",
  },
  {
    title: "블로그 글쓰기 체크리스트",
    description: "출간 전 점검 7문단",
    text:
      "제목은 한 번 더 읽었나요? (검색 키워드 포함)\n\n" +
      "첫 문단에 결론/핵심을 넣었나요?\n\n" +
      "문단은 빈 줄(엔터 두 번)로 구분했나요?\n\n" +
      "문단 사이 여백(빈 줄)은 1~2줄로 통일했나요?\n\n" +
      "긴 문장은 의미 단위로 끊어 읽기 좋게 만들었나요?\n\n" +
      "불필요한 특수문자/이모지는 줄였나요?\n\n" +
      "마지막에 한 줄 요약/추천 대상을 넣었나요?",
  },
];

function HomePage() {
  const [input, setInput] = useState("");
  const [paragraphSpacing, setParagraphSpacing] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  const canonical = getCanonicalUrl("/");

  const output = useMemo(
    () => formatNaverBlogText(input, paragraphSpacing),
    [input, paragraphSpacing]
  );

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2000);
    return () => window.clearTimeout(id);
  }, [toast]);

  const handleCopy = async () => {
    if (!output) {
      setToast("변환된 내용이 없습니다.");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      setToast("결과가 클립보드에 복사되었습니다.");
    } catch {
      setToast("복사에 실패했습니다. 직접 선택해서 복사해주세요.");
    }
  };

  const handleUseTemplate = (t: Template) => {
    setInput(t.text);
    setToast(`템플릿을 불러왔습니다: ${t.title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Helmet>
        <title>네이버 블로그 줄바꿈 정리 도구 - 자동 문단 간격</title>
        <meta
          name="description"
          content="네이버 블로그 글의 줄바꿈과 문단 간 간격을 자동으로 정리해 모바일 가독성을 높여주는 무료 웹 도구입니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      {toast && (
        <div className="fixed z-30 bottom-4 right-4 max-w-xs rounded-md bg-slate-900 text-white text-xs px-3 py-2 shadow-lg">
          {toast}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <section className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
            네이버 블로그 줄바꿈 & 문단 간격 정리
          </h1>
          <p className="text-sm text-slate-600">
            블로그 글을 붙여넣으면 문단 간 줄 간격을 자동으로 정리해 주는 도구입니다.
            네이버 블로그용으로 문단 사이 줄바꿈을 일정하게 맞춰 가독성을 높여보세요.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link to="/guide" className="underline text-emerald-800 hover:text-emerald-700">
              가이드 보기
            </Link>
            <span className="text-slate-300">/</span>
            <Link to="/examples" className="underline text-emerald-800 hover:text-emerald-700">
              전·후 예시
            </Link>
            <span className="text-slate-300">/</span>
            <Link to="/faq" className="underline text-emerald-800 hover:text-emerald-700">
              FAQ
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <label className="inline-flex items-center gap-2">
                <span className="text-slate-600 font-medium">문단 사이 줄바꿈 개수</span>
                <select
                  className="border rounded-md px-2 py-1 text-xs bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  value={paragraphSpacing}
                  onChange={e => setParagraphSpacing(Number(e.target.value))}
                >
                  <option value={1}>1줄 (권장)</option>
                  <option value={2}>2줄</option>
                  <option value={3}>3줄</option>
                </select>
              </label>
              <span className="text-slate-500">
                입력 내용은 브라우저에서만 처리되며, 서버로 전송되지 않습니다.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
              >
                결과 복사
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">원문 입력</span>
                <span>
                  {input.length.toLocaleString()}자 /{" "}
                  {input.split(/\r\n|\r|\n/).length}줄
                </span>
              </div>
              <textarea
                className="min-h-[260px] md:min-h-[360px] w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={
                  "네이버 블로그에 올릴 원문을 붙여넣어 주세요.\n\n" +
                  "문단은 빈 줄(엔터 두 번)로 구분해 주세요.\n" +
                  "변환 결과에서는 문단 사이에 선택한 만큼의 빈 줄이 자동으로 들어갑니다."
                }
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">변환 결과 (네이버 블로그용)</span>
                <span>
                  {output.length.toLocaleString()}자 /{" "}
                  {output ? output.split("\n").length : 0}줄
                </span>
              </div>
              <textarea
                className="min-h-[260px] md:min-h-[360px] w-full resize-y rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 text-center"
                readOnly
                value={output}
                placeholder="변환 결과가 여기에 표시됩니다."
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
            <h2 className="text-sm font-semibold text-slate-900">빠른 시작</h2>
            <ol className="text-xs text-slate-600 leading-relaxed list-decimal list-inside space-y-1">
              <li>원문을 붙여넣고, 문단은 빈 줄(엔터 두 번)로 구분</li>
              <li>문단 사이 줄바꿈(빈 줄) 개수를 선택(기본 1줄)</li>
              <li>결과 복사 → 네이버 블로그 에디터에 붙여넣기</li>
            </ol>
            <p className="text-[11px] text-slate-500">
              더 자세한 설명은{" "}
              <Link to="/faq" className="underline text-emerald-800 hover:text-emerald-700">
                FAQ
              </Link>
              에 정리해 두었습니다.
            </p>
          </article>

          <article className="rounded-lg border bg-white p-4 shadow-sm space-y-2 lg:col-span-2">
            <h2 className="text-sm font-semibold text-slate-900">
              이 도구가 적용하는 규칙
            </h2>
            <ul className="text-xs text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>
                <b>빈 줄(엔터 두 번) = 문단</b>으로 인식하고, 문단 사이에 선택한 만큼의
                빈 줄을 자동으로 넣습니다.
              </li>
              <li>너무 긴 문장은 읽기 좋은 위치에서 자동 줄바꿈합니다.</li>
              <li>따옴표(인용) 안의 줄바꿈은 공백으로 정리해 문장을 자연스럽게 만듭니다.</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <div className="text-[11px] font-medium text-slate-500">Before</div>
                <pre className="whitespace-pre-wrap rounded-md border bg-slate-50 px-3 py-2 text-xs text-slate-700 leading-relaxed">
                  {"첫 문단입니다.\n\n두 번째 문단입니다.\n\n세 번째 문단입니다."}
                </pre>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-medium text-slate-500">After</div>
                <pre className="whitespace-pre-wrap rounded-md border bg-emerald-50 px-3 py-2 text-xs text-slate-800 leading-relaxed">
                  {"첫 문단입니다.\n\n두 번째 문단입니다.\n\n세 번째 문단입니다."}
                </pre>
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div className="space-y-1">
              <h2 className="text-sm font-semibold text-slate-900">바로 써먹는 글 템플릿</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                아래 템플릿을 눌러 입력창에 바로 불러오세요. 템플릿은 문단을 빈
                줄(엔터 두 번)로 구분해 두었으며, 결과에서는 문단 사이 여백이 자동으로
                적용됩니다.
              </p>
            </div>
            <Link to="/examples" className="text-xs underline text-emerald-800 hover:text-emerald-700">
              전·후 예시 더 보기
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEMPLATES.map(t => (
              <button
                key={t.title}
                type="button"
                onClick={() => handleUseTemplate(t)}
                className="text-left rounded-lg border bg-slate-50 hover:bg-slate-100 transition-colors px-3 py-2"
              >
                <div className="text-sm font-semibold text-slate-900">{t.title}</div>
                <div className="text-xs text-slate-600 mt-0.5">{t.description}</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2 whitespace-pre-wrap">
                  {t.text}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <header className="space-y-1">
            <h2 className="text-sm font-semibold text-slate-900">
              네이버 블로그 줄바꿈 기준, 왜 이렇게 하는 게 좋을까요?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              네이버 블로그 글은 <b>모바일에서 읽는 비율</b>이 높아서, 한 문단이 길어질수록
              “벽 텍스트”처럼 보이기 쉽습니다. 문단을 적절히 나누고 문단 사이 여백을
              일정하게 맞추면, 같은 내용이라도 훨씬 읽기 쉬워지고 체류시간에도 도움이
              되는 경우가 많습니다.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <article className="rounded-md border bg-slate-50 p-3 space-y-2">
              <h3 className="font-semibold text-slate-900">추천 규칙(가장 무난한 설정)</h3>
              <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-1">
                <li>
                  <b>빈 줄(엔터 두 번) = 문단</b>으로 구분하기
                </li>
                <li>문단 사이 여백은 1줄부터 시작(정보량이 많으면 2줄)</li>
                <li>긴 문장은 의미 단위로 자연스럽게 끊기</li>
                <li>따옴표(인용) 안은 문장 흐름이 깨지지 않게 정리</li>
              </ul>
              <p className="text-[11px] text-slate-500">
                자세한 체크리스트는{" "}
                <Link to="/guide" className="underline text-emerald-800 hover:text-emerald-700">
                  가이드
                </Link>
                에 정리했습니다.
              </p>
            </article>

            <article className="rounded-md border bg-emerald-50 p-3 space-y-2">
              <h3 className="font-semibold text-slate-900">자주 하는 실수</h3>
              <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-1">
                <li>문장마다 엔터를 넣어서 글이 지나치게 끊겨 보이는 경우</li>
                <li>문단을 안 나눠서 스크롤이 피로한 경우</li>
                <li>이모지/특수문자 강조가 과해서 신뢰도가 떨어져 보이는 경우</li>
                <li>협찬/제공 표시를 빼먹어 불필요한 오해가 생기는 경우</li>
              </ul>
              <p className="text-[11px] text-slate-500">
                실제 전·후 비교는{" "}
                <Link to="/examples" className="underline text-emerald-800 hover:text-emerald-700">
                  예시
                </Link>
                에서 확인할 수 있어요.
              </p>
            </article>
          </div>

          <article className="text-xs text-slate-700 leading-relaxed space-y-2">
            <h3 className="font-semibold text-slate-900">이 도구는 어떤 방식으로 정리하나요?</h3>
            <p>
              이 도구는 입력한 텍스트를 <b>브라우저에서만</b> 처리합니다. “문단(빈 줄 기준)”을
              유지하면서, 너무 긴 문장은 읽기 좋은 지점에서 줄바꿈하고, 따옴표 안의
              불필요한 개행은 공백으로 정리해 문장 흐름을 자연스럽게 만듭니다.
            </p>
            <p className="text-slate-600">
              개인정보 관련 내용은{" "}
              <Link to="/privacy" className="underline text-emerald-800 hover:text-emerald-700">
                개인정보 처리방침
              </Link>
              에서 확인해 주세요.
            </p>
          </article>
        </section>

        <section className="border rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600 space-y-1">
          <p className="font-medium text-slate-700">안내</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>이 도구는 로그인, 회원가입, 서버 저장 없이 브라우저에서만 동작합니다.</li>
            <li>입력한 텍스트는 개발자나 제3자에게 전송·수집되지 않습니다.</li>
            <li>
              문단 구분은 <b>빈 줄(엔터 두 번)</b> 기준이며, 문단 사이 여백은
              선택한 값(1~3줄)으로 자동 적용됩니다.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
