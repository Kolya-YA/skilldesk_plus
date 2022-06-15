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

    const loadedBullet = document.createElement('div')
    loadedBullet.classList.add('bullet-block__bullet', 'bullet-block__bullet--loaded')

    for (let i = 0; i < caruselBlocks.length; i++) {
        bulletBlock.appendChild(hollowBullet.cloneNode(true))
    }

    caruselBlocks.forEach((item, idx) => {
        const currentBlock = bulletBlock.cloneNode(true)
        const replaceableBlock = currentBlock.childNodes[idx]
        currentBlock.replaceChild(loadedBullet.cloneNode(true), replaceableBlock)
        item.append(currentBlock)
    });
}

function addArrowBlocks(caruselBlocks) {

}