export const SITE_NAME =
  import.meta.env.VITE_SITE_NAME ?? "네이버 블로그 줄바꿈 정리 도구";

/**
 * 배포된 사이트의 대표 URL (권장)
 * - 예: https://your-domain.com
 * - 라우터 canonical/OG URL 구성에 사용됩니다.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/+$/, "");

/**
 * 에드센스 심사 및 신뢰도 관점에서 "문의/운영자 정보"는 매우 중요합니다.
 * 배포 환경(예: Vercel)에서 아래 값들을 설정해 주세요.
 *
 * - VITE_CONTACT_EMAIL: 문의 이메일 (예: help@yourdomain.com)
 * - VITE_SITE_OWNER: 운영자/팀 이름 (선택)
 */
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? "";
export const SITE_OWNER = import.meta.env.VITE_SITE_OWNER ?? "";

export function getContactMailto() {
  if (!CONTACT_EMAIL) return null;
  return `mailto:${CONTACT_EMAIL}`;
}

export function getCanonicalUrl(pathname: string) {
  if (!SITE_URL) return null;
  const safePath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${safePath}`;
}

