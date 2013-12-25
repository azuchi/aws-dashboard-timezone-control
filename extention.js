$(function(){
  $("span.yellowfg").each(function(){
    console.log($(this).html());
    // 対象の日付（yyyyMMdd）を算出
    var div = $(this).parent().parent().parent().parent();
    var params = div.attr("id").split("_");
    var dateStr = params[params.length - 1];
    // 時間を算出
    params = $.trim($(this).html()).split(" ");
    var times = params[0].split(":");
    var date = new Date(
        dateStr.substring(0, 4), dateStr.substring(4, 6), dateStr.substring(6, 9),
        times[0], times[1]
    );
    console.log(date);

    console.log(params[0]);
//    $(this).html(params[0]);
  });
});
