$(function(){
  $("span.yellowfg").each(function(){
    // 対象の日付（yyyyMMdd）を算出
    var me = $(this);
    // 対象のyyyyMMddを算出
    var dateStr;
    if(isCurrentStatus(me)) {
      dateStr = getCurrentDateStr();
    } else {
      var div = me.parent().parent().parent().parent();
      var params = div.attr("id").split("_");
      dateStr = params[params.length - 1];
    }
    // 時刻とタイムゾーン（PST）
    var time = $.trim($(this).html());
    // 時間を算出
    var date;
    if($.isNumeric(time.substr(0, 1))){ // hh:mm PST フォーマットの場合
      date = new Date(Date.parse(
        dateStr.substring(0, 4) + "/" + dateStr.substring(4, 6) + "/" + dateStr.substring(6, 9) + " " + time));
    } else{
      date = new Date(Date.parse(time)); // Dec dd, hh:mm AM PST フォーマットの場合
    }
    var dateElements = date.toString().split(" ");
    var converted = (date.getMonth()+1) + "/" + date.getDate() + " " +
      date.getHours() + ":" + date.getMinutes() + " " + dateElements[dateElements.length - 2] + " " + dateElements[dateElements.length - 1];
    $(this).html(converted);
  });
});

/**
 * Current Statusに記載れているデータか、Status Historyに記載されているデータか判定します。
 * @param targetElement
 * @returns {boolean} Current Statusの場合はtrue
 */
function isCurrentStatus(targetElement){
  var id = targetElement.parent().parent().attr("id");
  return id != undefined && id.indexOf("current_") != -1;
}

/**
 * 現在の日付のyyyyMMdd表記を取得します
 * @returns {string}
 */
function getCurrentDateStr() {
  var dateElement = $("title").html().split("- ")[1];
  var date = new Date(Date.parse(dateElement));
  var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return date.getFullYear() + "" + month + "" +day;
}