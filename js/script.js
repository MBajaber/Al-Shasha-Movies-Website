$(document).ready(function (){

    // Start Loading

    $(window).on("load",function(){
        // $(".loader").fadeOut(4000);
        $(".loader").fadeOut(4000);
        $("html, body").animate({
            scrollTop: 0
        },500)
    });

    // Add Class open In Navbar In Small Screen 

    $(".navbar-toggler").click(function(){

        $(".navbar-collapse.collapse").addClass("open");
        $(".overlay-dark").addClass("open");
        
    });

    // remove Class open In Navbar In Small Screen 
    $(".overlay-dark").click(function(){

        $(this).fadeIn().removeClass("open")
        $(".navbar-collapse.collapse").fadeIn().removeClass("open");
    });

    // Trigger carousel In Slider
    $('.carousel').carousel();

    // Create Reflect Image On Carousel

    $(".slider .carousel-item .reflect-image").each(function(){
        var createEl = document.createElement("img");
        var crateAttr = document.createAttribute("src");
        crateAttr.value = $(this).parents(".carousel-item").find("img").attr("src");
        createEl.setAttributeNode(crateAttr);
        $(this).append(createEl)
    });

    // Click On Play Icon To open Popup On Carousel

    $(".play-icon").click(function(){
        $(".popup").find("iframe").attr("src",$(this).parents(".carousel-item").data("trailer"));
        $(".popup").fadeIn();
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

    // Show Navbar On Scroll Down 

    $(window).scroll(function(){

        if($(window).scrollTop() > 670) {
            $(".mynavbar").addClass("bg-dark mysticknavbar");
            $(".mynavbar").removeClass("navbar-expand-lg");
            $(".mynavbar").css({
                position: "fixed",
                top: 0,
                left: 0
            });
        
        } else {
            $(".mynavbar").removeClass("bg-dark mysticknavbar");
            $(".mynavbar").addClass("navbar-expand-lg");
            $(".mynavbar").css({
                position: "relative",
                top: "auto",
                left: "auto"
            });
        }
    });

    // Start Movies categories and Trigger Owl-Carousel Plugin

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Movies Cards Take Images From Siblings

    $(".movies-cards .card .images .image-one, .movies-cards .card .images .image-two").each(function(){

        $(this).css("backgroundImage",$(this).parents(".card").find(".back-image").css("backgroundImage"))

    });

    // To Make Story Of Movies Not Big 

    $(".movies-cards .card .movie-story p").each(function(){
        var textLenght = $(this).text().length;
        if(textLenght > 165){
            var cutText = $(this).text().slice(0,165);
            $(this).text(cutText + "...");
        }
        // This For Responsive For Mobile
        if($(window).innerWidth() < 567){
            var cutTextStory = $(this).text().slice(0,120);
            $(this).text(cutTextStory + "...");
        }
    });
});