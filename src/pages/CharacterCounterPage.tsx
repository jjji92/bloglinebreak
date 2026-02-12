import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl } from "../siteConfig";

function CharacterCounterPage() {
  const [input, setInput] = useState("");
  const canonical = getCanonicalUrl("/counter");

  const stats = useMemo(() => {
    const total = input.replace(/\s/g, "").length;
    const korean = (input.match(/[가-힣ㄱ-ㅎㅏ-ㅣ]/g) || []).length;
    const english = (input.match(/[a-zA-Z]/g) || []).length;
    const numbers = (input.match(/[0-9]/g) || []).length;
    const special = total - korean - english - numbers;
    const withSpaces = input.length;

    return { total, korean, english, numbers, special, withSpaces };
  }, [input]);

  return (
    <div className="relative">
      <Helmet>
        <title>블로그 글자수 세기 - 네이버 블로그 글자수 카운터</title>
        <meta
          name="description"
          content="네이버 블로그 글의 전체 글자수, 한글, 영어, 숫자를 실시간으로 확인하세요. 리뷰언즈 엔서포터와 동일한 방식입니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <section className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
            블로그 글자수 세기
          </h1>
          <p className="text-sm text-slate-600">
            텍스트를 입력하면 전체 글자수, 한글, 영어, 숫자를 실시간으로 확인할 수 있습니다.
          </p>
        </section>

        {/* 실시간 카운트 바 */}
        <section className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-semibold text-slate-900">
              전체 <span className="text-emerald-600">{stats.total.toLocaleString()}</span>자
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">
              한글 <span className="font-semibold text-emerald-600">{stats.korean.toLocaleString()}</span>자
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">
              영어 <span className="font-semibold text-emerald-600">{stats.english.toLocaleString()}</span>자
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">
              숫자 <span className="font-semibold text-emerald-600">{stats.numbers.toLocaleString()}</span>자
            </span>
            {stats.special > 0 && (
              <>
                <span className="text-slate-400">|</span>
                <span className="text-slate-700">
                  특수문자 <span className="font-semibold text-emerald-600">{stats.special.toLocaleString()}</span>자
                </span>
              </>
            )}
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 text-xs">
              공백 포함 {stats.withSpaces.toLocaleString()}자
            </span>
          </div>
        </section>

        <section>
          <textarea
            className="min-h-[260px] md:min-h-[360px] w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="글자수를 세고 싶은 텍스트를 입력하세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </section>

        {/* 상세 통계 카드 */}
        <section className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { label: "전체", value: stats.total },
            { label: "한글", value: stats.korean },
            { label: "영어", value: stats.english },
            { label: "숫자", value: stats.numbers },
            { label: "특수문자", value: stats.special },
            { label: "공백 포함", value: stats.withSpaces },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border bg-white p-3 shadow-sm text-center"
            >
              <div className="text-xl font-bold text-emerald-600">
                {item.value.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </section>

        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-slate-900">
            네이버 블로그 최적 글자수 가이드
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <article className="rounded-md border bg-slate-50 p-3 space-y-2">
              <h3 className="font-semibold text-slate-900">일반 블로그 글</h3>
              <p className="text-slate-700 leading-relaxed">
                <b>1,500 ~ 3,000자</b>가 적당합니다. 너무 짧으면 정보가 부족해 보이고, 너무
                길면 이탈률이 높아집니다.
              </p>
            </article>
            <article className="rounded-md border bg-emerald-50 p-3 space-y-2">
              <h3 className="font-semibold text-slate-900">SEO 최적화 글</h3>
              <p className="text-slate-700 leading-relaxed">
                검색 상위 노출을 목표로 한다면 <b>2,500자 이상</b>을 권장합니다. 충분한 정보량과
                키워드 반복이 검색 알고리즘에 유리하게 작용합니다.
              </p>
            </article>
          </div>
          <ul className="text-xs text-slate-600 leading-relaxed list-disc list-inside space-y-1">
            <li>제목에 핵심 키워드를 포함하세요.</li>
            <li>첫 문단에 결론을 먼저 쓰면 체류 시간이 늘어납니다.</li>
            <li>문단을 적절히 나누어 가독성을 높이세요.</li>
            <li>이미지와 텍스트를 번갈아 배치하면 스크롤 피로가 줄어듭니다.</li>
          </ul>
        </section>

        <section className="border rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600 space-y-1">
          <p className="font-medium text-slate-700">안내</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>모든 계산은 브라우저에서만 처리되며, 입력한 텍스트는 서버로 전송되지 않습니다.</li>
            <li>전체 글자수는 공백을 제외한 순수 글자수입니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CharacterCounterPage;
