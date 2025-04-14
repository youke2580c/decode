//4/14/2025, 7:29:48 PM
//Project:https://github.com/dream385/decode
Object.defineProperty(window, "confirm", {
  "configurable": false,
  "writable": false,
  "value": window.confirm
});
const currentHour = new Date().getHours();
if (isAgeVerified && document.cookie.includes("_ga")) {
  setTimeout(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (currentHour >= 20 || currentHour < 8) {
          confirm("章节顺序解析中。");
        }
        var _0x5c99c1 = $(".BCsectionTwo-top-chapter");
        var _0x57390c = _0x5c99c1.get().sort((_0x33001e, _0x4fd9a6) => {
          return originalOrder[_0x5c99c1.index(_0x33001e)] - originalOrder[_0x5c99c1.index(_0x4fd9a6)];
        });
        var _0xece157 = $(".BCsectionTwo-top");
        _0xece157.one("touchend click", function () {
          if (!document.cookie.includes("__itrace_wid")) {
            _0xece157.empty().append(_0x57390c);
          }
          console.log("排序已执行");
        });
      }, Math.random() * 100 + 500);
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
_0xodd = "jsjiami.com.v6";