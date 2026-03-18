import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

const ARTICLES = [
  {
    to: "/tips/blog-post-structure",
    title: "네이버 블로그 글 구조 완전 가이드",
    desc: "제목 작성법, 도입부 후킹, 소제목 배치, 본문 구성, 마무리까지 읽히는 블로그 글의 구조를 단계별로 정리했습니다.",
    tag: "글쓰기",
  },
  {
    to: "/tips/naver-blog-seo",
    title: "네이버 블로그 상위노출 하는 법",
    desc: "C-rank·DIA 알고리즘 이해부터 제목 키워드 전략, 글 길이, 발행 주기까지 검색 상단에 노출되는 실전 방법을 정리했습니다.",
    tag: "SEO",
  },
  {
    to: "/tips/blog-readtime",
    title: "블로그 체류시간 2배 늘리는 글쓰기 법",
    desc: "첫 3줄 후킹, 문단 구조, 소제목 배치, 사진과 텍스트 리듬감까지 독자가 끝까지 읽게 만드는 방법을 알아봅니다.",
    tag: "글쓰기",
  },
  {
    to: "/tips/blog-category",
    title: "네이버 블로그 카테고리 설정 완전 가이드",
    desc: "주제 선정 방법, 대분류·소분류 구성, 카테고리별 글 수 기준까지 처음에 잘 잡아두면 이후 운영이 훨씬 수월해집니다.",
    tag: "운영",
  },
  {
    to: "/tips/blog-monetize",
    title: "네이버 블로그 수익화 완전 가이드",
    desc: "애드포스트, 체험단·협찬, 원고료, 외부 수익 연동까지 블로그로 돈 버는 방법을 단계별로 설명합니다.",
    tag: "수익화",
  },
  {
    to: "/tips/adpost-guide",
    title: "네이버 애드포스트 신청 방법 및 수익 구조",
    desc: "애드포스트 신청 조건, 승인 높이는 방법, 수익 구조와 실제 수익 예시, 수익 높이는 팁까지 정리했습니다.",
    tag: "수익화",
  },
];

function TipsIndexPage() {
  const canonical = getCanonicalUrl("/tips");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>블로그 글쓰기 팁 모음 - 네이버 블로그 운영 가이드</title>
        <meta
          name="description"
          content="네이버 블로그 상위노출, 체류시간 늘리기, 수익화 방법 등 블로그 운영에 바로 적용할 수 있는 실전 팁을 모았습니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          블로그 글쓰기 팁
        </h1>
        <p className="text-sm text-slate-600">
          네이버 블로그를 더 잘 운영하기 위한 실전 가이드 모음입니다. 검색 상위노출,
          체류시간 개선, 수익화까지 단계별로 정리했습니다.
        </p>
      </header>

      <section className="space-y-3">
        {ARTICLES.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="block rounded-lg border bg-white p-4 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="inline-block text-[11px] font-medium text-emerald-700 bg-emerald-50 rounded px-2 py-0.5">
                  {a.tag}
                </span>
                <h2 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {a.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-1 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">도구도 함께 활용해 보세요</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          좋은 내용을 썼어도 줄바꿈이 들쭉날쭉하면 가독성이 뚝 떨어집니다. 아래
          도구로 문단 간격을 자동 정리하면 체류시간 개선에 바로 도움이 됩니다.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          줄바꿈 정리 도구 사용하기
        </Link>
      </section>
    </div>
  );
}

export default TipsIndexPage;
