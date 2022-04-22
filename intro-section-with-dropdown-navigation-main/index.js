const $openMenuBtn = document.querySelector('.open-menu-btn')
const $closeMenuBtn = document.querySelector('.close-menu-btn')
const $menuOptions = document.querySelectorAll('.option-head')
const $overlay = document.querySelector('.overlay')


$menuOptions.forEach(op => {
    op.addEventListener('click', ({target}) => {
        const targetId = target.closest('.option').dataset.target
        
        toggleActive(targetId)
    })
})


$overlay.addEventListener('click', () => toggleActive('mobile-menu','overlay'))
$openMenuBtn.addEventListener('click', () => toggleActive('mobile-menu', 'overlay'))
$closeMenuBtn.addEventListener('click', () => toggleActive('mobile-menu', 'overlay'))


function fazerAlgumaCoisa(coisaPraFazer){
    coisaPraFazer()
}

const toggleActive = (...ids) => {
    ids.forEach(id => {
        const element = document.querySelector(`#${id}`)
        element.classList.toggle('active')
    })
}