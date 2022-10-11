const nav = document.querySelector('#navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        nav.classList.add('navbar-scroll', 'shadow')
        nav.classList.remove('bg-transparent')
    } else {
        nav.classList.remove('navbar-scroll', 'shadow')
    }
})