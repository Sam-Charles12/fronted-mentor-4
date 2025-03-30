const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const radio = document.getElementById('radio');
const message = document.getElementById('message');
const agree = document.getElementById('agree');
const submit = document.getElementById('submit');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.add('error');
}
const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lasttNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const radioValue = radio.value.trim();
    const messageValue = message.value.trim();
    const agreeValue = agree.value.trim();

    if(firstNameValue === ''){
        setError(firstName, 'This field is required')
    }else{
        setSuccess(firstName)
    }
}