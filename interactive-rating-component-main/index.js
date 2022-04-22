const $ratingContainer = document.querySelector('.rating')
const $thankContainer = document.querySelector('.thank')

const $ratingLabels = document.querySelectorAll('label')
const $submit = document.querySelector('.submit')

console.log($thankContainer)

const $rateDisplay = document.querySelector('.target-rate-display')

$ratingLabels.forEach(lbl => {
    lbl.addEventListener('click', () => {
        $ratingLabels.forEach(val => val.classList.remove('active'))
        lbl.classList.add('active')
    })
})

const handleSubmit = () => {
    const $targetRate = Array.from(document.querySelectorAll('input[type="radio"]')).find(el => el.checked)

    if(!$targetRate) return alert('Please select a rating')

    $ratingContainer.classList.add('hidden')
    $thankContainer.classList.remove('hidden')

    $rateDisplay.innerText = $targetRate.value
}

$submit.addEventListener('click', handleSubmit)