import { useEffect, lazy, Suspense } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GA_ID = "G-X2HV3NQK91";

function loadGoogleAnalytics() {
  if (typeof window !== "undefined" && (window as Window & { gtag?: unknown }).gtag) return;
  (window as Window & { dataLayer?: unknown[] }).dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer || [];
  const gtag = (...args: unknown[]) => (window as Window & { dataLayer?: unknown[] }).dataLayer?.push(args);
  (window as Window & { gtag: typeof gtag }).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { page_path: window.location.pathname });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, { page_path: location.pathname });
    }
  }, [location]);
}

const HomePage = lazy(() => import("./pages/HomePage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const ExamplesPage = lazy(() => import("./pages/ExamplesPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));

const navLinkBase =
  "px-3 py-1.5 text-sm rounded-full transition-colors border border-transparent";

function App() {
  usePageTracking();
  useEffect(() => {
    let loaded = false;
    const run = () => {
      if (loaded) return;
      loaded = true;
      loadGoogleAnalytics();
      ["scroll", "click", "keydown", "touchstart"].forEach((ev) =>
        window.removeEventListener(ev, run)
      );
    };
    const events = ["scroll", "click", "keydown", "touchstart"] as const;
    events.forEach((ev) => window.addEventListener(ev, run, { once: true, passive: true }));
    const fallback = setTimeout(run, 4000);
    return () => clearTimeout(fallback);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>네이버 블로그 줄바꿈 정리 도구</title>
        <meta
          name="description"
          content="네이버 블로그 글의 줄바꿈과 문단 간 간격을 자동으로 정리해 가독성을 높여주는 웹 도구입니다."
        />
      </Helmet>

      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
              NB
            </span>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                네이버 블로그 줄바꿈 정리
              </div>
              <div className="text-xs text-slate-500">
                가독성 좋은 문단 간격 자동 정리
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              도구
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              이용 방법
            </NavLink>
            <NavLink
              to="/examples"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              예시
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              개인정보
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              소개
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              문의
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route
              path="*"
              element={
                <div className="max-w-3xl mx-auto px-4 py-10 space-y-3">
                  <h1 className="text-lg font-semibold text-slate-900">
                    페이지를 찾을 수 없습니다.
                  </h1>
                  <p className="text-sm text-slate-600">
                    주소가 변경되었거나 삭제되었을 수 있습니다.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 transition-colors w-fit"
                  >
                    홈으로 이동
                  </Link>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} 네이버 블로그 줄바꿈 정리 도구</span>
            <span>로그인 / 회원가입 / 데이터 저장 없이 동작하는 단일 기능 도구입니다.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link to="/about" className="hover:text-slate-700 hover:underline">
              소개
            </Link>
            <Link to="/contact" className="hover:text-slate-700 hover:underline">
              문의
            </Link>
            <Link to="/terms" className="hover:text-slate-700 hover:underline">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-slate-700 hover:underline">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
