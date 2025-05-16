//5/16/2025, 8:56:20 AM
//Project:https://github.com/dream385/decode
var encode_version = "sojson.v5";
$(function () {
  $("#wrapper").hide();
  $("#firendlink").hide();
  $(".dahengfu").hide();
  $(".footer").hide();
  $("body").css("background-color", "#fff");
  $("#tip").append("<center><h1>404 Not Found</h1></center><hr><center>nginx</center>");
});
if (!(typeof encode_version !== "undefined" && encode_version === "sojson.v5")) {
  window.alert("涓嶈兘鍒犻櫎sojson.v5");
}
encode_version = "sojson.v5";