import { ADS_ENABLED } from "../siteConfig";

interface AdSlotProps {
  position: "top" | "bottom";
}

function AdSlot({ position }: AdSlotProps) {
  // 에드센스 승인 전에는 "광고 자리표시자"가 오히려 품질을 떨어뜨려 보일 수 있어
  // 실제 광고 설정이 없는 경우에는 렌더링하지 않습니다.
  if (!ADS_ENABLED) return null;

  return (
    <div
      aria-label={`광고 영역 (${position})`}
      className="border-y border-dashed border-slate-300 bg-slate-50/80"
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="w-full rounded-lg border border-dashed border-slate-300 bg-white text-xs text-slate-500 flex items-center justify-center py-6">
          <span>광고 영역</span>
        </div>
      </div>
    </div>
  );
}

export default AdSlot;
