$('.btn1').click(function () {
    $('#sect1').show()
    lineShow()
    mainHide()
})
$('.btn1close').click(function () {
    lineHide()
    mainShow()
    $('#sect1').hide()
})

$('.btn2').click(function () {
    $('#sect2').show()
    $('#sect2').animate({ 'height': '400px' })
    mainHide()
})
$('.btn2close').click(function () {
    lineHide()
    $('#sect2').animate({ 'height': '0' }, function () {
        $('#sect2').hide()
        mainShow()
    })

})

function lineShow() {
    $('.top').animate({ 'width': '100%' }, function () {
        $('.right').animate({ 'height': '100%' }, function () {
            $('.bottom').animate({ 'width': '100%' }, function () {
                $('.left').animate({ 'height': '100%' }, function () {
                    $('.sect1-contants').fadeIn()
                })
            })
        })
    })
}


function lineHide() {
    $('.top').animate({ 'width': '0' }, 500)
    $('.right').animate({ 'height': '0' }, 500)
    $('.bottom').animate({ 'width': '0' }, 500)
    $('.left').animate({ 'height': '0' }, 500)
    $('.sect1-contants').delay(500).fadeOut()
}

function mainHide() {
    $('.main-container').animate({ 'top': '2000px' })
    $('.flower-left').animate({ 'top': '-1000px' })
    $('.flower-right').animate({ 'top': '-1000px' })
}
function mainShow() {
    $('.main-container').animate({ 'top': '250px' }, (2000))
    $('.flower-left').animate({ 'top': '100px' })
    $('.flower-right').animate({ 'top': '100px' })
}

