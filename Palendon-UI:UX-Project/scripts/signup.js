const Sform = document.getElementById('Sform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

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

Sform.addEventListener('submit', x => {
    x.preventDefault();
    checkInput();
});

const emailCheck = email => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

const checkInput = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const passwordCheckVal = passwordCheck.value.trim();
    let isFormValid = true;

    if (usernameVal === '') {
        setError(username, 'Username is required');
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isFormValid = false;
    } else if (!emailCheck(emailVal)) {
        setError(email, 'Enter valid email address');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
        isFormValid = false;
    } else if (passwordVal.length < 6) {
        setError(password, 'Password must be at least 6 characters')
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    if (passwordCheckVal === '') {
        setError(passwordCheck, 'Re-enter your password');
        isFormValid = false;
    } else if (passwordCheckVal !== passwordVal) {
        setError(passwordCheck, "Password doesn't match");
        isFormValid = false;
    } else {
        setSuccess(passwordCheck);
    }

    if (isFormValid) {
        window.location.href = 'login.html';
    }
};