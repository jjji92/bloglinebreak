// 네이버 블로그 글쓰기 페이지에서 줄바꿈 정리 플로팅 버튼 추가
(function () {
  "use strict";

  // 글쓰기 페이지인지 확인 (최상위 프레임에서만 버튼 표시)
  const isWritePage =
    window.location.search.includes("Redirect=Write") ||
    window.location.pathname.includes("postwrite");

  // iframe 내부(에디터 프레임)인 경우는 버튼 없이 종료 (formatNaverBlogText만 로드됨)
  if (!isWritePage) return;

  // 이미 삽입된 경우 중복 방지
  if (document.getElementById("nb-linebreak-float-btn")) return;

  // 플로팅 버튼 생성
  const btn = document.createElement("button");
  btn.id = "nb-linebreak-float-btn";
  btn.textContent = "줄바꿈 정리";
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: "999999",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: "700",
    color: "#fff",
    background: "#059669",
    border: "none",
    borderRadius: "24px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
    cursor: "pointer",
    transition: "background 0.15s, transform 0.15s",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  });

  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#047857";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "#059669";
    btn.style.transform = "scale(1)";
  });

  // 토스트 표시
  function showToast(msg) {
    let toast = document.getElementById("nb-linebreak-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "nb-linebreak-toast";
      Object.assign(toast.style, {
        position: "fixed",
        bottom: "72px",
        right: "24px",
        zIndex: "999999",
        padding: "8px 16px",
        fontSize: "12px",
        color: "#fff",
        background: "#0f172a",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "opacity 0.3s",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      });
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 2500);
  }

  // 에디터 찾기: iframe 내부 contentEditable, SE ONE 문단, 일반 contentEditable 순서
  function findEditorFrame() {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) continue;

        // iframe 안의 contentEditable body
        if (doc.body && doc.body.isContentEditable) {
          return { type: "iframe", doc };
        }

        // iframe 안의 SE ONE 문단
        const seParagraphs = doc.querySelectorAll(".se-text-paragraph");
        if (seParagraphs.length > 0) {
          return { type: "se-iframe", doc, paragraphs: seParagraphs };
        }

        // iframe 안의 contentEditable div
        const editable = doc.querySelector('[contenteditable="true"]');
        if (editable) {
          return { type: "editable-iframe", element: editable };
        }
      } catch {
        // cross-origin iframe - 접근 불가
      }
    }
    return null;
  }

  function findEditor() {
    // 1) iframe 내부 에디터
    const frameEditor = findEditorFrame();
    if (frameEditor) return frameEditor;

    // 2) 현재 문서의 SE ONE 문단
    const seParagraphs = document.querySelectorAll(".se-text-paragraph");
    if (seParagraphs.length > 0) {
      return { type: "se-one", paragraphs: seParagraphs };
    }

    // 3) 현재 문서의 contentEditable
    const editable = document.querySelector('[contenteditable="true"]');
    if (editable) {
      return { type: "editable", element: editable };
    }

    return null;
  }

  function getEditorText(editor) {
    if (!editor) return null;

    switch (editor.type) {
      case "iframe":
        return editor.doc.body.innerText || "";
      case "se-iframe":
      case "se-one":
        return Array.from(editor.paragraphs || editor.doc.querySelectorAll(".se-text-paragraph"))
          .map((p) => p.innerText || "")
          .join("\n\n");
      case "editable-iframe":
      case "editable":
        return editor.element.innerText || "";
      default:
        return null;
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setEditorText(editor, text) {
    if (!editor) return false;

    const lines = text.split("\n");
    const html = lines
      .map((line) => (line ? `<p>${escapeHtml(line)}</p>` : "<p><br></p>"))
      .join("");

    switch (editor.type) {
      case "iframe":
        editor.doc.body.innerHTML = html;
        return true;
      case "se-iframe": {
        const container =
          editor.paragraphs[0].closest(".se-component-content") ||
          editor.paragraphs[0].parentElement;
        const seHtml = lines
          .map(
            (line) =>
              `<div class="se-text-paragraph se-text-paragraph-align-"><span class="se-text-content">${escapeHtml(line) || "<br>"}</span></div>`
          )
          .join("");
        container.innerHTML = seHtml;
        return true;
      }
      case "se-one": {
        const container =
          editor.paragraphs[0].closest(".se-component-content") ||
          editor.paragraphs[0].parentElement;
        const seHtml = lines
          .map(
            (line) =>
              `<div class="se-text-paragraph se-text-paragraph-align-"><span class="se-text-content">${escapeHtml(line) || "<br>"}</span></div>`
          )
          .join("");
        container.innerHTML = seHtml;
        return true;
      }
      case "editable-iframe":
      case "editable":
        editor.element.innerHTML = html;
        return true;
      default:
        return false;
    }
  }

  btn.addEventListener("click", () => {
    const editor = findEditor();
    const text = getEditorText(editor);

    if (text === null || !text.trim()) {
      // 에디터를 못 찾으면 클립보드 방식으로 안내
      showToast("에디터를 찾지 못했습니다. 팝업에서 변환 후 붙여넣기를 이용해 주세요.");
      return;
    }

    if (typeof formatNaverBlogText !== "function") {
      showToast("변환 모듈 로드 실패. 확장을 다시 설치해 주세요.");
      return;
    }

    // 줄바꿈 1개든 여러 개든 모두 문단 구분으로 통일
    const normalized = text.replace(/\n{1,}/g, "\n\n");
    const formatted = formatNaverBlogText(normalized, 2);

    // 먼저 직접 반영 시도
    const success = setEditorText(editor, formatted);

    if (success) {
      showToast("줄바꿈 정리 완료!");
    } else {
      // 직접 반영 실패 시 클립보드에 복사
      navigator.clipboard.writeText(formatted).then(
        () => showToast("클립보드에 복사되었습니다. Ctrl+V로 붙여넣어 주세요."),
        () => showToast("에디터에 반영하지 못했습니다.")
      );
    }
  });

  document.body.appendChild(btn);
})();
