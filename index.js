const iemail = document.querySelector('#input-email');

function klassed() {
    console.log('works')
    iemail.classList.add('classed');
}

iemail.addEventListener('click', klassed)