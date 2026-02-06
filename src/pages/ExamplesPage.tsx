import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

interface ExampleProps {
  title: string;
  before: string;
  after: string;
}

const EXAMPLES: ExampleProps[] = [
  {
    title: "문단 간 간격: 엔터 두 번(빈 줄) = 문단",
    before:
      "오늘은 네이버 블로그에 올릴 글 초안을 쓰고 있습니다.\n\n" +
      "줄바꿈이 제멋대로라서 읽기 불편하다는 이야기를 자주 듣곤 했어요.\n\n\n" +
      "이제는 문단이 끝날 때마다 엔터 한 번만 눌러서 편하게 쓰고 싶습니다.",
    after:
      "오늘은 네이버 블로그에 올릴 글 초안을 쓰고 있습니다.\n\n" +
      "줄바꿈이 제멋대로라서 읽기 불편하다는 이야기를 자주 듣곤 했어요.\n\n" +
      "이제는 문단이 끝날 때마다 엔터 한 번만 눌러서 편하게 쓰고 싶습니다."
  },
  {
    title: "긴 한 문단 자동 줄바꿈",
    before:
      "이 카페는 조용한 음악과 은은한 조명이 어우러져서 혼자 작업하기에 정말 좋은 공간입니다. 다만 좌석 수가 아주 많지는 않아서 주말 오후에는 자리가 부족할 수 있습니다.",
    after:
      "이 카페는 조용한 음악과 은은한 조명이 어우러져서 혼자 작업하기에 정말 좋은 공간입니다.\n" +
      "다만 좌석 수가 아주 많지는 않아서 주말 오후에는 자리가 부족할 수 있습니다."
  },
  {
    title: "따옴표 안 줄바꿈 정리",
    before:
      "사장님이 \"오늘은\n정말\n바쁜 날이네요\"라고 말씀하셔서 웃음이 났습니다.\n" +
      "저도 모르게 '맞아요\n요즘 손님이 많죠'라고 대답했어요.",
    after:
      "사장님이 \"오늘은 정말 바쁜 날이네요\"라고 말씀하셔서 웃음이 났습니다.\n\n" +
      "저도 모르게 '맞아요 요즘 손님이 많죠'라고 대답했어요."
  }
];

function ExampleBlock({ title, before, after }: ExampleProps) {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="space-y-1">
          <div className="text-slate-500 font-medium">Before (원본)</div>
          <pre className="whitespace-pre-wrap rounded-md border bg-slate-50 px-3 py-2 text-slate-700 leading-relaxed">
            {before}
          </pre>
        </div>
        <div className="space-y-1">
          <div className="text-slate-500 font-medium">
            After (도구 적용 후, 문단 사이 줄바꿈 적용)
          </div>
          <pre className="whitespace-pre-wrap rounded-md border bg-emerald-50 px-3 py-2 text-slate-800 leading-relaxed">
            {after}
          </pre>
        </div>
      </div>
    </article>
  );
}

function ExamplesPage() {
  const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/+$/, "");
  const canonical = siteUrl ? `${siteUrl}/examples` : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>네이버 블로그 줄바꿈 전·후 예시</title>
        <meta
          name="description"
          content="네이버 블로그 글에 실제로 적용했을 때의 줄바꿈·문단 간격 Before/After 예시를 확인해 보세요."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          줄바꿈 정리 Before / After 예시
        </h1>
        <p className="text-sm text-slate-600">
          도구를 적용했을 때 어떤 느낌으로 문단 간격과 줄바꿈 규칙이 적용되는지,
          실제 블로그 스타일에 가까운 예시 3가지를 준비했습니다. 예시는 “엔터 두
          번(빈 줄) = 문단” 기준, 문단 사이 줄바꿈 1줄 설정을 가정하고 있습니다.
        </p>
        <p className="text-xs text-slate-600">
          더 자세한 작성 팁은{" "}
          <Link to="/guide" className="text-emerald-700 hover:underline">
            가이드
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </header>

      <section className="space-y-4">
        {EXAMPLES.map(example => (
          <ExampleBlock
            key={example.title}
            title={example.title}
            before={example.before}
            after={example.after}
          />
        ))}
      </section>
    </div>
  );
}

export default ExamplesPage;

