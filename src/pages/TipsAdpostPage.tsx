import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsAdpostPage() {
  const canonical = getCanonicalUrl("/tips/adpost-guide");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>네이버 애드포스트 신청 방법 및 수익 구조 완전 가이드</title>
        <meta
          name="description"
          content="네이버 애드포스트 신청 조건, 승인 기준, 수익 구조, 수익 올리는 방법까지 블로그 광고 수익화의 모든 것을 정리합니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <header className="space-y-3">
        <div className="flex items-center gap-2">
          <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700">블로그 팁</Link>
          <span className="text-slate-300 text-xs">›</span>
          <span className="text-xs text-emerald-700 font-medium">수익화</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          네이버 애드포스트 신청 방법 및 수익 구조 완전 가이드
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          네이버 블로그로 수익을 내는 가장 기본적인 방법은 애드포스트입니다. 애드포스트는
          네이버에서 운영하는 블로그 광고 수익 프로그램으로, 블로그에 광고가 자동으로
          붙고 클릭이나 노출에 따라 수익이 발생합니다. 신청 방법부터 수익 구조, 실제로
          수익을 늘리는 방법까지 단계별로 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 애드포스트란 무엇인가
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트(AdPost)는 네이버가 운영하는 블로그 광고 플랫폼입니다. 네이버 블로그
          포스팅에 광고가 자동으로 붙고, 방문자가 광고를 클릭하거나 광고가 노출될 때마다
          소정의 수익이 발생합니다. 수익은 CPM(노출당 과금)과 CPC(클릭당 과금) 두 가지
          방식으로 발생하며, 매월 15일에 전월 수익이 정산됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          구글 애드센스와 비교하면 단가는 낮은 편이지만, 네이버 블로그만 있으면 신청
          가능하고 구글 계정 없이도 시작할 수 있습니다. 네이버 블로그 운영자라면 가장
          먼저 신청해봐야 하는 수익화 수단입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 애드포스트 신청 조건
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트는 아무 블로그나 신청할 수 있는 것은 아닙니다. 공식적으로 명시된
          조건은 크게 두 가지입니다. 첫째, 네이버 블로그를 운영한 기간이 일정 수준
          이상이어야 합니다. 둘째, 블로그의 방문자 수와 콘텐츠 품질이 기본 기준을
          충족해야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          실제 승인 경험을 바탕으로 정리하면, 대부분의 경우 <strong>블로그 운영 기간 3개월 이상</strong>,
          <strong>총 포스팅 수 30편 이상</strong>, <strong>일 방문자 평균 100명 내외</strong>
          정도가 되면 승인이 되는 경우가 많습니다. 단, 이는 절대적인 기준이 아니며
          콘텐츠 품질도 중요하게 평가합니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">승인 가능성을 높이는 요소</p>
          <ul className="list-disc list-inside space-y-1">
            <li>꾸준한 글 발행 (최근 3개월간 주 2회 이상)</li>
            <li>글 품질 — 1,000자 이상, 직접 촬영한 이미지 포함</li>
            <li>광고성·스팸성 콘텐츠 없음</li>
            <li>저작권 위반 이미지·텍스트 사용 없음</li>
            <li>공개 포스팅 비율이 높을 것</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 애드포스트 신청 방법 (단계별)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트 신청은 네이버 블로그 관리 화면에서 진행합니다. 아래 순서를 따르면
          됩니다.
        </p>
        <ol className="text-sm text-slate-700 leading-relaxed list-decimal list-inside space-y-2">
          <li>
            <strong>네이버 블로그 관리 페이지 접속</strong> — 블로그 메인에서 오른쪽 상단
            "관리" 버튼 클릭
          </li>
          <li>
            <strong>수익 메뉴 선택</strong> — 왼쪽 메뉴에서 "수익" 또는 "애드포스트" 탭
            클릭 (없으면 아직 신청 조건 미충족)
          </li>
          <li>
            <strong>신청서 작성</strong> — 이름, 주민등록번호(세금 처리용), 계좌 정보
            입력. 미성년자는 법정대리인 동의 필요
          </li>
          <li>
            <strong>심사 대기</strong> — 신청 후 1~4주 내 심사 결과 이메일 통보
          </li>
          <li>
            <strong>승인 후 광고 설정</strong> — 광고 위치, 유형 등 선택. 보통 포스팅
            내 자동 삽입 방식으로 시작
          </li>
        </ol>
        <p className="text-sm text-slate-700 leading-relaxed">
          반려(거절)된 경우에는 이유를 확인하고 보완한 후 재신청할 수 있습니다.
          가장 흔한 반려 이유는 콘텐츠 부족, 광고성 글 비중 과다, 저작권 위반 이미지 사용
          등입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 애드포스트 수익 구조
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트 수익은 크게 두 가지로 발생합니다. <strong>CPC(클릭당 과금)</strong>는
          방문자가 광고를 클릭할 때 수익이 발생합니다. 광고 종류와 키워드에 따라 클릭 단가가
          다르며, 일반적으로 50원~500원 수준입니다. <strong>CPM(노출당 과금)</strong>은
          광고가 1,000회 노출될 때마다 수익이 발생합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          수익은 매월 말일까지 발생한 금액이 익월 15일에 정산됩니다. 최소 출금 금액은
          1만원이며, 미충족 시 다음 달로 이월됩니다. 연간 수익이 125만원을 초과하면
          사업소득으로 분류되어 종합소득세 신고 대상이 될 수 있으니 참고하세요.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">수익 예시 (참고용, 실제와 다를 수 있음)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>일 방문자 200명 → 월 수익 약 2,000~5,000원</li>
            <li>일 방문자 1,000명 → 월 수익 약 1~3만원</li>
            <li>일 방문자 5,000명 → 월 수익 약 5~15만원</li>
            <li>주제와 광고 클릭률에 따라 동일 방문자라도 수익이 크게 다름</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 애드포스트 수익을 높이는 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트 수익의 핵심은 결국 <strong>방문자 수</strong>입니다. 방문자가 많을수록
          광고 노출이 늘고 클릭 가능성도 올라갑니다. 따라서 SEO를 통해 검색 유입을
          늘리는 것이 가장 근본적인 수익 향상 방법입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          방문자 수 외에도 <strong>광고 클릭률(CTR)</strong>을 높이는 방법이 있습니다.
          상업적 관심이 높은 주제(재테크, 건강, 구매 후기 등)는 광고 단가가 높고
          클릭률도 높습니다. 반면 순수 일상 글이나 취미 글은 광고 단가가 낮습니다.
          주제 선택 시 이 점을 참고하면 같은 방문자 수라도 수익 차이가 날 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          또한 글 하나하나의 체류시간을 늘리는 것도 중요합니다. 방문자가 글을 오래 읽을수록
          광고 노출 횟수가 늘어납니다. 소제목, 이미지, 정보 밀도를 높여 독자가 끝까지
          읽게 만드는 글쓰기가 수익에도 직접 도움이 됩니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 애드포스트 외 추가 수익 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트만으로는 수익에 한계가 있습니다. 블로그 방문자가 일정 수준에 올라오면
          다른 수익 방법을 함께 활용하면 좋습니다. 대표적인 추가 수익 방법을 정리합니다.
        </p>
        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 list-disc list-inside">
          <li>
            <strong>체험단·협찬</strong> — 제품이나 서비스를 무상으로 제공받고 리뷰를
            작성하는 방식. 방문자가 500명 이상 되면 신청 가능한 체험단이 늘어남
          </li>
          <li>
            <strong>원고료 작성</strong> — 기업이나 에이전시로부터 글 작성 의뢰를 받는 방식.
            방문자 수가 많을수록 단가가 높아짐
          </li>
          <li>
            <strong>네이버 쇼핑 파트너스</strong> — 리뷰 글에 제품 링크를 삽입하고 구매
            발생 시 수수료를 받는 방식
          </li>
          <li>
            <strong>전자책·강의 판매</strong> — 특정 분야의 전문성이 쌓이면 직접 만든
            디지털 콘텐츠를 판매하는 방식
          </li>
        </ul>
      </section>

      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>애드포스트는 네이버 블로그 기본 광고 수익 프로그램 (CPC + CPM)</li>
          <li>신청 조건: 운영 3개월+, 포스팅 30편+, 일 방문자 100명+ 수준이면 승인 가능성 높음</li>
          <li>수익은 방문자 수 × 클릭률 × 광고 단가로 결정</li>
          <li>상업성 높은 주제일수록 광고 단가와 클릭률이 높아 수익에 유리</li>
          <li>체류시간 늘리기, SEO가 결국 수익 향상의 핵심</li>
          <li>방문자 수 성장 후 체험단·파트너스·원고료로 수익 다각화</li>
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
          관련: 블로그 수익화 완전 가이드 →
        </Link>
      </div>
    </div>
  );
}

export default TipsAdpostPage;
