import throttle from 'lodash.throttle'

const formData = {};

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
    // console.log('formData', formData);
    // console.log('evt.target.name', evt.target.name);
    // console.log('evt.target.value', evt.target.value);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

updateInput();

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log(evt.target);
    evt.target.reset();
    localStorage.removeItem("feedback-form-state");
    console.log('formData', formData);
}

function updateInput(){
    const saveMess = localStorage.getItem("feedback-form-state");
    const parsedMess = JSON.parse(saveMess);

    if (parsedMess) {
    refs.input.value = parsedMess.email;
    refs.textarea.value = parsedMess.message;     
}
}