

// 메뉴를 클릭하면 에니메이션 되면서 해당번째로 이동
const listElems = document.querySelectorAll('.scroll ul li')
const sections = document.querySelectorAll('section')


listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#sect"]')

    link.addEventListener('click', function (e) {
        e.preventDefault()

        // 마우스를 클릭하면 해당페이지로 이동
        listElems.forEach((li) => {
            li.classList.remove('on')
            this.parentElement.classList.add('on')
        });

        const href = this.getAttribute('href')
        const sectop = document.querySelector(href)

        window.scrollTo({
            top: sectop.offsetTop,
            behavior: 'smooth'
        })

    })
})

// wheel controll
sections.forEach((sect, i) => {

    sect.addEventListener('wheel', function (e) {
        e.preventDefault()

        let delta = e.deltaY
        // wheel을 내리면 +값이 발생하고 올리면 -값이 값이 발생되도록
        if (delta < 0 && i === 0) {
            // 해당 조건이면 명령 loop를 빠져나가라
            return
            // 배열에 index는 [0,1,2,3,4]이고ㅓ 갯수는 5개이기 때문에 -1로 숫자를 맞추어 주어야함.
        } else if (delta > 0 && i === sections.length - 1) {
            return
        }

        // 3항 연산자 : 조건식? 참:거짓
        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({ top: targetSecTop, behavior: 'smooth' })

        }
    })
})

// 해당 페이지 'on'
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    sections.forEach((section, i) => {
        let sectionTop = section.offsetTop
        if (scrollTop >= sectionTop - 100) {

            for (const li of listElems) { li.classList.remove('on') }
            for (const sec of sections) { sec.classList.remove('on') }

            listElems[i].classList.add('on')
            sections[i].classList.add('on')
        }
    })

})

