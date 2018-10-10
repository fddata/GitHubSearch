const FormView = require('./views/form_view.js');


document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World");


    const form = document.querySelector('#form-container');
    const formView = new FormView(form);
      formView.bindEvents();




});
