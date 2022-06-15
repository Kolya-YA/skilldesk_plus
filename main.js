const navToggler = () => {
    const openBtn = document.querySelector('.header__open-nav-btn')
    const closeBtn = document.querySelector('.nav__close-btn')
    const sideNav = document.querySelector('.nav')
    
    openBtn.addEventListener('click', () => {
        console.log('OpenBtn')
        sideNav.style.display = 'block'
    })
    
    closeBtn.addEventListener('click', () => {
        console.log('CloseBtn')
        sideNav.style.display = 'none'
    })
}

const mainCarusel = () => {
    const caruselBlocks = document.querySelectorAll('.main-carusel__item')
    // const caruselBlocks = document.querySelectorAll('.main-carusel__item')
    if (caruselBlocks.length > 1) {
        addBulletBlock(caruselBlocks)
        addArrowButtons(caruselBlocks)

        let curItem = 0

    }
}

navToggler()
mainCarusel()

function addBulletBlock(caruselBlocks) {
    const bulletBlock = document.createElement('div')
    bulletBlock.classList.add('bullet-block')

    const hollowBullet = document.createElement('div')
    hollowBullet.classList.add('bullet-block__bullet')

    for (let i = 0; i < caruselBlocks.length; i++) {
        let currentBullet = hollowBullet.cloneNode(true)
        currentBullet.setAttribute('data-bullet-no', i)
        console.log(currentBullet)
        bulletBlock.appendChild(currentBullet)
    }

    caruselBlocks.forEach((item, idx) => {
        const currentBlock = bulletBlock.cloneNode(true)
        currentBlock.childNodes[idx].classList.add('bullet-block__bullet--loaded')
        item.append(currentBlock)
    });
}

function addArrowButtons(caruselBlocks) {
    const arrowBtn = document.createElement('div')
    arrowBtn.classList.add('arrow-btn')
    
    const arrowBtnArrow = document.createElement('div')
    arrowBtnArrow.classList.add('arrow-btn__arrow')

    arrowBtn.appendChild(arrowBtnArrow)

    caruselBlocks.forEach((item, idx) => {
        const prevIdx = idx === 0 ? caruselBlocks.length - 1 : idx - 1
        const nextIdx = idx === caruselBlocks.length - 1 ? 0 : idx + 1
        const prewArrow = arrowBtn.cloneNode(arrowBtn)
        prewArrow.setAttribute('data-target-item', prevIdx)
        
        const nextArrow = arrowBtn.cloneNode(arrowBtn)
        nextArrow.setAttribute('data-taget-item', nextIdx)
        nextArrow.classList.add('arrow-btn--next')
        item.append(prewArrow, nextArrow)
    })

}