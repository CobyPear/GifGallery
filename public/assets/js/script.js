const INPUT_VALUE = document.getElementById('codeInput')
const SUBMIT_BUTTON = document.getElementById('submitBtn')

SUBMIT_BUTTON.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(INPUT_VALUE.value)
})