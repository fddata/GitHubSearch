const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const FormView = function(container){
  // this.element = element;
  // this.lat =[];
  // this.long = [];
  // this.country = "";
};


FormView.prototype.bindEvents = function () {


  this.element.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
    })
}
