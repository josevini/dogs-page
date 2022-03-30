const toggler = document.querySelector('.container-hamburger')

toggler.addEventListener('click', function() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('mobile')

    const icon = document.querySelector('.hamburger')
    switch (icon.innerText) {
        case 'menu':
            icon.innerText = 'close'
            break
        case 'close':
            icon.innerText = 'menu'
            break
        default:
            icon.innerText = 'error'
    }
})