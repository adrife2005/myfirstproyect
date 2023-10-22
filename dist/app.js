const form = document.querySelector('form')
const input = document.querySelectorAll('input[type="email"]')



form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }

    form.classList.add('was-validated')
});
