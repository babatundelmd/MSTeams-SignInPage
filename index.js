const iemail = document.querySelector('#input-email');
const btn = document.querySelector('#btn');

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

iemail.addEventListener('click', () => {
    iemail.classList.add('classed');
})

iemail.addEventListener('input', (e) => {
    if (isEmailValid(e.target.value)) {
        btn.classList.add('validate');
    }
    else {
        btn.classList.remove('validate')
    }
})
