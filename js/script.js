const toggler = document.querySelector('.container-hamburger')

toggler.addEventListener('click', function() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('mobile')

    const icon = document.querySelector('.hamburger')
    icon.classList.toggle('cancel')
})