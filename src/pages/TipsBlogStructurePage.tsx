import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsBlogStructurePage() {
  const canonical = getCanonicalUrl("/tips/blog-post-structure");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>네이버 블로그 글 구조 완전 가이드 - 제목부터 마무리까지</title>
        <meta
          name="description"
          content="네이버 블로그 글을 쓸 때 제목, 도입부, 본문 소제목, 이미지 배치, 마무리까지 구조화하는 방법을 단계별로 설명합니다. 클릭률과 체류시간을 높이는 글 구성법."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-3">
        <div className="flex items-center gap-2">
          <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700">블로그 팁</Link>
          <span className="text-slate-300 text-xs">›</span>
          <span className="text-xs text-emerald-700 font-medium">글쓰기</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          네이버 블로그 글 구조 완전 가이드
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          "무슨 내용을 쓸지는 아는데, 어떻게 구성해야 할지 모르겠다"는 분들이 많습니다.
          좋은 내용도 구조가 엉키면 독자가 금방 떠나버립니다. 이 글에서는 제목부터
          마무리까지 블로그 글을 잘 구성하는 방법을 단계별로 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 제목 — 클릭을 결정하는 첫인상
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          블로그 제목은 검색 결과에서 독자가 클릭할지 말지를 결정하는 0.5초의 승부처입니다.
          좋은 제목은 두 가지를 동시에 만족합니다. 첫째, 검색어가 자연스럽게 포함돼 있어야
          합니다. 둘째, 클릭하고 싶은 이유가 있어야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          클릭율을 높이는 제목 유형을 몇 가지 정리하면 다음과 같습니다. 숫자를 활용한 제목
          (예: "초보도 되는 5가지 방법")은 정보의 양이 명확해 보여 클릭율이 높습니다.
          연도나 최신성을 강조한 제목 (예: "2026년 최신 기준")은 정보가 최근 것임을
          알려주므로 신뢰도가 올라갑니다. 문제 해결형 제목 (예: "OO 안 되는 이유와 해결법")은
          독자가 겪고 있는 문제에 직접 말을 거는 방식이라 반응이 좋습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">제목 작성 체크리스트</p>
          <ul className="list-disc list-inside space-y-1">
            <li>핵심 키워드가 제목 앞쪽(앞 15자 안)에 포함되어 있는가</li>
            <li>제목 길이는 25~35자 내외인가 (너무 길면 검색 결과에서 잘릴 수 있음)</li>
            <li>숫자, 연도, 구체적인 혜택이 포함되어 클릭하고 싶어지는가</li>
            <li>과장되거나 낚시성 표현은 없는가 (신뢰도 저하 및 블로그 평가 하락)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 도입부 — 독자를 붙잡는 첫 3문단
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          독자가 블로그에 들어오면 처음 3~5초 안에 "이 글이 내게 유용한가"를 판단합니다.
          도입부가 약하면 바로 뒤로 버튼을 누릅니다. 체류시간이 짧아지면 검색 알고리즘에서도
          이 글을 "좋지 않은 콘텐츠"로 인식할 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          효과적인 도입부의 패턴은 크게 세 가지입니다. 첫째는 <strong>문제 제기형</strong>으로,
          독자가 공감할 만한 상황이나 불편함을 언급한 후 "이 글에서 해결해 드립니다"로
          연결합니다. 둘째는 <strong>결론 먼저형</strong>으로, 가장 중요한 핵심 정보를
          첫 문단에 꺼내놓고 이후 상세 설명을 이어갑니다. 정보 글에 특히 효과적입니다.
          셋째는 <strong>경험 공유형</strong>으로, "저도 이 방법을 써보니 OO이 달라졌어요"처럼
          실제 경험을 바탕으로 시작하면 신뢰도가 높아집니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          도입부는 짧고 명확하게 쓰는 것이 좋습니다. 3~5문단, 각 문단은 3줄 이내를
          목표로 하면 됩니다. 너무 긴 서론은 오히려 독자를 지치게 만듭니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 소제목(H2/H3) — 글 전체를 구조화하는 뼈대
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          소제목은 글의 뼈대입니다. 독자가 스크롤을 빠르게 내리며 자신에게 필요한
          부분을 찾을 때, 소제목이 눈에 들어오지 않으면 그냥 닫아버립니다. 반대로
          소제목이 잘 정리되어 있으면 독자가 원하는 섹션으로 바로 이동해 읽기 시작합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          소제목을 작성할 때는 몇 가지 원칙을 지키면 좋습니다. 소제목은 그 섹션의
          핵심 내용을 한 줄로 압축해야 합니다. "2. 방법"처럼 모호한 소제목보다
          "2. 키워드를 제목 앞에 넣는 이유"처럼 구체적으로 쓰면 훨씬 좋습니다.
          또한 소제목 간격은 500자~800자마다 하나씩 배치하는 것이 적당합니다.
          너무 잦으면 글이 파편화되어 보이고, 너무 드물면 읽다가 지칩니다.
        </p>
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-3 text-xs text-slate-700 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">소제목 예시 비교</p>
          <div className="space-y-2">
            <div>
              <p className="text-slate-500">❌ 나쁜 예시</p>
              <p>1. 개요 / 2. 방법 / 3. 결론</p>
            </div>
            <div>
              <p className="text-slate-500">✓ 좋은 예시</p>
              <p>1. 왜 블로그 글 구조가 중요한가 / 2. 제목에서 체류시간을 잡는 3가지 원칙 / 3. 마무리에 꼭 넣어야 할 한 가지</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 본문 — 정보 밀도와 가독성의 균형
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          본문은 글의 핵심입니다. 정보가 충분하되, 읽기 불편하지 않아야 합니다.
          네이버 블로그는 모바일에서 읽는 비율이 매우 높아서, PC 화면을 기준으로
          쓴 긴 문장은 모바일에서 "벽 텍스트"가 되기 쉽습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          한 문단은 3~5문장이 적당합니다. 문장 하나는 가능하면 50자 이내로 끊는 것이
          좋습니다. 어려운 개념은 예시나 비유를 들어 설명하고, 목록으로 정리할 수 있는
          내용은 번호 목록이나 불릿으로 시각화하면 훨씬 읽기 쉬워집니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          본문 길이는 주제와 목적에 따라 다르지만, 정보성 글은 <strong>최소 700자</strong>
          이상, 가이드 형식의 글은 <strong>1,500자 이상</strong>을 권장합니다.
          단순히 글자 수를 채우기 위해 늘리는 것은 오히려 역효과입니다. 독자가
          실제로 유용하다고 느끼는 정보를 충분히 담는 것이 목표입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          이미지는 텍스트 중간중간에 배치해 읽는 흐름에 리듬감을 줍니다. 소제목 직후,
          또는 설명이 끝난 뒤에 관련 이미지나 캡처를 넣으면 자연스럽습니다.
          글 한 편에 최소 3~5장의 이미지를 넣는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 마무리 — 독자가 행동하게 만드는 마지막 문단
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          마무리는 단순히 "이상입니다"로 끝내는 공간이 아닙니다. 글 전체를 읽은 독자에게
          "다음에 무엇을 해야 하는가"를 알려주는 역할입니다. 마무리가 좋은 글은
          독자가 공감·댓글을 달거나, 다음 글도 보고 싶어지거나, 즐겨찾기에 추가하게
          만들 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          효과적인 마무리 구성 방법입니다. 먼저 글 전체 내용을 2~3줄로 핵심 요약합니다.
          다음으로 독자가 바로 실천할 수 있는 행동 하나를 제안합니다 (예: "오늘부터
          소제목 하나씩 미리 적고 글 쓰기 시작해 보세요"). 마지막으로 관련 글이나
          다음에 읽으면 좋을 글로 링크를 자연스럽게 연결합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          마무리에 독자에게 질문을 던지는 것도 댓글 유도에 효과적입니다.
          "여러분은 어떤 방식으로 블로그 글을 구성하시나요?"처럼 가볍게 물으면
          독자가 자신의 경험을 댓글로 남기기 쉬워집니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 전체 구조 한눈에 보기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          지금까지 설명한 내용을 하나의 템플릿으로 정리하면 다음과 같습니다. 블로그를
          처음 시작하거나 글 구성에 어려움을 느끼는 분들은 이 템플릿을 그대로 따라
          써보는 것만으로도 글의 완성도가 크게 올라갑니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-4 text-sm text-slate-700 leading-relaxed space-y-3">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">📌 제목</p>
            <p className="text-xs text-slate-600">핵심 키워드 포함 + 클릭 유인 요소 (숫자/연도/문제 해결) / 25~35자</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">📌 도입부 (3~5문단)</p>
            <p className="text-xs text-slate-600">공감 → 이 글이 해결해줄 것 → 이 글을 읽으면 얻게 될 것</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">📌 본문 소제목 1 + 설명 + 이미지</p>
            <p className="text-xs text-slate-600">각 소제목 아래 3~5문단, 이미지 1~2장</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">📌 본문 소제목 2, 3, 4... 반복</p>
            <p className="text-xs text-slate-600">총 3~6개 소제목이 적당 (주제 깊이에 따라 조정)</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">📌 마무리 (2~3문단)</p>
            <p className="text-xs text-slate-600">핵심 요약 → 실천 제안 → 다음 글 연결 / 선택: 독자 질문</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          7. 글 구조와 함께 챙겨야 할 것 — 줄바꿈과 문단 간격
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          글 구조를 아무리 잘 잡아도, 문단 사이 여백이 들쭉날쭉하면 가독성이 뚝
          떨어집니다. 특히 네이버 블로그는 PC와 모바일에서 줄바꿈 표시가 다를 수 있어서,
          작성할 때와 실제 블로그에서 보이는 모습이 다른 경우가 많습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          문단 사이 여백은 빈 줄(엔터 두 번)로 구분하고, 여백은 1~2줄로 일정하게 유지하는 것이
          좋습니다. 이 작업이 번거롭다면 줄바꿈 정리 도구를 활용하면 자동으로 정리됩니다.
        </p>
      </section>

      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>제목: 핵심 키워드 앞쪽 배치 + 클릭 유인 요소 포함, 25~35자</li>
          <li>도입부: 문제 공감 → 이 글의 해결책 → 읽으면 얻을 것, 3~5문단</li>
          <li>소제목: 500~800자마다 하나, 구체적으로 작성</li>
          <li>본문: 한 문단 3~5문장, 이미지 최소 3~5장 분산 배치</li>
          <li>마무리: 핵심 요약 + 실천 제안 + 다음 글 연결</li>
        </ol>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link
          to="/tips/naver-blog-seo"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          다음: 상위노출 전략 →
        </Link>
      </div>
    </div>
  );
}

export default TipsBlogStructurePage;
