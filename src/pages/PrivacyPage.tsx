import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  getCanonicalUrl,
  getContactMailto,
} from "../siteConfig";

function PrivacyPage() {
  const mailto = getContactMailto();
  const canonical = getCanonicalUrl("/privacy");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>개인정보 처리방침 - {SITE_NAME}</title>
        <meta
          name="description"
          content="네이버 블로그 줄바꿈 정리 도구는 로그인 없이 동작하며, 사용자의 개인정보를 저장하거나 수집하지 않습니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          개인정보 처리방침
        </h1>
        <p className="text-sm text-slate-600">
          네이버 블로그 줄바꿈 정리 도구(이하 &quot;본 서비스&quot;)는 이용자의
          개인정보를 수집·저장하지 않는 것을 원칙으로 합니다.
        </p>
      </header>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">
          1. 수집하는 개인정보 항목
        </h2>
        <p>
          본 서비스는 회원가입, 로그인, 댓글, 게시물 작성 기능을 제공하지 않으며
          이용자로부터 이름, 연락처, 이메일 주소 등 어떠한 개인정보도 직접
          수집하지 않습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">
          2. 개인정보의 처리 목적 및 보유 기간
        </h2>
        <p>
          본 서비스는 브라우저 상에서 입력한 텍스트를 그대로 사용자의
          브라우저에서만 처리하며, 서버로 전송·저장하지 않습니다. 따라서 별도의
          개인정보 처리 및 보유가 이루어지지 않습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">
          3. 로그 및 분석 도구 사용 여부
        </h2>
        <p>
          본 서비스는 Google Analytics 등 외부 분석 도구를 사용하지 않습니다.
          다만, 서비스가 정적 호스팅 환경(예: Vercel)에서 제공되는 경우 호스팅
          제공자가 보안/운영 목적의 통상적인 접속 로그(예: IP 주소, 접속 시간 등)를
          일시적으로 처리할 수 있습니다. 운영자는 입력 텍스트를 수집·저장하지
          않으며, 별도의 이용자 식별 목적의 로그 분석을 하지 않는 것을 원칙으로
          합니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">
          4. 광고 노출 및 쿠키 사용
        </h2>
        <p>
          본 서비스는 운영을 위해 광고(예: Google AdSense)를 노출할 수 있으며, 그
          과정에서 Google 또는 제3자 광고 제공자가 브라우저 쿠키 등을 사용할 수
          있습니다.
        </p>
        <p>
          Google 광고 및 쿠키 사용에 대한 보다 자세한 내용은 Google
          광고정책·개인정보보호정책을 참고해 주시기 바랍니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">
          5. 이용자의 권리 및 행사 방법
        </h2>
        <p>
          본 서비스는 이용자의 개인정보를 수집·저장하지 않으므로, 별도의 열람,
          정정, 삭제 요청 절차는 존재하지 않습니다. 다만 추후 개인정보 수집 기능이
          추가될 경우, 관련 법령에 따른 권리 행사 방법을 본 개인정보 처리방침에
          명시하고 고지하겠습니다.
        </p>
      </section>

      <section className="space-y-3 text-xs text-slate-700 leading-relaxed">
        <h2 className="font-semibold text-slate-900">6. 문의처</h2>
        <p>
          개인정보 처리방침과 관련하여 문의사항이 있으신 경우, 아래 이메일로
          연락해 주시기 바랍니다.
        </p>
        {mailto ? (
          <p className="font-mono text-slate-800">
            <a href={mailto} className="text-emerald-700 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        ) : (
          <p className="text-slate-700">
            문의 이메일은{" "}
            <Link to="/contact" className="text-emerald-700 hover:underline">
              문의하기
            </Link>
            페이지에서 확인할 수 있습니다.
          </p>
        )}
      </section>

      <section className="space-y-1 text-[11px] text-slate-500 border-t pt-3">
        <p>본 개인정보 처리방침은 서비스 운영 및 광고 정책에 따라 변경될 수 있습니다.</p>
        <p>중요한 내용이 변경되는 경우 서비스 내 공지를 통해 안내드리겠습니다.</p>
      </section>
    </div>
  );
}

export default PrivacyPage;

