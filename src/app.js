const FormView = require('./views/form_view.js');
const ResultsView = require('./views/results_view.js');


document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World");


    const form = document.querySelector('#form-view');
    const formView = new FormView(form);
      formView.bindEvents();

    const results = document.querySelector('#results-view');
    const resultsView = new ResultsView(results)
    resultsView.bindEvents();


});
