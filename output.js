//5/23/2025, 6:33:19 PM
//Project:https://github.com/dream385/decode
$(function () {
  $(".nav li").hover(function () {
    $(this).children(".sub_nav").stop().slideDown();
    $(this).addClass("hover");
  }, function () {
    $(this).children(".sub_nav").stop().slideUp();
    $(this).removeClass("hover");
  });
  $(".navM .btnMenu").click(function () {
    $(".headerW").css("display", "block");
  });
  $(".headerW .close").click(function () {
    console.log("aaaa");
    $(".headerW").css("display", "none");
  });
  $(".navM ul li .title").click(function () {
    if ($(".navM li .arrow").css("display") == "block") {
      if ($(this).parent().hasClass("show")) {
        $(this).parent().removeClass("show");
      } else {
        $(this).parent().siblings().removeClass("show");
        $(this).parent().addClass("show");
      }
    }
  });
  $(".btnRW .btnReadMore").click(function () {
    $(".chapBox .content").addClass("more");
  });
  $(".chapBox .tab li").click(function () {
    var _0x493ax1 = $(this).index();
    $(this).siblings().removeClass("cur");
    $(this).addClass("cur");
    var _0x493ax2 = $(this).parent().parent().parent().children(".conCZ").children(".conC");
    _0x493ax2.eq(_0x493ax1).css("display", "block");
    _0x493ax2.eq(_0x493ax1).siblings().css("display", "none");
  });
  $(".popupAsk .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".btnAskBook").click(function () {
    $(".popupAsk").addClass("show");
  });
  $(".btnBlue").click(function () {
    var _0x493ax3 = $(this).parents("form");
    var _0x493ax4 = _0x493ax3.find("input[class=\"input\"]").val();
    var _0x493ax5 = _0x493ax3.find("textarea[class=\"textarea\"]").val();
    if (!_0x493ax4 || _0x493ax4 == "" || _0x493ax4 == undefined) {
      layer.msg("请输入书籍名称", {
        icon: 2,
        timer: 1000
      });
      return;
    }
    $.post("/index.php?action=askBook", {
      bookName: _0x493ax4,
      subordinate: _0x493ax5
    }, function (_0x493ax6) {
      if (_0x493ax6.code == 0) {
        layer.msg(_0x493ax6.msg, {
          icon: 1,
          timer: 1000
        });
        _0x493ax3.parents(".popupAsk").removeClass("show");
        return;
      }
      layer.msg(_0x493ax6.msg, {
        icon: 2,
        timer: 1000
      });
    }, "json");
  });
  $(".popupError .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".btnError").click(function () {
    $(".popupError").addClass("show");
  });
  $(".popupError .popupBox .list li").click(function () {
    $(this).toggleClass("sel");
  });
  $(".topM .btnSet").click(function () {
    $(".popupSet").addClass("show");
  });
  $(".popupSet .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".recoBox .tab li").click(function () {
    var _0x493ax1 = $(this).index();
    $(this).siblings().removeClass("cur");
    $(this).addClass("cur");
    var _0x493ax2 = $(this).parent().parent().parent().children(".conREZ").children(".conRE");
    _0x493ax2.eq(_0x493ax1).addClass("show");
    _0x493ax2.eq(_0x493ax1).siblings().removeClass("show");
  });
  $(".recoBox2 .tab li").click(function () {
    var _0x493ax1 = $(this).index();
    $(this).siblings().removeClass("cur");
    $(this).addClass("cur");
    var _0x493ax2 = $(this).parent().parent().parent().children(".conREZ").children(".conRE");
    _0x493ax2.eq(_0x493ax1).addClass("show");
    _0x493ax2.eq(_0x493ax1).siblings().removeClass("show");
  });
  $(".selBox .btn").click(function () {
    event.stopPropagation();
    $(".selBox .btn").not($(this)).parent().children(".dropDown").css("display", "none");
    $(".selBox .btn").not($(this)).parent().removeClass("show");
    if ($(this).parent().hasClass("show")) {
      $(this).parent().children(".dropDown").css("display", "none");
      $(this).parent().removeClass("show");
    } else {
      $(this).parent().siblings().children(".dropDown").css("display", "none");
      $(this).parent().siblings().removeClass("show");
      $(this).parent().children(".dropDown").css("display", "block");
      $(this).parent().addClass("show");
    }
  });
  var _0x493ax7 = 1;
  $(".selBox .dropDown li").click(function () {
    $(this).parent().parent().css("display", "none");
    $(this).parent().parent().parent().removeClass("show");
    $(this).parent().parent().parent().children(".btn").children(".txt").text($(this).text());
    $(this).parent().parent().parent().parent().parent().children(".downW").children(".downabout").text($(this).attr("data-info"));
    var _0x493ax8 = $(this).data("p");
    var _0x493ax9 = $(this).parents(".dropDown").data("aid");
    if (_0x493ax8 != _0x493ax7) {
      _0x493ax7 = _0x493ax8;
      loadChapterPage(_0x493ax9, _0x493ax7);
    }
  });
  $(".next").click(function () {
    if (_0x493ax7 >= $(".selBox .dropDown li").length) {
      return;
    }
    var _0x493ax8 = _0x493ax7 + 1;
    var _0x493axa = $(".selBox .dropDown li:eq(" + (_0x493ax8 - 1) + ")");
    $(this).parent().children(".selBox").children(".btn").children(".txt").text($(_0x493axa).text());
    var _0x493ax9 = $(this).parent().find(".selBox .dropDown").data("aid");
    _0x493ax7 = _0x493ax8;
    loadChapterPage(_0x493ax9, _0x493ax7);
  });
  $(".upper").click(function () {
    if (_0x493ax7 <= 1) {
      return;
    }
    var _0x493ax8 = _0x493ax7 - 1;
    var _0x493axa = $(".selBox .dropDown li:eq(" + (_0x493ax8 - 1) + ")");
    $(this).parent().children(".selBox").children(".btn").children(".txt").text($(_0x493axa).text());
    var _0x493ax9 = $(this).parent().find(".selBox .dropDown").data("aid");
    _0x493ax7 = _0x493ax8;
    loadChapterPage(_0x493ax9, _0x493ax7);
  });
  $("body").on("click", ".btnSearch", function () {
    var _0x493axb = $("input[name=\"keyword\"]").val();
    if (!_0x493axb) {
      layer.msg("请输入关键词", {
        icon: 2,
        timer: 1000
      });
      return false;
    }
    window.location.href = search_url.replace("{keyword}", _0x493axb);
  });
  var _0x493axc = $(".selBox .dropDown li.cur");
  _0x493axc.each(function () {
    $(this).parent().parent().parent().children(".btn").children(".txt").text($(this).text());
  });
  $("body").click(function () {
    $(".selBox").removeClass("show");
    $(".selBox .dropDown").css("display", "none");
  });
});
function openUrl(_0x493axe = "") {
  let _0x493axf = CryptoJS.enc.Base64.parse(_0x493axe);
  let _0x493ax10 = CryptoJS.lib.WordArray.create(_0x493axf.words.slice(0, 4), 16);
  let _0x493ax11 = CryptoJS.lib.WordArray.create(_0x493axf.words.slice(4), _0x493axf.sigBytes - 16);
  let _0x493ax12 = navigator.userAgent.toLowerCase();
  let _0x493ax13 = CryptoJS.enc.Base64.parse(num);
  numStr = CryptoJS.enc.Utf8.stringify(_0x493ax13);
  let _0x493ax14 = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(_0x493ax12 + numStr).toString().toLowerCase());
  let _0x493ax15 = CryptoJS.AES.decrypt({
    ciphertext: _0x493ax11
  }, _0x493ax14, {
    iv: _0x493ax10,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x493ax15.toString(CryptoJS.enc.Utf8);
}
function toUrl(_0x493ax17 = "", _0x493ax18 = "") {
  if (_0x493ax18) {
    _0x493ax18 = openUrl(_0x493ax18);
    if (_0x493ax18) {
      upclick(_0x493ax18);
    }
  }
  window.open(openUrl(_0x493ax17));
}
function upclick(_0x493ax18 = "") {
  $.post("/index.php?action=upclick", {
    bookId: _0x493ax18
  }, function (_0x493ax6) {
    if (_0x493ax6.code == 0) {}
  }, "json");
}
function handleEnter(_0x493ax1b) {
  var _0x493ax1c = _0x493ax1b.keyCode ? _0x493ax1b.keyCode : _0x493ax1b.which;
  if (_0x493ax1c == "13") {
    var _0x493axb = $("input[name=\"keyword\"]").val();
    if (!_0x493axb) {
      layer.msg("请输入关键词", {
        icon: 2,
        timer: 1000
      });
      return false;
    }
    window.location.href = search_url.replace("{keyword}", _0x493axb);
  }
}
function search() {
  var _0x493axb = $("input[name=\"keyword\"]").val();
  if (!_0x493axb) {
    layer.msg("请输入关键词", {
      icon: 2,
      timer: 1000
    });
    return false;
  }
  window.location.href = search_url.replace("{keyword}", _0x493axb);
}