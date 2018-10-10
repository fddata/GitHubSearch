const PubSub = require('../helpers/pub_sub.js');


const ResultsView = function(container){
  this.container = container;
};

ResultsView.prototype.bindEvents = function () {

  PubSub.subscribe('FormView:data-ready', (event) => {
    const results = event.detail;

      console.log("total count is:" + results.total_count);

      this.render(results);
    });
};

ResultsView.prototype.render = function (results) {
  const header = this.createHeader(results);
   this.container.appendChild(header);

   const table = this.createTable(results);



};

ResultsView.prototype.createHeader = function(results){
  const header = document.createElement('header');
  const h2 = document.createElement('h2');
  h2.textContent = `Total Number of results: ${results.total_count}`;
  header.appendChild(h2);
  return header;
};

ResultsView.prototype.createTable = function (results) {
  
};



module.exports = ResultsView;
