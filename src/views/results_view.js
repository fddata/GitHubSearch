const PubSub = require('../helpers/pub_sub.js');


const ResultsView = function(container){
  this.container = container;
};

ResultsView.prototype.bindEvents = function () {

  PubSub.subscribe('FormView:data-ready', (event) => {
    const results = event.detail;
    this.render(results);
    });
};

ResultsView.prototype.render = function (results) {
  this.container.innerHTML="";
  const header = this.createHeader(results);
  this.container.appendChild(header);
  const resultsTable = this.populateTable(results);
  this.container.appendChild(resultsTable);
};



ResultsView.prototype.createHeader = function(results){
  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.textContent = `Total Number of results: ${results.total_count}`;
  header.appendChild(h3);
  return header;
};


ResultsView.prototype.populateTable = function (results) {
  const resultsTable = document.createElement("table");
  resultsTable.setAttribute("id", "results-table");
  resultsTable.setAttribute("class", "table");
  resultsTable.innerHTML='<table><tr><th>Result Number</th><th>Repository URL</th><th>Description</th></tr></table>';
  for(var i = 0; i < results.items.length; i++) {
    var row = resultsTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = i+1;
    cell2.innerHTML = `<a href="${results.items[i].html_url}">${results.items[i].html_url}</a>`;
    cell3.innerHTML = `${results.items[i].description}`;
  }
  return resultsTable;
};


module.exports = ResultsView;
