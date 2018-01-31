$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    // star
    /*var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };

    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();*/
    // owl-carousel=====
    var owl = $("#owl-best-farmers");
    owl.owlCarousel({
    	itemsCustom : [
	        [320,1],
	        [360, 1],
	        [375, 1],
	        [414, 1],
	        [568, 1],
	        [600, 1],
	        [900,1],
	        [1024, 3],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });
    // ===
    var owl1 = $("#owl-country1");
    owl1.owlCarousel({
    	itemsCustom : [
	        [320,1],
            [360, 1],
            [375, 1],
            [414, 1],
            [568, 1],
            [600, 1],
            [900,1],
	        [1024, 3],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });
    // ===
    var owl2 = $("#owl-country2");
    owl2.owlCarousel({
    	itemsCustom : [
	        [320,1],
            [360, 1],
            [375, 1],
            [414, 1],
            [568, 1],
            [600, 1],
            [900,1],
	        [1024, 3],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });
    // ===
    var owl3 = $("#owl-country3");
    owl3.owlCarousel({
    	itemsCustom : [
	        [320,1],
            [360, 1],
            [375, 1],
            [414, 1],
            [568, 1],
            [600, 1],
            [900,1],
	        [1024, 3],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });
    // ===
    var owl4 = $("#owl-country4");
    owl4.owlCarousel({
    	itemsCustom : [
	        [320,1],
            [360, 1],
            [375, 1],
            [414, 1],
            [568, 1],
            [600, 1],
            [900,1],
	        [1024, 3],
	      ],
        navigation: true,

        navigationText: ["◀ Left <strong>arrow</strong>", "Right <strong>arrow</strong> ▶"]
    });

    $(function() {
        $('nav#menu').mmenu();
    });
});