const form = document.getElementById('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// show error 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessage = formControl.querySelector('small');
    errorMessage.innerText = message
}

// show success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check required inputs
function checkRequired(inputArr){
    inputArr.forEach( input =>{
        if(input.value.trim() === ''){
            showError(input, `${getFormInput(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

// get formated form input
function getFormInput(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,  `${getFormInput(input)} should not be less than ${min}`);
    }else if(input.value.length > max){
        showError(input,  `${getFormInput(input)} sould not be more than ${max}`);
    }
}

// check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password does not match')
    }
}

// add event listner to the inputs
form.addEventListener('submit', e =>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 20);

    checkPasswordMatch(password, password2);
});
