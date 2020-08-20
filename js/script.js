
/*============================================= 
                PreLoader
================================================*/

$(window).on('load', () => {  //website to load fully

    $('#status').fadeOut();    //gif will be faded

    $('#preloader').delay(350).fadeOut('slow'); //white backgroung will be faded

});

/*============================================= 
                Team
================================================*/

$(()=>{

    $("#team-members").owlCarousel({

        items:2,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause:true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left left"></i>','<i class="fa fa-angle-right left"></i>']

    });

});

