const iemail = document.querySelector('#input-email');
const btn = document.querySelector('#btn');

function klassed() {
    iemail.classList.add('classed');
}

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
iemail.addEventListener('click', klassed)

iemail.addEventListener('input', (e) => {
    if (isEmailValid(e.target.value)) {
        btn.classList.add('validate');
    }
    else {
        btn.classList.remove('validate')
    }
})
