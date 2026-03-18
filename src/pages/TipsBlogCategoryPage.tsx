import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsBlogCategoryPage() {
  const canonical = getCanonicalUrl("/tips/blog-category");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>네이버 블로그 카테고리 설정 완전 가이드 - 주제 선정부터 분류까지</title>
        <meta
          name="description"
          content="네이버 블로그 카테고리를 어떻게 구성해야 검색 상위노출에 유리한지, 주제 선정부터 세부 카테고리 분류까지 실전 방법을 정리합니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-3">
        <div className="flex items-center gap-2">
          <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700">블로그 팁</Link>
          <span className="text-slate-300 text-xs">›</span>
          <span className="text-xs text-emerald-700 font-medium">운영</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          네이버 블로그 카테고리 설정 완전 가이드
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          블로그를 시작할 때 가장 먼저 고민하는 것 중 하나가 "어떤 주제로, 카테고리를
          어떻게 나눠야 하나"입니다. 카테고리 구성은 검색 노출과 블로그 신뢰도에
          직접적인 영향을 줍니다. 처음에 잘 잡아두면 이후 운영이 훨씬 수월해집니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 카테고리가 왜 중요한가
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버 검색 알고리즘 중 C-rank는 블로그 전체의 신뢰도를 측정합니다. C-rank를
          높이는 요소 중 하나가 <strong>주제 집중도</strong>입니다. 블로그가 하나의 주제나
          관련 주제를 꾸준히 다룬다면, 네이버는 해당 분야의 전문 블로그로 인식해
          관련 검색어에서 더 자주 노출시켜 줍니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          반대로 맛집, 육아, 주식, 여행, 게임을 모두 섞어 쓰는 블로그는 각 분야에서
          전문성을 인정받기 어렵고, 특정 검색어로 들어온 방문자가 "내가 원하는 정보가
          없다"며 바로 떠날 가능성이 높습니다. 카테고리를 잘 구성하면 블로그를 찾아온
          독자가 다른 글도 함께 보게 될 확률이 높아져 체류시간도 자연스럽게 늘어납니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 주제 선정 — 좋아하는 것 vs 잘 아는 것 vs 검색 수요
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          블로그 주제를 고를 때 세 가지 기준을 놓고 판단하면 좋습니다. 첫째는
          <strong>지속 가능성</strong>입니다. 6개월, 1년 이상 계속 글을 쓸 수 있는
          주제인지가 가장 중요합니다. 아무리 인기 있는 주제라도 관심이 없으면
          꾸준히 유지하기 어렵습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          둘째는 <strong>전문성</strong>입니다. 해당 주제에 대해 남들보다 조금이라도
          더 잘 알거나, 직접 경험이 있거나, 꾸준히 공부할 의지가 있다면 좋습니다.
          완전한 전문가일 필요는 없고, 초보자가 겪는 과정 자체도 훌륭한 콘텐츠가
          됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          셋째는 <strong>검색 수요</strong>입니다. 내가 쓰고 싶은 글을 실제로 검색하는
          사람이 있어야 방문자가 들어옵니다. 네이버 검색창에 주제 키워드를 입력해
          자동완성 목록이 풍부하게 나온다면 수요가 있다는 신호입니다. 네이버 데이터랩,
          구글 트렌드를 활용해 검색량을 확인하는 것도 방법입니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">주제 추천 예시 (카테고리별)</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>생활·일상</strong>: 육아, 살림, 인테리어, 반려동물, 건강관리</li>
            <li><strong>음식·맛집</strong>: 지역 맛집 리뷰, 집밥 레시피, 카페 탐방</li>
            <li><strong>취미·라이프</strong>: 독서, 운동, 요가, 게임, 영화 리뷰</li>
            <li><strong>경제·직장</strong>: 재테크, 연봉, 이직, 자격증 준비</li>
            <li><strong>IT·디지털</strong>: 앱 리뷰, 컴퓨터 팁, AI 활용</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 카테고리 구성 — 대분류와 소분류 나누는 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          카테고리는 너무 많아도, 너무 적어도 좋지 않습니다. 대분류는 3~6개가 적당하며,
          각 대분류 아래 소분류를 2~4개씩 두면 방문자가 원하는 정보를 빠르게 찾을 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          예를 들어 "육아 블로그"를 운영한다면 대분류를 "신생아기", "유아기", "초등",
          "육아 정보", "육아템 리뷰" 정도로 나눌 수 있습니다. 각 대분류 안에 세부 주제로
          소분류를 만들면 됩니다. 방문자 입장에서는 카테고리만 보고도 "이 블로그에
          내가 찾는 정보가 있겠다"고 느낄 수 있어야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          카테고리 이름은 검색어를 고려해서 짓는 것이 좋습니다. "일상" "잡다한 것"처럼
          모호한 이름보다, "서울 맛집 리뷰" "집밥 레시피"처럼 구체적으로 지으면
          카테고리 자체가 검색에 도움이 될 수 있습니다.
        </p>
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4 text-sm text-slate-700 leading-relaxed space-y-3">
          <p className="font-semibold text-slate-800">카테고리 구성 예시: 생활/살림 블로그</p>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-medium text-slate-700">📂 살림 & 정리</p>
              <p className="text-slate-500 ml-4">└ 정리정돈 방법 / 주방 살림 / 청소 꿀팁</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">📂 인테리어 DIY</p>
              <p className="text-slate-500 ml-4">└ 셀프 인테리어 / 가구 배치 / 소품 추천</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">📂 생활 절약 & 재테크</p>
              <p className="text-slate-500 ml-4">└ 장보기 절약 / 가계부 / 공과금 줄이기</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">📂 건강 & 웰빙</p>
              <p className="text-slate-500 ml-4">└ 가정 건강 관리 / 식단 / 운동 루틴</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 카테고리별 글 수 — 최소 몇 편이 필요할까
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버에서 블로그를 "전문 블로그"로 인식하게 만들려면 각 카테고리에 최소
          10~20편 이상의 글이 쌓여야 합니다. 카테고리가 있는데 글이 1~2편이면
          방문자에게도, 알고리즘에게도 신뢰를 주기 어렵습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          처음 블로그를 시작할 때는 카테고리를 많이 만들기보다, 2~3개의 핵심 카테고리에
          집중해 각 카테고리에 10편 이상 채우는 것이 먼저입니다. 글이 쌓인 후에 카테고리를
          추가하거나 세분화하는 것이 훨씬 효과적입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          또한 카테고리 내에서 연관성이 높은 글들은 서로 내부 링크로 연결하면 좋습니다.
          "이것도 참고해 보세요" 형태로 자연스럽게 다른 글로 유도하면 방문자의
          체류시간이 늘어나고, 블로그 전체적인 방문자 흐름도 좋아집니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 여러 주제를 다루고 싶다면
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          완전히 다른 분야의 주제를 하나의 블로그에 담고 싶다면, 두 가지 방법을 고려할
          수 있습니다. 첫 번째는 그래도 하나의 블로그에 유지하되, 주요 주제와 부수적
          주제를 명확히 구분해 주요 주제에 글을 80% 이상 집중하는 방법입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          두 번째는 주제별로 블로그를 따로 운영하는 방법입니다. 네이버 블로그는 하나의
          계정으로 여러 블로그를 운영할 수 있습니다. 주제별로 블로그를 나누면 각 블로그의
          C-rank를 해당 분야에서 높이기 유리합니다. 다만 관리해야 하는 블로그가 늘어나는
          만큼, 꾸준히 유지할 수 있는지를 먼저 판단해야 합니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 카테고리 설정 후 꼭 확인해야 할 것
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          카테고리를 만든 후에는 네이버 블로그 관리 페이지에서 카테고리 공개 설정을
          확인해야 합니다. 카테고리가 비공개로 설정되면 방문자는 물론 검색 로봇도
          해당 글을 찾지 못합니다. 모든 주요 카테고리는 공개로 설정해 두어야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          또한 카테고리 이름을 나중에 바꾸면 기존에 해당 카테고리 URL로 링크된 경우
          문제가 생길 수 있습니다. 처음에 신중하게 이름을 정하고, 중간에 변경이 필요하면
          기존 글들을 새 카테고리로 이동하는 작업도 함께 해주어야 합니다.
        </p>
      </section>

      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>카테고리는 주제 집중도를 높여 C-rank에 직접 영향을 줌</li>
          <li>주제는 지속 가능성 + 전문성 + 검색 수요 세 가지로 판단</li>
          <li>대분류 3~6개, 소분류 2~4개가 적당</li>
          <li>카테고리 이름은 검색어를 고려해 구체적으로</li>
          <li>각 카테고리에 최소 10~20편 채우고 시작</li>
          <li>연관 글끼리 내부 링크로 연결해 체류시간 확보</li>
        </ol>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link
          to="/tips/blog-monetize"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          다음: 수익화 완전 가이드 →
        </Link>
      </div>
    </div>
  );
}

export default TipsBlogCategoryPage;
