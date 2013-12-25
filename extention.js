$(function(){
  $("span.yellowfg").each(function(){
    // 対象の日付（yyyyMMdd）を算出
    var div = $(this).parent().parent().parent().parent();
    var params = div.attr("id").split("_");
    var dateStr = params[params.length - 1];
    // 時刻とタイムゾーン（PST）
    var time = $.trim($(this).html()); // TODO DOMにセットされる時刻のフォーマットが違う場合がある。
    // 時間を算出
    var date = new Date(Date.parse(
        dateStr.substring(0, 4) + "/" + dateStr.substring(4, 6) + "/" + dateStr.substring(6, 9) + " " + time));
    var dateElements = date.toString().split(" ");
    var converted = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " +
      date.getHours() + ":" + date.getMinutes() + " " + dateElements[dateElements.length - 2] + " " + dateElements[dateElements.length - 1];
    $(this).html(converted);
  });
});

