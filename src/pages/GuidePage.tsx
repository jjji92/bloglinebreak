import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function GuidePage() {
  const canonical = getCanonicalUrl("/guide");

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Helmet>
        <title>네이버 블로그 가독성 가이드</title>
        <meta
          name="description"
          content="네이버 블로그에서 가독성을 높이는 줄바꿈·문단 구성·체류시간을 올리는 작성 팁을 체크리스트 형태로 정리했습니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          네이버 블로그 가독성 체크리스트
        </h1>
        <p className="text-sm text-slate-600">
          블로그 글이 끝까지 읽히는지(체류시간)와, 검색에서 “유용한 글”로 보이는지는
          결국 <b>구조</b>와 <b>가독성</b>에서 많이 갈립니다. 아래 체크리스트는 누구나 바로
          적용할 수 있는 최소 기준을 정리한 것입니다.
        </p>
      </header>

      <section className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">가장 빠른 결론(권장 템플릿)</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>첫 문단: 결론/요약 1~2문장</li>
          <li>본문: “빈 줄(엔터 두 번) = 문단”으로 4~8문단 구성</li>
          <li>각 문단: 3~6줄 정도로 유지(모바일 기준)</li>
          <li>마지막: 한 줄 요약 + 추천/비추천 대상</li>
        </ol>
        <p className="text-[11px] text-slate-500">
          바로 적용해 보고 싶다면{" "}
          <Link to="/" className="text-emerald-700 hover:underline">
            도구
          </Link>
          에서 원문을 붙여넣고 문단 간격(1~2줄)을 선택해 보세요.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            1. 문단 사이 여백은 &quot;한 줄&quot;부터 시작
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            본문을 쓸 때는 문단을 빈 줄(엔터 두 번)로 구분하고, 가독성을 위해 문단
            사이 여백(빈 줄)은 1줄부터 시작해 보세요. 글이 길거나 정보량이 많을수록
            2줄로 늘려도 좋습니다. 특히 모바일에서 한 문단이 4~6줄을 넘지 않도록
            분리해 주세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            2. 한 문장에 한 줄이 아니라, &quot;의미 단위&quot;로 나누기
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            엔터를 너무 자주 치면 글이 끊겨 보이고, 너무 안 치면 &quot;벽 텍스트&quot;처럼
            느껴집니다. 제목 · 소제목 · 본문을 구분하고, 본문 안에서는 의미 단위로
            자연스럽게 묶어서 문단을 만들어 주세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            3. 불필요한 이모지 · 특수문자 줄이기
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            제목과 첫 문단에 너무 많은 이모지나 특수문자를 넣으면 신뢰도가
            떨어져 보일 수 있습니다. 강조가 필요하다면 볼드체, 번호, 짧은 소제목을
            우선 활용해 보세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            4. 한 문단에 핵심 메시지 하나만
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            하나의 문단에 여러 이야기를 섞기보다, &quot;하나의 문단 = 하나의 메시지&quot;를
            지키면 글 구조가 훨씬 명확해집니다. 핵심 문장은 문단의 첫 줄 또는 마지막
            줄에 배치하는 것이 좋습니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            5. 본문 글자 수는 &quot;짧게, 자주&quot; 나누기
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            모바일 기준으로 한 단락이 3~5줄 정도가 적당합니다. 리뷰나 체험단
            글은 사진-텍스트-사진-텍스트 구조로, 스크롤할 때마다 리듬감 있게
            정보를 전달해 주세요.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            6. 서론은 짧게, 결론은 분명하게
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            서론에서 너무 많은 이야기를 풀어내기보다, 글의 목적과 대상만 짧게
            말해 주세요. 마지막에는 &quot;이 글에서 무엇을 얻어 가면 좋은지&quot;를 한 번 더
            정리해 주면 체류 시간이 늘어납니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            7. 사진/캡션은 “설명”을 붙여서 정보 밀도를 올리기
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            사진만 연속으로 나열하면 정보가 비어 보일 수 있습니다. 사진 아래에 “무엇을
            보여주는지(장점/단점/주의사항)”를 1~2문장으로 써 주세요. 같은 사진이라도
            글의 유용성이 크게 올라갑니다.
          </p>
        </article>

        <article className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            8. 협찬/제공/광고 표기는 빠르게, 명확하게
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            협찬/제공을 받은 글이라면 초반에 “제공 내역 + 솔직 후기”를 명확히 적는 것이
            불필요한 오해를 줄입니다. 문단을 길게 쓰기보다, 짧게 2문단 정도로 정리하는
            것이 읽기에도 좋습니다.
          </p>
        </article>
      </section>

      <section className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">
          글이 얇아 보이는 순간(Thin content)을 피하는 팁
        </h2>
        <ul className="text-xs text-slate-700 leading-relaxed list-disc list-inside space-y-1">
          <li>“좋았어요/괜찮아요”만 반복하지 말고, <b>이유</b>를 1문장이라도 추가</li>
          <li>가격/시간/장소/대상 등 <b>구체 정보</b>를 넣기</li>
          <li>추천/비추천 대상을 명확히 쓰기</li>
          <li>자주 하는 질문을 글 안에서 한 번씩 답해주기</li>
        </ul>
        <p className="text-[11px] text-slate-500">
          도구 사용 중 “왜 이렇게 변환되나요?” 같은 질문은{" "}
          <Link to="/faq" className="text-emerald-700 hover:underline">
            FAQ
          </Link>
          에 모아두었습니다.
        </p>
      </section>

      <section className="flex items-center justify-between gap-3 border-t pt-4 mt-2">
        <p className="text-xs text-slate-600">
          아래 버튼을 눌러 실제 도구에서 문단 간격을 자동으로 정리해 보세요.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          줄바꿈 정리 도구 사용하기
        </Link>
      </section>
    </div>
  );
}

export default GuidePage;
