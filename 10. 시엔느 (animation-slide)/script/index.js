$('button.next').click(function(){
    $('.hslide-wrap').stop().animate({'left': '-200%'},function(){
        $('.hslide').first().appendTo('.hslide-wrap')
        $('.hslide-wrap').css({'left':'-100%'})
    })
    $('.vslide-wrap').stop().animate({'top': '-200%'},function(){
        $('.vslide').first().appendTo('.vslide-wrap')
        $('.vslide-wrap').css({'top':'-100%'})
    })
    
})
$('button.prev').click(function(){
    $('.hslide-wrap').stop().animate({'left': '-0%'},function(){
        $('.hslide').last().prependTo('.hslide-wrap')
        $('.hslide-wrap').css({'left':'-100%'})
    })
    $('.vslide-wrap').stop().animate({'top': '0%'},function(){
        $('.vslide').last().prependTo('.vslide-wrap')
        $('.vslide-wrap').css({'top':'-100%'})
    })
})

// 탭 메뉴 이벤트
$('.tab-menu li').click(function(){ 
    let tab = $(this).find('img').attr("src");
    let i = $(this).index();
    let idx = $(this).closest('.hslide').index();

    $('.vslide').eq(idx).css({ 'background-image': 'url(' + tab + ')' });
    let tabList = $('.hslide').eq(idx).find('.tab li');
    tabList.hide(); 
    tabList.eq(i).fadeIn();
    $(this).siblings().removeClass('on'); 
    $(this).addClass('on');
});