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
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const projectId = urlParams.get('id');

            const data = allProjects.find(a=>a.id==projectId)
            if(!data) return;
            document.getElementById('project-name').innerText = data.name
            document.getElementById('project-image').innerHTML = `
                <a href="${data?.url}"  target="_blank" rel="noreferrer">
                    <img src="images/portfolio/${data.gifUrl}" alt=""/>
                </a>
            `
            document.getElementById('project-description').innerHTML = data.description
            document.getElementById('project-url').innerHTML = `
                <a href="${data.url}" target="_blank" rel="noreferrer">
                    ${data.url}
                </a>
            `

            let technologies = ``;
            function populateTechData(row, seperator){
                technologies += `
                    <span>
                        ${row}${seperator}
                    </span>
                `
            }
            for(const item of data.technologiesUsed){
                const separator = item === data.technologiesUsed[data.technologiesUsed.length-1] ? '.' : ','
                populateTechData(item, separator)
            }
            document.getElementById('project-technologies').innerHTML = technologies
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
