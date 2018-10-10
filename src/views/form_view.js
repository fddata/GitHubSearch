const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const FormView = function(container){
  this.container = container;
};


FormView.prototype.bindEvents = function () {


  this.container.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const search_text =form.search_text.value;
      const language = form.language.value;

      const url = `https://api.github.com/search/repositories?q=${search_text}+language:${language}`;

      const request = new Request(url);
        request.get()
            .then((data) => {
              console.log(data);
              PubSub.publish('FormView:data-ready', data);
              });
    })
}

module.exports = FormView;
