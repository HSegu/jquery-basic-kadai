/*
$(function(){    
    $('window').on({
        'load': () =>{
            console.log("loadイベントが発生しました");
        },
        'scroll': () =>{
            console.log("scrollイベントが発生しました");
        },
    });
});



$(function(){    
    $(window).on('load', function(){
        console.log("test");
    });
});

*/

$(function(){
    $(document).ready(function(){
        console.log("loadイベントが発生しました");
    });

    $(window).on('scroll', function(){
        console.log("scrollイベントが発生しました");
    });
});
