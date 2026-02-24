import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsSeoPage() {
  const canonical = getCanonicalUrl("/tips/naver-blog-seo");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>네이버 블로그 상위노출 하는 법 - 검색 최적화 실전 가이드</title>
        <meta
          name="description"
          content="네이버 C-rank·DIA 알고리즘 이해부터 제목 키워드 전략, 글 길이, 발행 주기, 이미지 최적화까지 블로그 검색 상위노출을 위한 실전 방법을 정리했습니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-3">
        <div className="flex items-center gap-2">
          <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700">블로그 팁</Link>
          <span className="text-slate-300 text-xs">›</span>
          <span className="text-xs text-emerald-700 font-medium">SEO</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          네이버 블로그 상위노출 하는 법
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          블로그를 열심히 운영하는데 검색 결과 첫 페이지에 내 글이 안 보인다면
          굉장히 답답하죠. 네이버는 자체 알고리즘으로 블로그 글의 순위를
          결정합니다. 이 글에서는 네이버 검색 알고리즘의 핵심 원리와 함께,
          실제로 적용할 수 있는 상위노출 전략을 단계별로 설명합니다.
        </p>
      </header>

      {/* 1. 알고리즘 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 네이버 검색 알고리즘 이해하기 — C-rank와 DIA
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버는 블로그 글을 평가할 때 크게 두 가지 점수를 사용합니다.
          첫 번째는 <strong>C-rank(콘텐츠 랭크)</strong>로, 블로그 자체의 신뢰도와
          활동성을 측정합니다. 꾸준히 글을 발행하고, 방문자가 많고, 공감·댓글이
          활발한 블로그일수록 C-rank가 높아집니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          두 번째는 <strong>DIA(Deep Intent Analysis)</strong>로, 글의 내용이
          검색 의도에 얼마나 잘 맞는지를 평가합니다. 단순히 키워드를 반복하는
          것보다, 검색자가 궁금해할 내용을 충실하게 담은 글이 더 높은 점수를
          받습니다. 결국 "검색한 사람이 원하는 정보를 얼마나 잘 제공하는가"가
          핵심입니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">핵심 정리</p>
          <ul className="list-disc list-inside space-y-1">
            <li>C-rank: 블로그 전체 신뢰도 (꾸준한 발행, 방문자 수, 반응)</li>
            <li>DIA: 개별 글의 검색 의도 충족도 (정보의 깊이, 구체성)</li>
            <li>두 점수 모두 높아야 상위노출 가능성이 올라감</li>
          </ul>
        </div>
      </section>

      {/* 2. 제목 키워드 전략 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 제목 키워드 전략 — 검색량과 경쟁도의 균형
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          상위노출의 출발점은 제목입니다. 검색량이 너무 높은 단어("맛집", "카페" 등)는
          이미 상위권에 대형 블로그나 플레이스가 차지하고 있어 경쟁이 어렵습니다.
          반면 너무 구체적인 키워드는 검색하는 사람이 거의 없어 유입이 없습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          효과적인 방법은 <strong>중간 경쟁 키워드</strong>를 공략하는 것입니다.
          예를 들어 "강남 카페" 대신 "강남역 공부하기 좋은 카페 콘센트"처럼
          구체적인 조합 키워드를 사용하면 경쟁이 낮으면서도 실제로 검색하는
          사람들의 의도와 정확히 맞아 클릭률이 높아집니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">제목 작성 체크리스트</p>
          <ul className="list-disc list-inside space-y-1">
            <li>핵심 키워드를 제목 앞쪽에 배치</li>
            <li>2~3개 키워드 조합으로 구체성 높이기</li>
            <li>숫자, 연도 포함 시 클릭률 상승 (예: "2025년 최신 기준")</li>
            <li>제목 길이는 25~35자 내외 권장</li>
            <li>네이버 검색창에 키워드 입력 후 자동완성 참고</li>
          </ul>
        </div>
      </section>

      {/* 3. 본문 구성 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 본문 구성 — 정보 밀도와 구조
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          DIA 알고리즘은 글의 정보 밀도와 구조를 중요하게 봅니다.
          본문에서 핵심 키워드를 자연스럽게 2~4회 사용하되, 억지로 욱여넣지 않는 것이
          중요합니다. 대신 키워드와 관련된 <strong>연관 표현</strong>을 함께 사용하면
          더 자연스럽고 검색 알고리즘에서도 좋은 평가를 받습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          글 길이는 최소 <strong>700~1,000자 이상</strong>을 권장합니다. 너무 짧은
          글은 정보가 부족한 것으로 판단돼 노출 순위가 낮아질 수 있습니다. 다만
          무조건 길게 쓰는 것보다, 검색자가 궁금해할 세부 내용을 실제로 채워넣는
          것이 훨씬 효과적입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          소제목(굵은 글씨, 번호 목록)을 활용해 글의 구조를 명확하게 만들면,
          독자가 원하는 부분을 빠르게 찾을 수 있어 체류시간이 늘어나고 검색 평가도
          좋아집니다.
        </p>
      </section>

      {/* 4. 이미지 최적화 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 이미지 최적화 — 직접 촬영·직접 편집
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버는 직접 촬영하거나 제작한 이미지를 높이 평가합니다. 인터넷에서
          다운로드한 이미지를 그대로 올리거나, 다른 블로그에서 퍼온 이미지를
          사용하면 오히려 순위가 낮아질 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          이미지 파일명을 의미 있는 이름으로 저장하는 것도 도움이 됩니다.
          예를 들어 "IMG_1234.jpg" 대신 "강남역-카페-실내.jpg"처럼 저장하면
          이미지 검색에서도 유입을 기대할 수 있습니다. 또한 이미지에 간단한
          텍스트 설명(캡션)을 붙이면 글의 정보 밀도가 올라가고 이미지 검색 노출도
          늘어납니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">이미지 최적화 팁</p>
          <ul className="list-disc list-inside space-y-1">
            <li>직접 촬영한 사진 사용 (저작권 문제 방지 + 순위 유리)</li>
            <li>파일명을 키워드 포함 한글/영어로 변경</li>
            <li>이미지 아래에 짧은 캡션 추가</li>
            <li>글 한 편에 최소 3장 이상 이미지 삽입 권장</li>
          </ul>
        </div>
      </section>

      {/* 5. 발행 주기 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 발행 주기와 일관성
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          C-rank를 높이는 가장 확실한 방법은 <strong>꾸준한 글 발행</strong>입니다.
          매일 발행하면 가장 좋지만, 현실적으로 어렵다면 주 2~3회 정도를 목표로
          잡고 일정한 주기를 유지하는 것이 중요합니다. 갑자기 많이 올리다가
          오랫동안 안 올리는 것보다, 조금씩이라도 꾸준히 올리는 것이 훨씬
          효과적입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          특정 주제에 집중하는 것도 C-rank 향상에 도움이 됩니다. 음식, 여행, 육아 등
          하나의 주제로 전문화된 블로그는 해당 분야에서 신뢰도가 높은 블로그로
          인식돼 상위노출이 더 유리합니다. 여러 주제를 다루더라도 카테고리를
          명확하게 구분하면 어느 정도 전문성을 인정받을 수 있습니다.
        </p>
      </section>

      {/* 6. 이웃 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 이웃 활동과 공감 — 신호 쌓기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          블로그 글에 공감이나 댓글이 달리면 검색 알고리즘에서 "반응이 좋은 글"로
          인식해 순위가 올라갈 수 있습니다. 이웃을 늘리고, 비슷한 주제의 블로그에
          진심 어린 댓글을 달면서 서로 이웃 관계를 쌓아가는 것이 단기적으로
          효과적입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          단, 의미 없는 "잘 보고 갑니다"식 댓글이나 맞팔 도배는 오히려
          블로그 신뢰도에 부정적으로 작용할 수 있습니다. 실제로 관심 있는
          주제의 블로그와 진정성 있게 교류하는 것이 장기적으로 더 도움이 됩니다.
        </p>
      </section>

      {/* 요약 */}
      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>중간 경쟁 키워드를 제목 앞에 배치</li>
          <li>본문 700자 이상, 소제목으로 구조화</li>
          <li>직접 촬영한 이미지 최소 3장 + 캡션</li>
          <li>주 2~3회 이상 꾸준한 발행</li>
          <li>한 주제에 집중한 전문 블로그로 운영</li>
        </ol>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link
          to="/tips/blog-readtime"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          다음: 체류시간 늘리는 법 →
        </Link>
      </div>
    </div>
  );
}

export default TipsSeoPage;
