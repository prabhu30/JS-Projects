const username = document.querySelector('.username');
const input = document.querySelector('.username-input');
const btnGreet = document.querySelector('.btn-greet');
const btnClear = document.querySelector('.btn-clear');

const validateUsername = () => {
    if (input.value.trim() !== '' && btnGreet.getAttribute('disabled') !== null) {
        btnGreet.removeAttribute('disabled');
    } else if (input.value.trim() === '') {
        username.innerText = 'Guest';
        btnGreet.setAttribute('disabled', true)
    }
}

const updateUsername = () => {
    username.innerText = input.value[0].toUpperCase() + input.value.slice(1);
}

const clearInput = () => {
    input.value = '';
    validateUsername();
}

input.addEventListener('input', validateUsername);
btnGreet.addEventListener('click', updateUsername);
btnClear.addEventListener('click', clearInput);