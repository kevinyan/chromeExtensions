$('input[value="标记为豁免"]').click();
$('input[value="豁免待确认"]').click();
clearInterval(window._interval);
window._interval = setInterval(function() {
    var a = $(".diff-file-path a span");
    if (a.length < 3) {
        $(".diff-file-path a").append("&nbsp;<span>0</span>&nbsp;<span>0</span>&nbsp;<span>0</span>");
        a = $(".diff-file-path a span")
    }
    a.eq(0).text($(".mark-pass-btn").not(".disabled").not(".marked").slice(0, 6).addClass("marked").each(function(b) {
        var d = document.createEvent("MouseEvents");
        d.initEvent("click", true, false);
        this.dispatchEvent(d)
    }).length + parseInt(a.eq(0).text()));
    a.eq(1).text($(".mark-pass-btn.disabled").not(".marked").addClass("marked").length + parseInt(a.eq(1).text()));
    a.eq(2).text($(".report-error-btn").not(".marked").addClass("marked").length + parseInt(a.eq(2).text()))
}, 100);
