import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_OWNER,
  getCanonicalUrl,
  getContactMailto,
} from "../siteConfig";

function ContactPage() {
  const mailto = getContactMailto();
  const canonical = getCanonicalUrl("/contact");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>문의하기 - {SITE_NAME}</title>
        <meta
          name="description"
          content="서비스 이용 문의 및 피드백을 보내는 방법을 안내합니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          문의하기
        </h1>
        <p className="text-sm text-slate-600">
          기능 개선 제안, 오류 제보, 광고/제휴 관련 문의는 아래 방법으로 연락해
          주세요.
        </p>
      </header>

      <section className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">이메일</h2>
        {mailto ? (
          <div className="text-xs text-slate-700 leading-relaxed">
            <p>
              <a
                href={mailto}
                className="font-mono underline text-emerald-800 hover:text-emerald-700"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              답변은 영업일 기준 1~3일 내 드릴 수 있도록 노력하겠습니다.
            </p>
          </div>
        ) : (
          <div className="text-xs text-slate-700 leading-relaxed">
            <p>
              운영자가 배포 환경에서 문의 이메일을 설정 중입니다. (에드센스 심사/신뢰도
              관점에서 이메일을 꼭 등록해 주세요.)
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              개발/운영자라면 `VITE_CONTACT_EMAIL` 환경 변수를 설정하면 이 화면에
              표시됩니다.
            </p>
          </div>
        )}
      </section>

      <section className="rounded-lg border bg-slate-50 p-4 text-xs text-slate-700 leading-relaxed space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">운영 정보</h2>
        <p>
          운영자: <b>{SITE_OWNER ? SITE_OWNER : "개인(배포 환경에서 설정 가능)"}</b>
        </p>
        <p className="text-[11px] text-slate-500">
          운영자/문의 이메일은 애드센스 심사 및 신뢰도 관점에서 중요한 정보입니다.
        </p>
      </section>

      <section className="text-xs text-slate-700 leading-relaxed space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">문의 전 확인</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            개인정보 관련 내용은{" "}
            <Link to="/privacy" className="underline text-emerald-800 hover:text-emerald-700">
              개인정보 처리방침
            </Link>
            에서 먼저 확인해 주세요.
          </li>
          <li>
            사용법/예시는{" "}
            <Link to="/guide" className="underline text-emerald-800 hover:text-emerald-700">
              가이드
            </Link>
            ,{" "}
            <Link to="/examples" className="underline text-emerald-800 hover:text-emerald-700">
              예시
            </Link>
            페이지에서 확인할 수 있습니다.
          </li>
          <li>버그 제보는 “어떤 문장에서 어떻게 보였는지” 예시를 함께 보내주시면 도움이 됩니다.</li>
        </ul>
      </section>
    </div>
  );
}

export default ContactPage;

