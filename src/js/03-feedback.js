import throttle from 'lodash.throttle'

let formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
// console.log('formData', formData);

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
} 
// console.log(refs);

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

updateInput();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem("feedback-form-state");
    console.log('formData', formData);
}

function updateInput(){
    const parsedMess = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    // console.log('parsedMess', parsedMess);
    // console.log('parsedMess.message', parsedMess.message);
    // console.log('parsedMess.email', parsedMess.email);
    
    if (parsedMess.email || parsedMess.message) {
    refs.input.value = parsedMess.email;
    refs.textarea.value = parsedMess.message; 
}  
else if (parsedMess.message == "undefined" || parsedMess.message == "null") {
        refs.textarea.value = "";
        } 
else if (parsedMess.email == "undefined" || parsedMess.email == "null") {
        refs.input.value = "";
        }
};
