const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const radio = document.getElementById('radio');
const message = document.getElementById('message');
const agree = document.getElementById('agree');
const submit = document.getElementById('submit');


const firstname_error = document.getElementById('firstname_error');
const lastname_error = document.getElementById('lastname_error');
const email_error = document.getElementById('email_error');
const query_error = document.getElementById('query_error');
const message_error = document.getElementById('message_error');
const agree_error = document.getElementById('agree_error');




form.addEventListener('submit', (e)=> {
    let email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(firstName.value === '' || firstName.value == null){
        e.preventDefault();
        firstname_error.innerHTML = "This field is required";
        firstName.style.borderColor = 'red';
    }
    else{
        firstname_error.innerHTML = "";
        firstName.style.borderColor = 'hsl(169, 82%, 27%)';
    }
    if(lastName.value === '' || lastName.value == null){
        e.preventDefault();
        lastname_error.innerHTML = "This field is required";
        lastName.style.borderColor = 'red';
    }
    else{
        lastname_error.innerHTML = "";
        lastName.style.borderColor = 'hsl(169, 82%, 27%)';
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Please enter a valid email address";
        email.style.borderColor = 'red';
    }
    else{
        email_error.innerHTML = "";
        email.style.borderColor = 'hsl(169, 82%, 27%)';
    }
    if(radio.checked){
        e.preventDefault()
        query_error.innerHTML = "Please select a query type";
    }
    else{
        query_error.innerHTML = "";
    }
    if(message.value === '' || message.value == null){
        e.preventDefault()
        message_error.innerHTML = "This field is required";
        message.style.borderColor = 'red';
    }
    else{
        message_error.innerHTML = "";
        message.style.borderColor = 'hsl(169, 82%, 27%)';
    }
    if(!agree.checked){
        e.preventDefault()
        agree_error.innerHTML = "To submit this form, please consent to being contacted";
        agree.style.borderColor = 'red';
    }
    else{
        agree_error.innerHTML = "";
        
    }
})
