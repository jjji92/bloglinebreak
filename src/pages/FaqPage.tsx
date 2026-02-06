import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SITE_NAME, getCanonicalUrl } from "../siteConfig";

function FaqPage() {
  const canonical = getCanonicalUrl("/faq");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>자주 묻는 질문(FAQ) - {SITE_NAME}</title>
        <meta
          name="description"
          content="문단 기준, 줄바꿈 규칙, 따옴표 처리, 복사/붙여넣기 팁, 개인정보 처리 등 자주 묻는 질문을 정리했습니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          자주 묻는 질문(FAQ)
        </h1>
        <p className="text-sm text-slate-600">
          도구가 적용하는 규칙과 사용 팁을 질문/답변 형태로 정리했습니다.
        </p>
      </header>

      <section className="space-y-3">
        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 여기서 &quot;문단&quot;은 무엇인가요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            본 서비스에서는 <b>빈 줄(엔터 두 번)</b>을 문단 구분으로 봅니다. 즉,
            문단을 나누고 싶다면 문장 사이에 빈 줄을 한 줄 넣어 주세요.
            변환 결과에서는 문단 사이에 선택한 만큼의 빈 줄(여백)이 자동으로
            들어갑니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 문단 사이 줄바꿈 1줄/2줄/3줄은 무슨 차이인가요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            &quot;문단 사이 줄바꿈 개수&quot;는 문단과 문단 사이에 넣어주는 <b>빈 줄</b>의
            개수입니다. 짧고 가벼운 글은 1줄, 정보량이 많은 글은 2줄이 읽기 편한
            경우가 많습니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 엔터를 한 번만 쳤는데도 문단이 나뉘어요.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            이 도구는 “빈 줄(엔터 두 번)”을 문단 기준으로 삼습니다. 다만 원문에 이미
            여러 개의 빈 줄이 섞여 있거나, 복사 과정에서 줄바꿈이 깨져 들어오면 예상보다
            문단이 많아 보일 수 있습니다. 우선 원문에서 문단 사이만 빈 줄을 넣고,
            문단 안에서는 엔터를 최소화한 뒤 다시 변환해 보세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 입력한 글이 서버로 전송되거나 저장되나요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            본 서비스는 입력 텍스트를 <b>브라우저에서만 처리</b>하는 것을 목표로
            합니다. 자세한 설명은{" "}
            <Link to="/privacy" className="text-emerald-700 hover:underline">
              개인정보 처리방침
            </Link>
            에서 확인해 주세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 따옴표 안 줄바꿈은 왜 공백으로 바꾸나요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            인용문(따옴표 안)은 문장 흐름이 끊기면 의미 전달이 어려워질 수 있어,
            따옴표 안의 줄바꿈은 공백으로 정리해 문장이 자연스럽게 이어지도록
            처리합니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 결과가 너무 자주/너무 적게 줄바꿈돼요. 어떻게 하면 좋나요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            글의 성격에 따라 “정답”은 달라요. 정보 글/리뷰처럼 설명이 많은 글은 문단을
            더 자주(2줄 여백) 나눠도 좋고, 짧은 일상 글은 1줄 여백이 더 자연스러운 경우가
            많습니다. 우선 <b>문단 사이 여백 1줄</b>로 시작해 보고, 글이 길거나 읽기 답답하면
            2줄로 올려보는 것을 권장합니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 네이버 블로그에 붙여넣었더니 줄바꿈이 달라졌어요.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            붙여넣기 환경(PC/모바일, 에디터 종류)에 따라 공백/줄바꿈 처리 방식이 다를 수
            있습니다. 가능하면 <b>PC에서 일반 붙여넣기</b>로 먼저 확인하고, 결과가 어색하면
            문단 사이 여백을 1줄로 낮추거나 원문에서 불필요한 빈 줄을 정리한 뒤 다시
            변환해 보세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 협찬/제공 문구는 어디에 넣는 게 좋나요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            일반적으로 글 초반(첫 문단 근처)에 “제공 내역 + 솔직 후기”를 짧게 적는 것이
            읽는 사람에게도 명확합니다. 홈 화면의 “체험단/협찬 문구” 템플릿을 불러와서
            상황에 맞게 수정해 사용해 보세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 이모지/특수문자는 얼마나 써도 되나요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            과도한 장식은 글을 “광고처럼” 보이게 만들 수 있습니다. 제목·첫 문단에서는
            최소화하고, 강조가 필요하면 번호/소제목/굵은 글씨 같은 구조적 요소를 먼저
            활용해 보세요. 가독성 기준은{" "}
            <Link to="/guide" className="text-emerald-700 hover:underline">
              가이드
            </Link>
            에도 정리해 두었습니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 글이 “얇아 보인다”는 게 무슨 뜻인가요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            같은 주제라도 정보가 부족하거나(근거/경험/구체 정보 없음) 구조가 엉켜 있으면
            유용성이 낮아 보일 수 있습니다. “무엇이 좋았는지”뿐 아니라 <b>왜 좋았는지</b>,
            <b>누구에게 추천하는지</b>를 한 문장이라도 넣어주세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 이 사이트는 네이버/구글과 제휴된 서비스인가요?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            아닙니다. 본 서비스는 블로그 글쓰기 편의를 위한 독립적인 도구이며, 네이버 또는
            구글과 공식 제휴 관계가 아닙니다. 운영 정보는{" "}
            <Link to="/about" className="text-emerald-700 hover:underline">
              소개
            </Link>
            와{" "}
            <Link to="/contact" className="text-emerald-700 hover:underline">
              문의
            </Link>
            페이지에서 확인할 수 있습니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Q. 예시를 보고 싶어요.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            실제 Before/After는{" "}
            <Link to="/examples" className="text-emerald-700 hover:underline">
              예시
            </Link>
            페이지에서 확인할 수 있습니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm space-y-1">
          <h2 className="text-sm font-semibold text-slate-900">Q. 오류/개선 요청은 어디로 하나요?</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            버그 제보나 기능 제안은{" "}
            <Link to="/contact" className="text-emerald-700 hover:underline">
              문의하기
            </Link>
            로 보내주세요. 재현 가능한 예시(원문 일부)를 함께 주시면 더 빠르게 확인할 수
            있습니다. (개인정보가 포함된 내용은 제외해 주세요.)
          </p>
        </article>
      </section>
    </div>
  );
}

export default FaqPage;

