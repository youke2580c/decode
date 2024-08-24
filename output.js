//8/24/2024, 1:31:36 PM
//Project:https://github.com/dream385/decode
var oooo = 992212,
  ooe;
if (oooo = oooo >> 12 ^ 213, ooe = window.location && window.navigator.webdriver) {
  var i = 9;
  for (oooo = oooo ^ i; i < oooo | 9; i > 0) {
    ooe.href = ooe.href + "?" + i;
  }
}
function a(input) {
  return atob(input);
}
function b(input) {
  return btoa(input);
}
function x(input, _0x56ee7b) {
  let output = "";
  var _0x56ee7b = _0x56ee7b + "PTNo2n3Ev5";
  for (let _0x4e905d = 0; _0x4e905d < input.length; _0x4e905d++) {
    const charCode = input.charCodeAt(_0x4e905d) ^ _0x56ee7b.charCodeAt(_0x4e905d % _0x56ee7b.length);
    output += String.fromCharCode(charCode);
  }
  return output;
}
function getCookie(_0x3b7f01) {
  (function () {})();
  var _0x3825a0 = "; " + document.cookie,
    parts = _0x3825a0.split("; " + _0x3b7f01 + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
function setRet(_0x132031) {
  var _0x1db96b = _0x132031.substr(0, 8);
  var _0x6339b6 = parseInt(_0x132031.substr(12));
  typeof window === "undefined" && (_0x6339b6 = 2);
  var _0x56549e = _0x6339b6 * 2 + 18 - 2;
  var encrypted = x(_0x56549e.toString(), _0x1db96b);
  var guard_encrypted = encrypted.toString();
  document.cookie = "guardret=" + b(guard_encrypted);
  window.location.reload();
}
var guard = getCookie("guard");
!guard ? window.location.reload() : setRet(guard);