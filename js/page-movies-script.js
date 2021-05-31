$(document).ready(function() {

    // Start Loading

    $(window).on("load",function(){
        // $(".loader").fadeOut(4000);
        $(".loader").fadeOut(4000);
        $("html, body").animate({
            scrollTop: 0
        },500)
    });
    

    // Padding TO Body Bcz Navbar Height

    $("body").css("paddingTop","80px");

    // Click On Navbar Buttton
    $(".navbar-toggler").click(function(){

        $(".navbar-collapse.collapse").toggleClass("open");
        $(".overlay-dark").addClass("open");
    });

    // remove Class open In Navbar In Small Screen 
    $(".overlay-dark").click(function(){

        $(this).fadeIn().removeClass("open")
        $(".navbar-collapse.collapse").fadeIn().removeClass("open");
    });


    // Trigger Tooltiop

    $('[data-toggle="tooltip"]').tooltip()

    // Click On Play Icon To open Popup On Carousel

    $(".rating .trailer-faces .trailer-btn .btn-text").click(function(){
        $(".popup").find("iframe").attr("src",$(this).parents(".trailer-btn").data("trailer"));
        $(".popup").fadeIn();
        console.log($(this).parents(".trailer-btn").data("trailer"));
    });

    // click On Popup To Remove Popup 

    $(".popup").click(function(){
        $(this).find("iframe").attr("src","");
        $(this).fadeOut();
    });

    $(window).keydown(function(e){
        var escKey = e.keyCode || e.which;
        if(escKey === 27){
            $(".popup").find("iframe").attr("src","");
            $(".popup").fadeOut();
        }
    });

});