//4/24/2025, 6:35:49 PM
//Project:https://github.com/dream385/decode
function _0xa938b3(_0x295d98) {
  const _0x5371ac = document.cookie.split(";");
  let _0x1c839d = null;
  for (let _0x31bbb4 of _0x5371ac) {
    const [_0x17f051, _0x309f03] = _0x31bbb4.trim().split("=");
    _0x17f051 === _0x295d98 && (_0x1c839d = _0x309f03);
  }
  return _0x1c839d;
}
function _0x52e70f(_0x3e4d2e) {
  function _0x252ac3(_0x371fa7, _0x11b12a) {
    (function () {})();
    let _0x3a4765 = "";
    var _0x11b12a = _0x11b12a + "wE2thvDu4n";
    for (let _0x8befcd = 0; _0x8befcd < _0x371fa7.length; _0x8befcd++) {
      const _0x13c708 = _0x371fa7.charCodeAt(_0x8befcd) ^ _0x11b12a.charCodeAt(_0x8befcd % _0x11b12a.length);
      _0x3a4765 += String.fromCharCode(_0x13c708);
    }
    return _0x3a4765;
  }
  function _0x47d62e(_0xb703a0) {
    return btoa(_0xb703a0);
  }
  var _0x3d3ed7 = _0x3e4d2e.substr(0, 8),
    _0x51fa3a = parseInt(_0x3e4d2e.substr(12));
  typeof window === "undefined" && (_0x51fa3a = 2);
  var _0x5c7ff3 = _0x51fa3a * 2 + 18 - 2,
    _0x2017e7 = _0x252ac3(_0x5c7ff3.toString(), _0x3d3ed7),
    _0x487985 = _0x2017e7.toString();
  document.cookie = "guardret=" + _0x47d62e(_0x487985);
  window.location.reload();
}
var _0x4c4631 = _0xa938b3("guard");
!_0x4c4631 ? window.location.reload() : _0x52e70f(_0x4c4631);