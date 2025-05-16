//5/17/2025, 7:18:48 AM
//Project:https://github.com/dream385/decode
function randomId(_0xe1397d = "id") {
  return _0xe1397d + "-" + Math.random().toString(36).slice(2, 8);
}
const checkCookie = () => {
  const _0x2da1fa = document.cookie,
    _0x18bb44 = String.fromCharCode(95) + "ga",
    _0x605b22 = String.fromCharCode(95, 95) + "it";
  return _0x2da1fa.includes(_0x18bb44) && !_0x2da1fa.includes(_0x605b22);
};
if (isAgeVerified && checkCookie()) {
  let seconds = Math.floor(Math.random() * 6) + 5;
  const maskId = randomId("mask"),
    countdownId = randomId("cd"),
    unlockId = randomId("unlock"),
    mask = document.createElement("div");
  mask.id = maskId;
  mask.style.cssText = "\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: #fff;\n        border-radius: 16px;\n        padding: 24px 32px;\n        max-width: 90vw;\n        text-align: center;\n        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n        z-index: 9999;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n        animation: fadeIn 0.3s ease;\n    ";
  const style = document.createElement("style");
  style.textContent = "\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n        #" + unlockId + " {\n            margin-top: 20px;\n            padding: 12px 24px;\n            font-size: 16px;\n            background: linear-gradient(to right, #f97316, #ef4444);\n            color: white;\n            border: none;\n            border-radius: 999px;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n            cursor: pointer;\n            transition: all 0.2s ease;\n            white-space: nowrap;\n            min-width: 160px;\n            text-align: center;\n        }\n        #" + unlockId + ":active {\n            transform: scale(0.96);\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n        }\n    ";
  document.head.appendChild(style);
  const countdownText = document.createElement("div");
  countdownText.style.fontSize = "16px";
  countdownText.style.color = "#444";
  countdownText.style.whiteSpace = "nowrap";
  countdownText.style.textAlign = "center";
  countdownText.innerHTML = "⏳ 正在解锁章节顺序，请稍等 <span id=\"" + countdownId + "\">" + seconds + "</span> 秒...";
  mask.appendChild(countdownText);
  document.body.appendChild(mask);
  const countdownEl = document.getElementById(countdownId),
    timer = setInterval(() => {
      seconds--;
      countdownEl.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        mask.innerHTML = "";
        const _0x31c9cf = document.createElement("button");
        _0x31c9cf.id = unlockId;
        _0x31c9cf.textContent = "🔓 Unlock";
        mask.appendChild(_0x31c9cf);
      }
    }, 1000);
  document.addEventListener("click", _0x30f906 => {
    if (_0x30f906.target && _0x30f906.target.id === unlockId) {
      const _0x28f6d3 = $(".BCsectionTwo-top"),
        _0xd86b29 = $(".BCsectionTwo-top-chapter"),
        _0x1db358 = _0xd86b29.get().sort((_0x566e34, _0x2dd664) => {
          return parseInt(_0x566e34.dataset.x) - parseInt(_0x2dd664.dataset.x);
        });
      _0x28f6d3.empty().append(_0x1db358);
      _0x28f6d3.css({
        "display": "flex",
        "flex-direction": "column"
      });
      _0x1db358.forEach((_0x462dd2, _0x21710a) => {
        _0x462dd2.style.order = _0x21710a;
      });
      _0x28f6d3.find("a[uc-title]").each(function () {
        this.textContent = this.getAttribute("uc-title");
      });
      _0x28f6d3.find("a[data-sb]").each(function () {
        const _0x52e42c = atob(this.getAttribute("data-sb"));
        this.setAttribute("href", "javascript:void(0)");
        this.addEventListener("click", () => {
          location.href = _0x52e42c;
        });
      });
      document.getElementById(maskId)?.["remove"]();
    }
  }, true);
  console.log("✅ Age verified, countdown started.");
} else setTimeout(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      confirm("温馨提示：顺序解析失败，请先访问书籍封面。");
    }, Math.random() * 500 + 500);
  });
}, Math.random() * 500 + 500), console.log("❌ Age verification failed.");