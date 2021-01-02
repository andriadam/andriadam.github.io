$('.page-scroll').on('click', function () {

    //ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap elemen
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

//parallax

//about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});



//jumbotron
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.25 + '%)'
    });

    //portofolio
    if (wScroll > $('.portofolio').offset().top - 300) {
        $('.portofolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portofolio .img-thumbnail').eq(i).addClass('muncul');
            }, 100 * (i + 1));
        });

    };

    //contact
    if (wScroll > $('.contact').offset().top - 300) {
        $('.contact .form-group,.contact .form-control').each(function (i) {
            setTimeout(function () {
                $('.contact .form-group,.contact .form-control').eq(i).addClass('gmuncul');
            }, 50 * i);
        });
    };


});