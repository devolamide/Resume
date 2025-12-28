'use strict';

$(window).on('load', function() {

    // PRELOADER
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 500);

    // NAVBAR SMOOTH SCROLL
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    nav.find('a').on('click', function(){
        var $el = $(this),
        id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
        return false;
    });
    $(window).on('scroll', function(){
        var cur_pos = $(this).scrollTop();

        sections.each(function(){
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if(cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });





    fetch('portfolio-data.json')
        .then(response => response.json()) // Parse the JSON data from the response
        .then(allProjects => {
            let rowData = ``;
            function populateRowData(row){
                const categoryTag = row.category.join(" ")
                rowData += `
                <div class="portfolio-card col-lg-4 col-md-6 single-item ${categoryTag} wow fadeInUp" data-wow-delay="0.2s">
                    <img src="images/portfolio/${row.imageUrl}" alt="">
                    <div class="portfolio-card-info">
                        <div class="portfolio-card-info-item">
                            <div class="portfolio-card-name">
                                ${row.name}
                            </div>
                            <div class="portfolio-card-button">
                                <a href="portfolio-item.html?id=${row.id}" class="btn-text portfolio-card-button-btn" >
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `
            }
            for(const item of allProjects){
                populateRowData(item)
            }
            document.getElementById('portfolio-items-container').innerHTML = rowData


        })
        .catch(error => console.error('Error fetching JSON:', error));



});

$(document).ready(function() {

    // WOW JS
    new WOW({
        mobile:false
    }).init();

    // NAVBAR TRANSPARENT-DARK
    $(window).scroll(function(){
        var $window = $(window),
            logo = $('.navbar .navbar-brand img');

        var win_height = $window.height()/2;
        if($window.scrollTop() >= win_height ) {
            $('.navbar').addClass('navbar-scroll-fixed')
                // .removeClass('navbar-dark')
                // .addClass('bg-light')
                // .addClass('navbar-scroll-fixed')
                // .addClass('navbar-light');
            // logo.attr('src', 'images/logo/logo-dark.png');
        } else {
            $('.navbar').removeClass('navbar-scroll-fixed')
        //         .removeClass('navbar-light')
        //         .addClass('navbar-dark')
        //         .removeClass('bg-light');
        //     logo.attr('src', 'images/logo/logo.png');
        }
    });


    // HOME TYPED JS
    if($('#typed').length) {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            smartBackspace: true,
            loop: true,
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 3000
        });
    }

});
