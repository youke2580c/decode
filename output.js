//4/14/2025, 8:04:13 PM
//Project:https://github.com/dream385/decode
Object.defineProperty(window, "confirm", {
  "configurable": false,
  "writable": false,
  "value": window.confirm
});
const originalConfirm = window.confirm;
setInterval(() => {
  if (window.confirm !== originalConfirm) {
    console.warn("警告：confirm 函数被篡改");
  }
}, 2000);
const antiDebug = () => {
  const _0x87fae = performance.now();
  for (let _0x29981a = 0; _0x29981a < 100000; _0x29981a++) {}
  if (performance.now() - _0x87fae > 50) console.warn("检测到调试行为");
};
setTimeout(antiDebug, Math.random() * 500 + 500);
const checkCookie = () => {
  const _0x22ca61 = document.cookie;
  const _0x580a58 = String.fromCharCode(95) + "ga";
  const _0x4d6b4e = String.fromCharCode(95, 95) + "itrace" + String.fromCharCode(95);
  return _0x22ca61.includes(_0x580a58) && !_0x22ca61.includes(_0x4d6b4e);
};
if (isAgeVerified && checkCookie()) {
  setTimeout(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        var _0x25b08b = $(".BCsectionTwo-top-chapter");
        var _0x1153a6 = _0x25b08b.get().sort((_0x1e6160, _0x12f1be) => {
          return originalOrder[_0x25b08b.index(_0x1e6160)] - originalOrder[_0x25b08b.index(_0x12f1be)];
        });
        var _0x1449d3 = $(".BCsectionTwo-top");
        _0x1449d3.one("click touchend", function () {
          if (checkCookie() && isAgeVerified) {
            _0x1449d3.empty().append(_0x1153a6);
            _0x1449d3.find("a[data-real]").each(function () {
              const _0xa1d880 = this.dataset.real;
              this.textContent = _0xa1d880;
            });
          }
        });
      }, Math.random() * 500 + 500);
    });
  }, Math.random() * 100 + 500);
  console.log("User has agreed to age verification.");
} else {
  setTimeout(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        confirm("温馨提示：顺序解析失败，请先访问书籍封面。");
      }, Math.random() * 500 + 500);
    });
  }, Math.random() * 500 + 500);
  console.log("User has not agreed to age verification.");
}
_0xod7 = "jsjiami.com.v6";