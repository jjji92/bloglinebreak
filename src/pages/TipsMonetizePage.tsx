import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsMonetizePage() {
  const canonical = getCanonicalUrl("/tips/blog-monetize");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>네이버 블로그 수익화 완전 가이드 - 애드포스트·체험단·원고료</title>
        <meta
          name="description"
          content="네이버 애드포스트, 체험단·협찬, 원고료, 외부 수익 연동까지 블로그로 돈 버는 방법을 단계별로 설명하는 수익화 가이드입니다."
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
          네이버 블로그 수익화 완전 가이드
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          블로그를 취미로만 운영하는 시대는 지났습니다. 꾸준히 글을 쓰고 방문자가
          늘어나면 블로그 자체가 수익 창출 수단이 됩니다. 이 글에서는 네이버 블로그로
          실제 수익을 만드는 방법을 단계별로 정리합니다. 초보자도 바로 적용할 수
          있는 현실적인 방법부터 소개합니다.
        </p>
      </header>

      {/* 1. 수익화 방법 개요 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 블로그 수익화 방법 4가지
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버 블로그로 수익을 올리는 방법은 크게 네 가지입니다. 각 방법마다
          필요한 조건과 수익 규모가 다르기 때문에, 현재 블로그 상황에 맞는 방법을
          먼저 선택하는 것이 중요합니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "애드포스트", desc: "네이버 공식 광고 수익. 글에 광고가 자동 삽입됩니다.", level: "입문" },
            { name: "체험단·협찬", desc: "기업에서 제품/서비스를 제공받고 리뷰를 작성합니다.", level: "중급" },
            { name: "원고료 블로거", desc: "기업·기관의 의뢰를 받아 정해진 금액에 글을 씁니다.", level: "중급" },
            { name: "외부 수익 연동", desc: "쿠팡파트너스 등 제휴 마케팅으로 추가 수익을 얻습니다.", level: "심화" },
          ].map((item) => (
            <div key={item.name} className="rounded-lg border bg-white p-3 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 rounded px-2 py-0.5">
                  {item.level}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 애드포스트 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 애드포스트 — 가장 쉬운 첫 번째 수익
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트(AdPost)는 네이버가 운영하는 블로그 광고 플랫폼입니다. 네이버
          블로그에 직접 신청할 수 있으며, 승인되면 글 하단에 광고가 자동으로
          삽입되고 광고 클릭이나 노출에 따라 수익이 발생합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          애드포스트 신청 조건은 별도로 명시되어 있지 않지만, 일반적으로
          꾸준한 글 발행 이력이 있는 블로그에서 승인이 잘 됩니다. 최소
          글 수 20~30편 이상, 방문자 수 일 30명 이상을 목표로 잡고
          신청하면 승인 가능성이 높아집니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          수익 규모는 블로그 방문자 수에 비례합니다. 초반에는 월 몇 천 원
          수준이지만, 일 방문자 500명 이상이 되면 월 3~5만 원, 방문자
          3,000명 이상에서는 월 20만 원 이상도 기대할 수 있습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">애드포스트 빠르게 승인받는 팁</p>
          <ul className="list-disc list-inside space-y-1">
            <li>글 수 최소 20편 이상, 최근 3개월 내 발행 이력 필요</li>
            <li>저작권 위반, 불법 콘텐츠 없는 블로그</li>
            <li>이웃 수보다 콘텐츠 품질이 더 중요</li>
            <li>네이버 블로그 설정 → 수익 → 애드포스트 신청</li>
          </ul>
        </div>
      </section>

      {/* 3. 체험단·협찬 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 체험단·협찬 — 제품 받고 리뷰 쓰기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          체험단은 기업에서 제품이나 서비스를 무료로 제공하는 대신 리뷰 포스팅을
          요청하는 방식입니다. 현금 수익은 없지만 시간과 돈을 절약할 수 있고,
          체험 콘텐츠가 쌓이면 블로그 신뢰도도 올라갑니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          체험단 플랫폼으로는 <strong>레뷰(REVU)</strong>, <strong>강남언니 체험단</strong>,
          <strong>리뷰플레이스</strong>, <strong>블로그체험단 카페</strong> 등이 있습니다.
          블로그 방문자 수가 일 100명 이상이 되면 다양한 체험단에 지원할 수
          있고, 수도권 음식점·카페 체험단의 경우 방문자 수 기준이 더 낮기도 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          협찬은 체험단보다 한 단계 위입니다. 기업에서 먼저 연락이 오거나,
          블로거가 직접 제안서를 보내 협찬을 유치합니다. 이 단계에서는
          제품 수령뿐만 아니라 소정의 원고료가 함께 지급되는 경우도 많습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">체험단 합격률 높이는 팁</p>
          <ul className="list-disc list-inside space-y-1">
            <li>신청 시 "내 블로그에서 이렇게 소개하겠다"는 계획을 구체적으로 작성</li>
            <li>같은 카테고리의 체험단 리뷰 이력이 있으면 유리</li>
            <li>이웃 수보다 글의 품질과 사진 수준이 더 중요한 경우 많음</li>
            <li>협찬/제공 표기를 명확히 하는 투명한 운영 필수</li>
          </ul>
        </div>
      </section>

      {/* 4. 원고료 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 원고료 블로거 — 글 한 편에 고정 금액
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          원고료는 기업이나 기관이 특정 주제의 글을 의뢰하고 작성 비용을 지불하는
          방식입니다. 글 한 편당 3만~20만 원 이상을 받을 수 있으며, 블로그 영향력이
          클수록 단가가 올라갑니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          원고료 블로거가 되려면 기본적으로 일 방문자 500명 이상, 검색 노출이
          활발한 블로그가 필요합니다. 특정 분야(육아, 요리, 여행, IT 등)에
          전문화된 블로그는 해당 분야 기업들로부터 의뢰가 들어올 가능성이 높습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          원고료 의뢰를 받기 위한 플랫폼으로는 <strong>블로그어워즈</strong>,
          <strong>한국소비자원 체험단</strong> 등이 있으며, 직접 기업 마케팅 담당자에게
          포트폴리오를 보내 제안하는 방법도 있습니다.
        </p>
      </section>

      {/* 5. 외부 수익 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 외부 수익 연동 — 제휴 마케팅
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          제휴 마케팅은 블로그 글에 특정 상품이나 서비스 링크를 넣고, 독자가
          그 링크를 통해 구매하면 수수료를 받는 방식입니다. 대표적인 플랫폼으로
          <strong>쿠팡파트너스</strong>가 있으며, 가입 후 상품 링크를 생성해
          글에 삽입하면 됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          제휴 마케팅의 핵심은 <strong>자연스러운 연결</strong>입니다. 리뷰 글에서
          실제로 사용했거나 추천하는 상품을 소개하면서 링크를 넣는 방식이 효과적입니다.
          억지로 상품을 끼워넣는 글은 독자 신뢰도를 낮추고 체류시간도 줄어듭니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          쿠팡파트너스 외에도 <strong>네이버 쇼핑 파트너</strong>, <strong>아이허브
          제휴</strong>, <strong>알리익스프레스 제휴</strong> 등 다양한 플랫폼을
          활용할 수 있습니다. 블로그 주제에 맞는 제휴 프로그램을 찾아 연동하면
          애드포스트 외에 추가 수익원을 만들 수 있습니다.
        </p>
      </section>

      {/* 수익화 단계 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 단계별 수익화 로드맵
        </h2>
        <div className="space-y-2">
          {[
            { step: "1단계", condition: "글 20편 이상 발행", action: "애드포스트 신청" },
            { step: "2단계", condition: "일 방문자 100명 이상", action: "체험단 플랫폼 지원 시작" },
            { step: "3단계", condition: "일 방문자 300명 이상", action: "쿠팡파트너스 제휴 시작" },
            { step: "4단계", condition: "일 방문자 500명 이상", action: "원고료 의뢰 수락 + 협찬 협상" },
            { step: "5단계", condition: "일 방문자 1,000명 이상", action: "전문 블로거 포지셔닝 + 단가 협상" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 rounded-lg border bg-white p-3 shadow-sm">
              <span className="shrink-0 inline-flex items-center justify-center w-14 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                {item.step}
              </span>
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-medium text-slate-800">{item.condition}</span>
                <span className="text-slate-400 mx-1">→</span>
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 요약 */}
      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>글 20편 이상 쌓이면 바로 애드포스트 신청</li>
          <li>방문자 100명부터 체험단 지원 시작</li>
          <li>한 주제에 전문화할수록 단가와 수익이 올라감</li>
          <li>쿠팡파트너스 등 제휴 마케팅으로 수익 다각화</li>
          <li>협찬·원고료 표기는 항상 투명하게 (신뢰도 = 장기 수익)</li>
        </ol>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link
          to="/tips/blog-readtime"
          className="text-xs text-slate-500 hover:text-slate-700 hover:underline"
        >
          ← 이전: 체류시간 늘리는 법
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          줄바꿈 도구 사용하기 →
        </Link>
      </div>
    </div>
  );
}

export default TipsMonetizePage;
