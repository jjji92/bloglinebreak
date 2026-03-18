import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function AboutPage() {
  const canonical = getCanonicalUrl("/about");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>서비스 소개 - 네이버 블로그 줄바꿈 정리 도구 | BlogLineBreak</title>
        <meta
          name="description"
          content="BlogLineBreak는 네이버 블로그 글의 줄바꿈과 문단 간격을 자동으로 정리해 모바일 가독성을 높여주는 무료 웹 도구입니다. 제작 배경, 주요 기능, 운영 정보를 소개합니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          BlogLineBreak 소개
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          네이버 블로그 글쓰기에서 가장 번거로운 것 중 하나가 줄바꿈과 문단 간격입니다.
          같은 내용이라도 문단이 잘 정리된 글과 들쭉날쭉한 글은 가독성이 크게 다릅니다.
          BlogLineBreak는 이 문제를 간단하게 해결하기 위해 만들어진 무료 웹 도구입니다.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          왜 만들었나요?
        </h2>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            네이버 블로그를 운영하다 보면 PC에서 작성한 글이 모바일에서는 전혀 다르게
            보이는 경험을 하게 됩니다. 문단 사이에 빈 줄을 일정하게 넣고 싶은데,
            에디터에서 손으로 직접 하나하나 맞추는 것은 매우 번거롭습니다.
          </p>
          <p>
            특히 문단이 길어지면 모바일 화면에서 "벽 텍스트"가 되어 독자가 중간에
            읽기를 포기하는 경우가 생깁니다. 체류시간이 줄면 블로그 검색 노출에도
            좋지 않습니다. 이 문제를 자동으로 해결해 주는 도구가 필요하다는 생각에서
            BlogLineBreak를 만들게 되었습니다.
          </p>
          <p>
            복잡한 회원가입이나 개인정보 수집 없이, 글을 붙여넣으면 즉시 변환되는
            최소한의 도구로 설계했습니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              to: "/",
              title: "줄바꿈 정리 도구",
              desc: "블로그 글을 붙여넣으면 문단 간격을 자동으로 정리합니다. 줄바꿈 개수(1~3줄)를 선택할 수 있습니다.",
              tag: "핵심 기능",
            },
            {
              to: "/counter",
              title: "글자수 세기",
              desc: "글자수, 단어수, 공백 포함/제외, 줄 수를 실시간으로 확인합니다. 네이버 글자수 기준 확인에 유용합니다.",
              tag: "도구",
            },
            {
              to: "/special-characters",
              title: "특수문자 모음",
              desc: "블로그 글에 자주 쓰이는 특수문자, 이모티콘, 기호를 클릭 한 번으로 복사할 수 있습니다.",
              tag: "도구",
            },
            {
              to: "/hashtag",
              title: "해시태그 생성기",
              desc: "주제를 입력하면 관련 해시태그를 자동으로 추천합니다. 네이버 블로그 태그로 바로 활용하세요.",
              tag: "도구",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg border bg-white p-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 rounded px-1.5 py-0.5 shrink-0">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          이 도구가 유용한 분들
        </h2>
        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 list-disc list-inside">
          <li>
            <strong>네이버 블로그 운영자</strong> — 글을 자주 발행하는데 매번 줄바꿈을
            손으로 맞추는 게 번거로운 분
          </li>
          <li>
            <strong>체험단·협찬 블로거</strong> — 여러 글을 빠르게 작성·업로드해야 하는 분
          </li>
          <li>
            <strong>블로그 입문자</strong> — 가독성 좋은 글 구성 방법을 배우고 싶은 분
          </li>
          <li>
            <strong>글 가독성에 신경 쓰는 분</strong> — 모바일 독자를 위해 문단 간격을
            통일하고 싶은 분
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          이 도구는 어떻게 작동하나요?
        </h2>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            도구에 텍스트를 붙여넣으면 다음 규칙이 자동으로 적용됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>문단 구분</strong> — 빈 줄(엔터 두 번)을 기준으로 문단을 인식합니다.
            </li>
            <li>
              <strong>문단 간격 정리</strong> — 문단 사이에 선택한 만큼의 빈 줄(1~3줄)을
              자동으로 넣습니다.
            </li>
            <li>
              <strong>따옴표 안 줄바꿈 정리</strong> — 인용문 안의 불필요한 줄바꿈은
              공백으로 정리해 문장이 자연스럽게 이어지게 합니다.
            </li>
          </ul>
          <p>
            모든 처리는 <strong>브라우저에서만</strong> 이루어집니다. 입력한 텍스트는
            서버로 전송되거나 저장되지 않습니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          블로그 글쓰기 팁도 함께 제공합니다
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          도구 외에도, 네이버 블로그를 더 효과적으로 운영하기 위한 실전 가이드를 제공합니다.
          검색 상위노출 방법, 체류시간 늘리기, 수익화 방법, 카테고리 설정, 애드포스트까지
          블로그 운영에 바로 도움이 되는 내용을 정리했습니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { to: "/tips/blog-post-structure", label: "글 구조 가이드" },
            { to: "/tips/naver-blog-seo", label: "상위노출 전략" },
            { to: "/tips/blog-readtime", label: "체류시간 늘리기" },
            { to: "/tips/blog-monetize", label: "수익화 가이드" },
            { to: "/tips/adpost-guide", label: "애드포스트 신청" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-medium px-3 py-1 hover:bg-emerald-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg border bg-white p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">운영 정보</h2>
        <div className="text-sm text-slate-600 leading-relaxed space-y-2">
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-14">서비스명</span>
            <span>BlogLineBreak (블로그라인브레이크)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-14">도메인</span>
            <span>bloglinebreak.com</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-14">운영</span>
            <span>개인 운영 (BlogLineBreak 운영팀)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-14">문의</span>
            <a
              href="mailto:bloglinebreak@gmail.com"
              className="text-emerald-800 underline hover:text-emerald-700"
            >
              bloglinebreak@gmail.com
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-14">데이터</span>
            <span>서버 저장 없음 — 입력 텍스트는 브라우저에서만 처리됩니다.</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
          본 서비스는 네이버 및 구글과 공식 제휴 관계가 없는 독립적인 도구입니다.
          서비스 이용 시 발생하는 결과에 대한 책임은 이용자 본인에게 있으며, 운영자는
          최선의 서비스 제공을 위해 지속적으로 개선하고 있습니다.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 border-t pt-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          줄바꿈 정리 도구 사용하기
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2 transition-colors"
        >
          문의하기
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
