

var list=document.getElementsByClassName("movie-list");
window.onload=function(){
    start1();
}
window.onresize=function(){
    var w=screen.width;
    var h=screen.height;
    var swiper=document.getElementsByClassName("swiper-container")[0];
    swiper.style.height=0.4*w;
}
function start1(){
    $("#round-but").hide()

    $("#round-but").click(function(){
        $("body").animate({scrollTop:0},200);
    })
    $nav=$('.nav-right li').first();
    $nav.hover(function(){
        $(".over-page").show();
    },function(){
        $(".over-page").hide(0).delay(3000);
    })
    $('.over-page').mouseover(function () {
        $(this).show();
    })
    $(".nav-right li").eq(1).hover(function(){
        $('.sub-list').show()
    },function(){
        $('.sub-list').hide()

    })
    for(var i=0;i<list.length;i++){
        var items=list[i].getElementsByTagName("li");
        for(var j=0;j<items.length;j++){
            var $item=$(items[j]);
            $item.mouseover(function(){
               over($(this));
            });

            $item.mouseout(function(){
               out($(this));

            })

        }
    }

}
function over($e){
    var tooltip="<div id='tooltip'>→</div>";
    $hh=$e.height();
    $ww=$e.width();
    $vv=$e.offset().top;
    $cc=$e.offset().left;
    $("#tooltip").css({
        "position":"absolute",
        "top":$vv+$hh/3,
        'left':$cc+$ww/3,
        "color": "white",
        "background-color": "#98bf21",
        "font-family": "Arial",
        "font-size": "20px",
        "padding": "5px",
        "opacity":"1"
    });
    $("#tooltip").animate({left:$cc+$ww/2+'px'});
       // $e.append(tooltip);
        $e.css({"opacity":"0.8",
        "cursor":"pointer",});
}
function out($e){
    //console.log($e[0].innerHTML);
   // $e.find("div").remove();
    $e.css("opacity","1");

}

$(window).scroll(function(){
    if($(window).scrollTop()>700){
        $("#round-but").show()
    }else{
        $("#round-but").hide()
    }
    console.log($(window).scrollTop());

})


