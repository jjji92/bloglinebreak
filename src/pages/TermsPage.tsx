import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SITE_NAME, SITE_OWNER, getCanonicalUrl } from "../siteConfig";

function TermsPage() {
  const canonical = getCanonicalUrl("/terms");
  const effectiveDate = "2026-02-06";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>이용약관 - {SITE_NAME}</title>
        <meta
          name="description"
          content="서비스 이용약관 및 면책 조항을 안내합니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          이용약관
        </h1>
        <p className="text-sm text-slate-600">
          본 약관은 {SITE_NAME}(이하 &quot;본 서비스&quot;) 이용과 관련하여 이용자와
          운영자 간 권리·의무 및 책임사항을 규정합니다.
        </p>
        <p className="text-[11px] text-slate-500">시행일: {effectiveDate}</p>
      </header>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">1. 서비스의 성격</h2>
        <p>
          본 서비스는 사용자가 입력한 텍스트의 줄바꿈/문단 간격을 정리하여 복사할 수
          있도록 돕는 단일 기능 도구입니다. 회원가입, 로그인, 저장 기능 없이
          브라우저에서 동작하도록 설계되었습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">2. 이용자의 책임</h2>
        <p>
          이용자는 본 서비스 사용 과정에서 타인의 권리를 침해하지 않도록 주의해야
          합니다. 특히 저작권을 침해하거나 불법·유해 콘텐츠를 포함하는 텍스트를
          게시/배포하는 행위는 이용자 본인의 책임입니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">3. 결과물의 정확성</h2>
        <p>
          본 서비스는 가독성을 높이기 위한 자동화 로직을 제공하지만, 모든 문장과
          문맥에 대해 완벽한 결과를 보장하지 않습니다. 게시 전 최종 검수는 이용자가
          직접 수행해야 합니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">4. 광고</h2>
        <p>
          본 서비스는 운영을 위해 광고(예: Google AdSense)를 노출할 수 있습니다.
          광고 표시 방식은 정책 및 서비스 운영 상황에 따라 변경될 수 있습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">5. 서비스 변경 및 중단</h2>
        <p>
          운영자는 서비스 품질 개선 및 정책 준수를 위해 기능/화면 구성을 변경하거나
          일부 기능을 중단할 수 있습니다. 가능한 범위 내에서 서비스 내 공지 등을 통해
          안내합니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">6. 면책</h2>
        <p>
          운영자는 본 서비스 이용으로 인해 발생하는 직·간접 손해에 대해 법령이
          허용하는 범위 내에서 책임을 제한합니다. 다만 운영자의 고의 또는 중대한
          과실이 있는 경우는 예외로 합니다.
        </p>
      </section>

      <section className="space-y-2 text-[11px] text-slate-500 border-t pt-3">
        <p>
          운영자: {SITE_OWNER ? SITE_OWNER : "개인(배포 환경에서 설정 가능)"}
        </p>
        <p>
          문의:{" "}
          <Link to="/contact" className="text-emerald-700 hover:underline">
            문의하기
          </Link>
        </p>
        <p>본 약관은 서비스 운영 정책에 따라 변경될 수 있습니다.</p>
      </section>
    </div>
  );
}

export default TermsPage;

