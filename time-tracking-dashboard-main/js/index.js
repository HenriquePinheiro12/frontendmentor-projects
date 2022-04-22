import activities from '../data.json' assert {type: 'json'}
const username = 'HenriquePinheiro12'
const githbubApi = await fetch(`https://api.github.com/users/${username}`)
    .then(async (data) => {
    const json = await data.json()
    return json
})
const profileName = githbubApi.name
const imageUrl = `https://github.com/${username}.png`
const $userImage = document.querySelector('.user-img')
const $userName = document.querySelector('.user-name')
const $modality = document.querySelectorAll('.modality')
$userImage.src = imageUrl
$userName.textContent = profileName

const changeModality = (modality) => {
    document.querySelector('.modality.active') ? 
    document.querySelector('.modality.active').classList.remove('active') : null
    document.querySelector(`[data-modality="${modality}"]`).classList.add('active')


    activities.forEach(val => {
        const regex = new RegExp (' ', 'g')
        const activity = val.title.replace(regex, '-').toLowerCase();
        const $activityBox = 
        document.querySelector(`.${activity}`)
        const $activityHours = 
        $activityBox.querySelector('.activity-hours')
        const $lastWeek =
        $activityBox.querySelector('.last-week')
        
        const {current} = val.timeframes[modality]
        const {previous} = val.timeframes[modality]

        $activityHours.textContent = `${current}hrs`
        $lastWeek.textContent = `Last Week - ${previous}hrs`
    })
}

changeModality('weekly')
$modality.forEach(val => {
    val.addEventListener('click', e => {
        const targetModality = e.target.dataset.modality
        changeModality(targetModality)
    })
})
