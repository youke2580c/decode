//11/7/2024, 8:54:39 PM
//Project:https://github.com/dream385/decode
function _0x4e7247(_0x16feef) {
  var _0x48afc1, _0x553b73, _0x47b1a2, _0x3f5e0e, _0x3bb012, _0x988d7;
  _0x48afc1 = "";
  _0x47b1a2 = _0x16feef.length;
  for (_0x553b73 = 0; _0x553b73 < _0x47b1a2; _0x553b73++) {
    _0x3f5e0e = _0x16feef.charCodeAt(_0x553b73);
    if (_0x3f5e0e <= 127) {
      _0x48afc1 += String.fromCharCode(_0x3f5e0e);
    } else {
      _0x3bb012 = _0x16feef.charCodeAt(++_0x553b73);
      if (_0x3f5e0e <= 223) {
        _0x48afc1 += String.fromCharCode((_0x3f5e0e & 31) << 6 | _0x3bb012 & 63);
      } else {
        _0x988d7 = _0x16feef.charCodeAt(++_0x553b73);
        _0x48afc1 += String.fromCharCode((_0x3f5e0e & 15) << 12 | (_0x3bb012 & 63) << 6 | _0x988d7 & 63);
      }
    }
  }
  return _0x48afc1;
}
var _0x5c58a1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function _0x5af2c7(_0x2d3757) {
  var _0x1477fc, _0x2e99ec, _0x58d2f3, _0x329cc7, _0x558e58, _0x3e25ba, _0x10b7c6, _0x335925, _0x242a37, _0x12d2e3;
  _0x1477fc = "";
  _0x2e99ec = 0;
  _0x58d2f3 = _0x2d3757.length;
  while (_0x2e99ec < _0x58d2f3) {
    _0x10b7c6 = _0x5c58a1.indexOf(_0x2d3757.charAt(_0x2e99ec++));
    _0x335925 = _0x5c58a1.indexOf(_0x2d3757.charAt(_0x2e99ec++));
    _0x242a37 = _0x5c58a1.indexOf(_0x2d3757.charAt(_0x2e99ec++));
    _0x12d2e3 = _0x5c58a1.indexOf(_0x2d3757.charAt(_0x2e99ec++));
    _0x329cc7 = _0x10b7c6 << 2 | _0x335925 >> 4;
    _0x558e58 = (_0x335925 & 15) << 4 | _0x242a37 >> 2;
    _0x3e25ba = (_0x242a37 & 3) << 6 | _0x12d2e3;
    _0x1477fc += String.fromCharCode(_0x329cc7);
    if (_0x242a37 !== 64) {
      _0x1477fc += String.fromCharCode(_0x558e58);
    }
    if (_0x12d2e3 !== 64) {
      _0x1477fc += String.fromCharCode(_0x3e25ba);
    }
  }
  return _0x4e7247(_0x1477fc);
}
document.getElementById("booktxt").innerHTML = _0x5af2c7(c.slice(Number(c.slice(4, 6)) + 6, c.length - Number(c.slice(4, 6))).replace(/_/g, "8L3A+").replace(/-/g, "PHA+"));