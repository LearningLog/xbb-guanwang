$(function() {
    $(".xiao-b").click(function() {
        $(".xiao-b-dialog").css("visibility", "visible");
    });
    $(".houdao-recruitment").click(function() {
        $(".houdao-recruitment-dialog").css("visibility", "visible");
    });
    $(".houdao-xbbc,.xbb-c").click(function() {
        $(".houdao-xbbc-dialog").css("visibility", "visible");
    });
    $(".xiao-b-dialog, .houdao-recruitment-dialog, .houdao-xbbc-dialog,.dialog:after").click(function(e) {
        $(this).css("visibility", "hidden");
    });
    $(".xiao-b-ru-zhi-kuai-img, .houdao-recruitment-img,.houdao-xbbc-img").click(function(e){
        // 阻止事件冒泡
        e.stopPropagation();
    });
});