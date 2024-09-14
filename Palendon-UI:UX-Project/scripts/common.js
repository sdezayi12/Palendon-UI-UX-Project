const showNav = (togId, navId) => {
    const tog = document.getElementById(togId),
        nav = document.getElementById(navId)

    tog.addEventListener('click', () => {
        nav.classList.toggle('show-nav')
        tog.classList.toggle('show-tog')
    })
}
showNav('nav-toggle', 'nav-options')