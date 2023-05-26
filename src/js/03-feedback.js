import _ from 'lodash';

const formEl = document.querySelector('form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storageData !== null) {
    emailEl.value = storageData.email;
    messageEl.value = storageData.message;
};

const updateLocalStorage = _.throttle(() => {
    const feedbackFormState = {
        email: emailEl.value,
        message : messageEl.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}, 500);

function onFormElInput () {
    updateLocalStorage ();
};

emailEl.addEventListener('input', onFormElInput);
messageEl.addEventListener('input', onFormElInput);

function onFormElSubmit(event) {
    event.preventDefault();
    localStorage.clear();
    emailEl.value = '';
    messageEl.value = '';
};

formEl.addEventListener('submit', onFormElSubmit);

