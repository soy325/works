// 상단 메인 슬라이드
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// 베스트 탭 필터링
var $grid = $('.grid').imagesLoaded(function () {
    $grid.isotope({
        itemSelector: '.grid-item',
        masonry: {
            fitWidth: true,
            gutter: 20
        }
    });
});

$('.mdpick .tit ul li a').click(function () {
    $('.mdpick .tit ul li a').removeClass('on');
    $(this).addClass('on');

    var selector = $(this).data('filter');
    $('.grid').isotope({
        filter: selector
    });
    return false;
});


// 스크롤 Top 버튼
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// rook-book 무한루프 슬라이드
let itemWidth = 0   //각 아이템 크기 값
let dir = -1        //방향
let speed = 1       //흘러가는 속도
let loc = 1         //위치값
let liWidth = 0     //전체 아이템의 너비값

$('.rook-book ul li:not(.etc)').each(function () {
    w = $(this).innerWidth()    //각 아이템의 너비값
    liWidth += w    //각 아이템의 너비값을 하나씩 더해 전체 너비값을 구함
})

function flowBanner() {
    //전체 아이템을 부모 ul의 위치를 움직이게 하기 위해서 위치값 구하기
    loc += speed * dir

    //위치값이 전체 너비보다 크면 맨 앞으로 이동
    if (loc <= -liWidth) {
        loc = 0
    }
    //위치값이 0이면 맨 마지막으로 이동
    else if (loc >= 0) {
        loc = -liWidth
    }

    $('.rook-book ul').css({ 'left': loc })
}
setInterval(flowBanner, 10)

// 호버하면 멈춤, 리브하면 재생
$('.rook-book ul').mouseenter(function () {
    speed = 0
})

$('.rook-book ul').mouseleave(function () {
    speed = 1
})

$('span.next').mouseenter(function () {
    speed = 5
    dir = -1
})

$('span.prev').mouseenter(function () {
    speed = 5
    dir = 1
})
$('span.prev').mouseleave(function () {
    dir = -1
})

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//동영상 불러오기, 구글지도 불러오기
document.getElementById("trigger").addEventListener('click', () => {
    Fancybox.show([{
        src: "https://www.google.com/maps/@51.5039653,-0.1246493,14.12z",
        width: 800,
        height: 600
    },
    ]);
})