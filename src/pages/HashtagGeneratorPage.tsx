import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl } from "../siteConfig";

type Preset = { label: string; tags: string[] };

const PRESETS: Preset[] = [
  { label: "맛집", tags: ["맛집", "맛집추천", "맛집탐방", "맛스타그램", "먹스타그램", "푸드스타그램", "오늘뭐먹지", "점심메뉴", "저녁메뉴", "맛집리뷰"] },
  { label: "카페", tags: ["카페", "카페추천", "카페투어", "카페스타그램", "커피스타그램", "디저트", "브런치카페", "감성카페", "분위기카페", "작업카페"] },
  { label: "여행", tags: ["여행", "여행스타그램", "국내여행", "해외여행", "여행추천", "여행지추천", "여행기록", "여행에세이", "일상탈출", "힐링여행"] },
  { label: "뷰티", tags: ["뷰티", "화장품추천", "스킨케어", "메이크업", "뷰티스타그램", "데일리메이크업", "화장품리뷰", "피부관리", "뷰티템", "코덕"] },
  { label: "일상", tags: ["일상", "일상기록", "일상스타그램", "소소한일상", "오늘하루", "데일리", "나의하루", "기록", "일기", "브이로그"] },
  { label: "육아", tags: ["육아", "육아스타그램", "육아일기", "아이와함께", "육아맘", "아기옷", "유아용품", "아기성장기록", "엄마표", "아이간식"] },
  { label: "운동/건강", tags: ["운동", "운동스타그램", "헬스", "다이어트", "건강", "홈트레이닝", "필라테스", "러닝", "운동일기", "오운완"] },
  { label: "독서/자기계발", tags: ["독서", "책추천", "책스타그램", "북스타그램", "자기계발", "독서기록", "책리뷰", "인생책", "독서노트", "성장"] },
];

function HashtagGeneratorPage() {
  const canonical = getCanonicalUrl("/hashtag");
  const [keywords, setKeywords] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2000);
    return () => window.clearTimeout(id);
  }, [toast]);

  const generatedTags = useMemo(() => {
    if (!keywords.trim()) return [];
    const words = keywords
      .split(/[,\s]+/)
      .map((w) => w.trim())
      .filter(Boolean);

    const result: string[] = [];
    for (const word of words) {
      result.push(word);
      // 조합 생성: 다른 단어와 합치기
      for (const other of words) {
        if (other !== word) {
          result.push(word + other);
        }
      }
    }
    // "추천", "후기", "리뷰" 접미사
    const suffixes = ["추천", "후기", "리뷰"];
    for (const word of words) {
      for (const suffix of suffixes) {
        if (!word.endsWith(suffix)) {
          result.push(word + suffix);
        }
      }
    }

    // 중복 제거
    return [...new Set(result)];
  }, [keywords]);

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const addGeneratedAll = () => {
    const merged = [...new Set([...tags, ...generatedTags])];
    setTags(merged);
    setToast(`${generatedTags.length}개 태그 추가됨`);
  };

  const addPreset = (preset: Preset) => {
    const merged = [...new Set([...tags, ...preset.tags])];
    setTags(merged);
    setToast(`"${preset.label}" 프리셋 추가됨`);
  };

  const handleCopyAll = async () => {
    if (tags.length === 0) {
      setToast("복사할 해시태그가 없습니다.");
      return;
    }
    const text = tags.map((t) => `#${t}`).join(" ");
    try {
      await navigator.clipboard.writeText(text);
      setToast("해시태그가 클립보드에 복사되었습니다.");
    } catch {
      setToast("복사에 실패했습니다.");
    }
  };

  return (
    <div className="relative">
      <Helmet>
        <title>블로그 해시태그 생성기 - 네이버 블로그 해시태그 만들기</title>
        <meta
          name="description"
          content="키워드를 입력하면 네이버 블로그에 바로 쓸 수 있는 해시태그를 자동으로 생성해 줍니다."
        />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        {canonical ? <meta property="og:url" content={canonical} /> : null}
      </Helmet>

      {toast && (
        <div className="fixed z-30 bottom-4 right-4 max-w-xs rounded-md bg-slate-900 text-white text-xs px-3 py-2 shadow-lg">
          {toast}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <section className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
            블로그 해시태그 생성기
          </h1>
          <p className="text-sm text-slate-600">
            키워드를 입력하면 네이버 블로그용 해시태그를 자동으로 만들어 드립니다. 인기 카테고리
            프리셋도 활용해 보세요.
          </p>
        </section>

        {/* 키워드 입력 */}
        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-slate-900">키워드 입력</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="키워드를 쉼표 또는 공백으로 구분하세요 (예: 강남 맛집 파스타)"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <button
              type="button"
              onClick={addGeneratedAll}
              disabled={generatedTags.length === 0}
              className="rounded-md bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-medium px-3 py-1.5 transition-colors whitespace-nowrap"
            >
              전체 추가
            </button>
          </div>
          {generatedTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {generatedTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => addTag(tag)}
                  className={`text-xs rounded-full px-2.5 py-1 border transition-colors ${
                    tags.includes(tag)
                      ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* 프리셋 */}
        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-slate-900">인기 카테고리 프리셋</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => addPreset(preset)}
                className="text-left rounded-lg border bg-slate-50 hover:bg-slate-100 transition-colors px-3 py-2"
              >
                <div className="text-sm font-medium text-slate-900">{preset.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  #{preset.tags.slice(0, 3).join(" #")} ...
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 결과 */}
        <section className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              내 해시태그 ({tags.length}개)
            </h2>
            <div className="flex items-center gap-2">
              {tags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setTags([])}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  전체 삭제
                </button>
              )}
              <button
                type="button"
                onClick={handleCopyAll}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors"
              >
                전체 복사
              </button>
            </div>
          </div>
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-xs rounded-full px-2.5 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-colors"
                  title="클릭하여 제거"
                >
                  #{tag} ✕
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400">
              위에서 키워드를 입력하거나 프리셋을 선택하면 여기에 해시태그가 표시됩니다.
            </p>
          )}
          {tags.length > 0 && (
            <div className="rounded-md border bg-slate-50 px-3 py-2 text-sm text-slate-700 break-all">
              {tags.map((t) => `#${t}`).join(" ")}
            </div>
          )}
        </section>

        <section className="border rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600 space-y-1">
          <p className="font-medium text-slate-700">안내</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>네이버 블로그 해시태그는 글 하단에 최대 30개까지 추가할 수 있습니다.</li>
            <li>핵심 키워드를 2~3개 포함하면 검색 노출에 유리합니다.</li>
            <li>모든 처리는 브라우저에서만 이루어지며, 데이터는 전송되지 않습니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default HashtagGeneratorPage;
