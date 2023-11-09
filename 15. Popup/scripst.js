const submitBtn = document.getElementById('submit')
const btnclose = document.getElementById('close')
const muncul = document.querySelector('.popup')

submitBtn.addEventListener('click', function() {
    muncul.classList.add('popupActive')
})

btnclose.addEventListener('click', function() {
    muncul.classList.remove('popupActive')
})