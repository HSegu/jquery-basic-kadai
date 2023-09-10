$(function(){
    //HTML読込イベント
    $(document).ready(function(){
        console.log("loadイベントが発生しました");
    });

    //スクロールイベント
    $(window).on('scroll', function(){
        console.log("scrollイベントが発生しました");
    });
});
