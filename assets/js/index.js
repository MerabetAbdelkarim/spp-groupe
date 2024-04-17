const menuButton = document.getElementById('menuButton')
const mobileNavigation = document.getElementById('mobileNavigation')

const searchButton = document.getElementById('searchButton')
const searchModal = document.getElementById('searchModal')
const overlay = document.getElementById('overlay')

menuButton.addEventListener('click', () => {
    mobileNavigation.classList.toggle('hidden')
    mobileNavigation.classList.toggle('block')
})

searchButton.addEventListener('click', () => {
    searchModal.classList.toggle('hidden')
    searchModal.classList.toggle('block')
    document.getElementById('body').style.overflow = 'hidden'
})

overlay.addEventListener('click', () => {
    searchModal.classList.toggle('block')
    searchModal.classList.add('hidden')
    document.getElementById('body').style.overflow = 'auto'
})