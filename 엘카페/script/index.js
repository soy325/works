setInterval(function () {
    $('.slide-wrap').animate({ 'margin-left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'margin-left': '0%' })
    })
}, 4000)

$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
})

// $('.event figure').mouseenter(function () {
//     $('.bg').fadeOut()
// })
// $('.event figure').mouseleave(function () {
//     $(this).find('.bg').fadeOut()
// })