/*------------------------------------------------------------------
 [Gradient Js File]
 Project:	Edutech
 Version:	1.1
 Author:	Design Gurus (https://themeforest.net/user/design_gurus )
 Primary use: Corporate, Education and Institution


 This js file is used in all gradient pages

 -------------------------------------------------------------------*/

/*-------------------------------------------------------------------
 [Table Of Content]

 1. Fix Header Navbar

 -------------------------------------------------------------------*/

/*===================================
 On  Scroll Fix Header
 ======================================*/

$(document).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>2)
    {
        $(".navbar").addClass('navbar-fixed-top');
        $("#TopBtn").fadeIn();
    }else
    {
        $(".navbar").removeClass('navbar-fixed-top');
        $("#TopBtn").fadeOut();
    }
});
