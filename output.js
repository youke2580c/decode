//8/31/2024, 10:25:09 AM
//Project:https://github.com/dream385/decode
function utf8_char_code_at(_0x156f25, _0x468cc4) {
  let _0x592421 = _0x156f25.charAt(_0x468cc4);
  return _0x592421.charCodeAt(0);
}
function decryptData(_0xeaad38) {
  let _0x8d60f3 = ["NC1iWGQ5aU4=", "NC1SWHlqcnk=", "NC1vWXZ3Vnk=", "NC00Wlk1N1U=", "NC1tYkpwVTc=", "NC02TU0yRWk=", "NC01NFRpUXI=", "NC1QaDV4eDk=", "NC1iWWdlUFI=", "NC1aOUEzYlc="],
    _0x828c42 = Base64.decode(_0x8d60f3[cid % 10]),
    _0x196fa1 = _0x828c42.length,
    _0x2a8879 = atob(_0xeaad38),
    _0x5b1485 = "";
  for (let _0x1a2ef1 = 0; _0x1a2ef1 < _0x2a8879.length; _0x1a2ef1++) {
    let _0x492023 = _0x1a2ef1 % _0x196fa1;
    _0x5b1485 += String.fromCharCode(utf8_char_code_at(_0x2a8879, _0x1a2ef1) ^ utf8_char_code_at(_0x828c42, _0x492023));
  }
  let _0x4a5bac = atob(_0x5b1485);
  return JSON.parse(_0x4a5bac);
}