$(function(){
    //슬라이더
   
    currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"},600);
        
        if(currentIndex == 3 ){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentIndex = 0;
            },700);
        };
    },3000);

    //메뉴
   
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").slideDown(400);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").slideUp(100);
    });

    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });

    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});