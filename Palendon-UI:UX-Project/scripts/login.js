const Lform = document.getElementById('Lform');
const username = document.getElementById('username');
const password = document.getElementById('password');

const setSuccess = elem => {
    const info = elem.parentElement;
    const errorMes = info.querySelector('.error');

    errorMes.innerText = '';
    info.classList.add('success');
    info.classList.remove('error');
};

const setError = (elem, mes) => {
    const info = elem.parentElement;
    const errorMes = info.querySelector('.error');

    errorMes.innerText = mes;
    info.classList.add('error');
    info.classList.remove('success')
}

Lform.addEventListener('submit', x => {
    x.preventDefault();
    checkInput();
});

const checkInput = () => {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    let isFormValid = true;

    if (usernameVal === '') {
        setError(username, 'Username is required');
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
        isFormValid = false;
    } else if (passwordVal.length < 6) {
        setError(password, 'Password must be at least 6 characters.')
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    if (isFormValid) {
        window.location.href = 'index.html';
    }
};