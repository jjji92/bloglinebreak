document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  const spacingEl = document.getElementById("spacing");
  const btnConvert = document.getElementById("btn-convert");
  const btnCopy = document.getElementById("btn-copy");
  const btnClear = document.getElementById("btn-clear");
  const inputStats = document.getElementById("input-stats");
  const outputStats = document.getElementById("output-stats");
  const toastEl = document.getElementById("toast");

  let toastTimer = null;

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.add("hidden");
    }, 2000);
  }

  function updateStats() {
    const inputLen = inputEl.value.length;
    const outputLen = outputEl.value.length;
    inputStats.textContent = `${inputLen.toLocaleString()}자`;
    outputStats.textContent = `${outputLen.toLocaleString()}자`;
  }

  // 줄바꿈 1개든 여러 개든 모두 문단 구분으로 통일
  function normalizeParagraphs(text) {
    return text.replace(/\n{1,}/g, "\n\n");
  }

  function doConvert() {
    const raw = inputEl.value;
    if (!raw.trim()) {
      outputEl.value = "";
      btnCopy.disabled = true;
      updateStats();
      return;
    }
    const spacing = parseInt(spacingEl.value, 10);
    const result = formatNaverBlogText(normalizeParagraphs(raw), spacing);
    outputEl.value = result;
    btnCopy.disabled = !result;
    updateStats();
  }

  // 입력 시 실시간 변환
  inputEl.addEventListener("input", doConvert);
  spacingEl.addEventListener("change", doConvert);

  // 변환 버튼
  btnConvert.addEventListener("click", () => {
    doConvert();
    if (outputEl.value) {
      showToast("변환 완료!");
    }
  });

  // 복사 버튼
  btnCopy.addEventListener("click", async () => {
    if (!outputEl.value) {
      showToast("변환된 내용이 없습니다.");
      return;
    }
    try {
      await navigator.clipboard.writeText(outputEl.value);
      showToast("클립보드에 복사되었습니다!");
    } catch {
      // fallback
      outputEl.select();
      document.execCommand("copy");
      showToast("클립보드에 복사되었습니다!");
    }
  });

  // 초기화 버튼
  btnClear.addEventListener("click", () => {
    inputEl.value = "";
    outputEl.value = "";
    btnCopy.disabled = true;
    updateStats();
  });

  updateStats();
});
