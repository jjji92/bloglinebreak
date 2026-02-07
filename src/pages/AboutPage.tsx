import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  SITE_NAME,
  SITE_OWNER,
  getCanonicalUrl,
  getContactMailto,
  CONTACT_EMAIL,
} from "../siteConfig";

function AboutPage() {
  const canonical = getCanonicalUrl("/about");
  const mailto = getContactMailto();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>서비스 소개 - {SITE_NAME}</title>
        <meta
          name="description"
          content="네이버 블로그 글쓰기에서 줄바꿈/문단 간격을 자동으로 정리해 가독성을 높이는 도구입니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          서비스 소개
        </h1>
        <p className="text-sm text-slate-600">
          {SITE_NAME}는 블로그 글을 더 읽기 쉽게 만들기 위해, 줄바꿈과 문단 간격을
          자동으로 정리해 주는 웹 도구입니다.
        </p>
      </header>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">무엇을 해결하나요?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>모바일에서 답답해 보이는 &quot;벽 텍스트&quot;를 문단 중심으로 정리</li>
          <li>문단 사이 간격을 일정하게 맞춰 스크롤 가독성 개선</li>
          <li>따옴표(인용) 안의 불필요한 줄바꿈을 공백으로 정리</li>
          <li>너무 긴 문장은 읽기 좋은 위치에서 자동 줄바꿈</li>
        </ul>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">운영 목적과 제작 배경</h2>
        <p>
          네이버 블로그 글을 모바일에서 읽다 보면, 문단이 너무 길거나 줄바꿈이
          들쭉날쭉해서 내용이 좋은데도 피로하게 느껴지는 경우가 있습니다. 이 도구는
          그런 불편을 줄이기 위해, &quot;문단(빈 줄 기준)&quot;을 중심으로 글을 정리해 주는
          최소 기능 유틸리티로 만들었습니다.
        </p>
        <p>
          운영은 {SITE_OWNER ? SITE_OWNER : "개인"}이(가) 직접 하고 있으며, 사용자의
          입력 텍스트를 저장하지 않는 방향을 우선으로 설계했습니다.
        </p>
        <p className="text-slate-600">
          서비스 유지·개선을 위해 향후 광고 등으로 운영비를 충당할 수 있습니다.
          다만, 도구의 핵심 기능과 이용 경험을 해치지 않는 선에서 신중하게
          적용하려고 합니다.
        </p>
      </section>

      <section className="rounded-lg border bg-white p-4 shadow-sm space-y-2 text-xs text-slate-700 leading-relaxed">
        <h2 className="text-sm font-semibold text-slate-900">운영 정보</h2>
        <p>
          운영자: <b>{SITE_OWNER ? SITE_OWNER : "개인(배포 환경에서 설정 가능)"}</b>
        </p>
        <p>
          문의:{" "}
          {mailto ? (
            <a href={mailto} className="font-mono underline text-emerald-800 hover:text-emerald-700">
              {CONTACT_EMAIL}
            </a>
          ) : (
            <Link to="/contact" className="underline text-emerald-800 hover:text-emerald-700">
              문의하기 페이지
            </Link>
          )}
        </p>
        <p className="text-[11px] text-slate-500">
          본 서비스는 네이버/구글과 공식 제휴된 서비스가 아닌, 독립적인 글쓰기 보조
          도구입니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">입력한 글은 저장되나요?</h2>
        <p>
          본 서비스는 입력한 텍스트를 서버로 전송하지 않고, 브라우저에서만 처리하는
          것을 목표로 합니다. 자세한 내용은{" "}
          <Link to="/privacy" className="underline text-emerald-800 hover:text-emerald-700">
            개인정보 처리방침
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">추천 사용 흐름</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>원문을 붙여넣고, 문단은 빈 줄(엔터 두 번)로 구분</li>
          <li>문단 사이 줄바꿈 개수를 선택(기본 1줄)</li>
          <li>변환 결과를 복사해서 네이버 블로그 에디터에 붙여넣기</li>
        </ol>
      </section>

      <section className="border-t pt-4 flex items-center justify-between gap-3">
        <p className="text-xs text-slate-600">
          바로 도구를 사용해 보고 싶다면 아래 버튼을 눌러 주세요.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          도구로 이동
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;

