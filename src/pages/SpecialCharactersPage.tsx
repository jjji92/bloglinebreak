import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl } from "../siteConfig";

type Category = { name: string; chars: string[] };

const CATEGORIES: Category[] = [
  {
    name: "구분선",
    chars: ["─", "━", "═", "┃", "│", "┄", "┅", "┈", "┉", "╌", "╍", "╴", "╶", "―", "—", "⎯", "⏤", "▬", "▭", "◈"],
  },
  {
    name: "괄호",
    chars: ["【", "】", "「", "」", "『", "』", "〈", "〉", "《", "》", "〔", "〕", "〖", "〗", "⟪", "⟫", "⟦", "⟧", "⦃", "⦄"],
  },
  {
    name: "화살표",
    chars: ["→", "←", "↑", "↓", "↔", "↕", "➜", "➡", "⬅", "⬆", "⬇", "➤", "➣", "➢", "▶", "◀", "▲", "▼", "⇒", "⇐"],
  },
  {
    name: "별 / 하트",
    chars: ["★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "♥", "♡", "❤", "❥", "❣", "💕", "💖", "💗", "🌟", "⭐"],
  },
  {
    name: "체크 / 원 / 도형",
    chars: ["✓", "✔", "✗", "✘", "●", "○", "◆", "◇", "■", "□", "▪", "▫", "◉", "◎", "⊙", "⊚", "△", "▽", "◁", "▷"],
  },
  {
    name: "숫자 / 문자",
    chars: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "Ⓐ", "Ⓑ", "Ⓒ", "Ⓓ", "Ⓔ"],
  },
  {
    name: "이모지",
    chars: ["🔥", "💡", "✨", "📌", "📍", "🎯", "💬", "📢", "🔔", "⚡", "🏷️", "📝", "🎉", "👍", "👉", "💪", "🙌", "❗", "❓", "✅"],
  },
];

function SpecialCharactersPage() {
  const canonical = getCanonicalUrl("/special-characters");
  const [toast, setToast] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 1500);
    return () => window.clearTimeout(id);
  }, [toast]);

  const handleCopy = async (char: string) => {
    try {
      await navigator.clipboard.writeText(char);
      setToast(`"${char}" 복사됨`);
      setHistory((prev) => {
        const next = [char, ...prev.filter((c) => c !== char)];
        return next.slice(0, 20);
      });
    } catch {
      setToast("복사에 실패했습니다.");
    }
  };

  return (
    <div className="relative">
      <Helmet>
        <title>블로그 특수문자 / 이모지 모음 - 클릭으로 바로 복사</title>
        <meta
          name="description"
          content="네이버 블로그에서 자주 쓰는 특수문자, 구분선, 괄호, 화살표, 이모지를 클릭 한 번으로 복사하세요."
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
            특수문자 / 이모지 모음
          </h1>
          <p className="text-sm text-slate-600">
            네이버 블로그에서 자주 사용하는 특수문자와 이모지를 모아두었습니다. 클릭하면 바로
            클립보드에 복사됩니다.
          </p>
        </section>

        {history.length > 0 && (
          <section className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">최근 복사한 문자</h2>
              <button
                type="button"
                onClick={() => setHistory([])}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                초기화
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {history.map((char, i) => (
                <button
                  key={`${char}-${i}`}
                  type="button"
                  onClick={() => handleCopy(char)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md border bg-emerald-50 hover:bg-emerald-100 text-lg transition-colors cursor-pointer"
                >
                  {char}
                </button>
              ))}
            </div>
          </section>
        )}

        {CATEGORIES.map((cat) => (
          <section key={cat.name} className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
            <h2 className="text-sm font-semibold text-slate-900">{cat.name}</h2>
            <div className="flex flex-wrap gap-1.5">
              {cat.chars.map((char) => (
                <button
                  key={char}
                  type="button"
                  onClick={() => handleCopy(char)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md border bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-lg transition-colors cursor-pointer"
                  title={`${char} 복사`}
                >
                  {char}
                </button>
              ))}
            </div>
          </section>
        ))}

        <section className="border rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600 space-y-1">
          <p className="font-medium text-slate-700">안내</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>문자를 클릭하면 클립보드에 자동으로 복사됩니다.</li>
            <li>네이버 블로그 에디터에 바로 붙여넣기(Ctrl+V / Cmd+V)하세요.</li>
            <li>최근 복사 목록은 현재 세션에서만 유지됩니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SpecialCharactersPage;
