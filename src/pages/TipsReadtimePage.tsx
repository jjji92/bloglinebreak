import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCanonicalUrl } from "../siteConfig";

function TipsReadtimePage() {
  const canonical = getCanonicalUrl("/tips/blog-readtime");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <Helmet>
        <title>블로그 체류시간 2배 늘리는 글쓰기 법 - 네이버 블로그 가독성 전략</title>
        <meta
          name="description"
          content="첫 3줄 후킹, 문단 구조, 소제목 배치, 사진과 텍스트 리듬감까지 독자가 끝까지 읽게 만드는 네이버 블로그 글쓰기 전략을 소개합니다."
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
          블로그 체류시간 2배 늘리는 글쓰기 법
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          검색 상위노출만큼 중요한 것이 바로 체류시간입니다. 검색 결과에서 내 글을
          클릭했다가 몇 초 만에 뒤로 가기를 누른다면, 네이버는 "이 글은 검색자에게
          도움이 안 됐다"고 판단해 점점 순위를 낮춥니다. 반대로 독자가 끝까지
          읽는 글은 알고리즘에서 좋은 평가를 받아 더 많이 노출됩니다.
        </p>
      </header>

      {/* 1. 체류시간 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          1. 체류시간이 블로그 순위에 미치는 영향
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          체류시간은 독자가 내 블로그 글 하나에 머무는 시간입니다. 네이버는
          사용자가 검색 결과를 클릭한 뒤 얼마나 오래 그 페이지에 있었는지를 통해
          글의 품질을 간접적으로 평가합니다. 이 신호가 누적되면 C-rank와 DIA 점수에
          반영돼 장기적인 검색 순위에 영향을 줍니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          체류시간을 늘리는 것은 복잡한 기술이 아닙니다. 독자가 "다음 내용이
          궁금하다"고 느끼게 만드는 글의 흐름, 그리고 읽다가 지치지 않게 하는
          구조만 잘 갖춰도 체류시간은 눈에 띄게 올라갑니다.
        </p>
      </section>

      {/* 2. 첫 3줄 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          2. 첫 3줄 후킹 — 독자를 붙잡는 서론
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          블로그 글의 생사는 첫 3줄에서 결정됩니다. 독자는 검색 결과를 클릭한 뒤
          스크롤을 내리기 전, 상단 몇 줄만 보고 계속 읽을지 말지를 결정합니다.
          이 짧은 시간에 "이 글을 읽으면 내가 찾던 정보를 얻을 수 있다"는 확신을
          줘야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          효과적인 서론의 패턴은 크게 세 가지입니다. 첫째, <strong>결론 먼저</strong>
          — "결론부터 말씀드리면 ~입니다"처럼 핵심을 앞에 배치하는 방법.
          둘째, <strong>공감 유도</strong> — "혹시 이런 경험 있으신가요?"처럼
          독자의 상황을 짚어주는 방법. 셋째, <strong>숫자 제시</strong> — "딱 3가지만
          알면 됩니다"처럼 글의 구성을 미리 알려주는 방법입니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">비교 예시</p>
          <div className="space-y-2">
            <div>
              <p className="text-red-600 font-medium mb-0.5">❌ 체류시간 낮은 서론</p>
              <p className="text-slate-600">
                "안녕하세요 오늘은 날씨가 너무 좋아서 오랜만에 나들이를 다녀왔어요.
                요즘 바빠서 블로그를 자주 못 올렸는데 오늘은 제가 다녀온 카페
                소개해 드리려고 해요~"
              </p>
            </div>
            <div>
              <p className="text-emerald-700 font-medium mb-0.5">✅ 체류시간 높은 서론</p>
              <p className="text-slate-600">
                "강남역 근처 콘센트 있고 조용한 카페 찾다가 제대로 발견했어요.
                혼자 작업하기 딱 좋은 곳인데, 주말에도 자리 여유 있었습니다.
                가격, 위치, 주차 정보까지 정리해 드릴게요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 문단 구조 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          3. 문단 구조 — 모바일에서 읽히는 글
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          네이버 블로그 방문자의 80% 이상은 모바일로 접속합니다. 모바일 화면에서
          한 문단이 너무 길면 "벽 텍스트"처럼 보여 독자가 읽기를 포기하게 됩니다.
          PC에서 3~4줄처럼 보이는 문단도, 모바일에서는 7~8줄로 불어나는 경우가
          많습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          기본 원칙은 <strong>한 문단 = 한 가지 메시지</strong>입니다. 하나의 문단에서
          하나의 내용만 전달하고, 다른 내용이 시작되면 새 문단으로 나눕니다.
          문단 사이에는 빈 줄을 한 줄 넣어 시각적 여백을 주세요. 모바일 기준으로
          한 문단이 3~5줄을 넘지 않도록 유지하면 독자가 훨씬 편하게 읽습니다.
        </p>
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">줄바꿈 자동 정리 팁</p>
          <p>
            글을 다 쓴 뒤 이 사이트의{" "}
            <Link to="/" className="underline text-emerald-700 hover:text-emerald-800">
              줄바꿈 정리 도구
            </Link>
            에 붙여넣으면 문단 간격을 자동으로 정리해 줍니다. 모바일 가독성을
            빠르게 개선하는 가장 쉬운 방법입니다.
          </p>
        </div>
      </section>

      {/* 4. 소제목 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          4. 소제목 활용 — 글의 지도를 그려주기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          소제목(굵은 글씨나 번호 목록)은 독자에게 "앞으로 무엇을 볼 것인지"를
          알려주는 글의 지도 역할을 합니다. 소제목을 보고 자신이 원하는 내용이
          있다고 판단한 독자는 해당 부분까지 스크롤을 내리면서 글 전체를 훑게
          됩니다. 이 과정 자체가 체류시간을 올립니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          소제목은 너무 추상적이면 효과가 없습니다. "카페 소개" 보다는 "혼자
          작업하기 좋은 이유 3가지"처럼 내용을 구체적으로 암시하는 소제목이
          훨씬 클릭을 유도합니다. 또한 소제목에 핵심 키워드를 자연스럽게 포함하면
          SEO에도 도움이 됩니다.
        </p>
      </section>

      {/* 5. 사진+텍스트 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          5. 사진과 텍스트의 리듬감
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          블로그에서 사진과 텍스트를 교차 배치하면 독자가 스크롤할 때 자연스러운
          리듬감을 느낍니다. 텍스트만 길게 이어지거나, 사진만 나열되는 구조보다
          "텍스트 → 사진 → 텍스트 → 사진" 패턴이 체류시간 측면에서 훨씬
          효과적입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          사진을 올릴 때는 반드시 짧은 캡션이나 설명을 덧붙이세요. 사진만 올리면
          정보 밀도가 낮아 보이고, 검색 알고리즘에서도 좋은 평가를 받기 어렵습니다.
          "위 사진은 ~입니다. 특이하게도 ~" 정도의 1~2문장만 추가해도 글의 품질이
          크게 올라갑니다.
        </p>
      </section>

      {/* 6. 결말 */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          6. 결말 — 독자를 이웃으로 만드는 마무리
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          글의 마지막은 단순히 내용을 요약하는 것보다, 독자가 다음 행동을 취하도록
          유도하는 것이 효과적입니다. 예를 들어 "이 글이 도움이 됐다면 이웃 추가
          부탁드려요", "비슷한 주제로 ~글도 써뒀으니 함께 보세요"처럼 추가 행동을
          자연스럽게 제안하세요.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          또한 결말에서 글의 핵심을 한 번 더 짧게 요약해 주면, 처음부터 끝까지
          읽은 독자의 만족감을 높이고 글의 신뢰성을 강화할 수 있습니다.
          "오늘 핵심은 딱 두 가지였어요. 첫 번째는 ~, 두 번째는 ~" 같은 형태로
          마무리하면 좋습니다.
        </p>
      </section>

      {/* 요약 */}
      <section className="rounded-lg border bg-emerald-50 p-4 space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">핵심 요약</h2>
        <ol className="text-xs text-slate-700 leading-relaxed list-decimal list-inside space-y-1">
          <li>서론 첫 3줄에서 독자가 원하는 정보가 있다는 걸 바로 보여주기</li>
          <li>한 문단 = 한 메시지, 모바일 기준 3~5줄 이내</li>
          <li>소제목으로 글의 구조를 미리 보여주기</li>
          <li>사진-텍스트 교차 배치로 스크롤 리듬감 만들기</li>
          <li>결말에서 핵심 요약 + 이웃 추가 유도</li>
        </ol>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link
          to="/tips/naver-blog-seo"
          className="text-xs text-slate-500 hover:text-slate-700 hover:underline"
        >
          ← 이전: 상위노출 하는 법
        </Link>
        <Link
          to="/tips/blog-monetize"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
        >
          다음: 수익화 가이드 →
        </Link>
      </div>
    </div>
  );
}

export default TipsReadtimePage;
