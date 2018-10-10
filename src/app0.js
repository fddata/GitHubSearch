const FormView = require('./models/form_view.js');


document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World");




    const form = document.querySelector('#form');
      form.addEventListener('submit', handleFormSubmit);

    });

      const handleFormSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  const search_text =form.search_text.value;
  const language = form.language.value;

  const url = `https://api.github.com/search/repositories?q=${search_text}+language:${language}`;
  console.log(url);

  // const request = new Request(url);
  //   request.get()
  //       .then((data) => {
  //         console.log(data);
  //         // PubSub.publish('Stations:selected-station-data', data);
  //
  //         });

};
