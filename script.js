document.querySelectorAll('.btn-switch-theme').forEach(button => {
    button.addEventListener('click', () => document.body.classList.toggle('dark-theme'))
})

document.querySelectorAll('.btn-search').forEach(button => {
    button.addEventListener('click', () => button.parentNode.classList.add('search-active'))
})

document.querySelectorAll('.btn-back').forEach(button => {
    button.addEventListener('click', () => button.parentNode.classList.remove('search-active'))
})