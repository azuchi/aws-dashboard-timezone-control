$(function(){
  $("span.yellowfg").each(function(){
    // 対象の日付（yyyyMMdd）を算出
    var div = $(this).parent().parent().parent().parent();
    var params = div.attr("id").split("_");
    var dateStr = params[params.length - 1];
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
    var converted = date.getMonth() + "/" + date.getDate() + " " +
      date.getHours() + ":" + date.getMinutes() + " " + dateElements[dateElements.length - 2] + " " + dateElements[dateElements.length - 1];
    $(this).html(converted);
  });
});

