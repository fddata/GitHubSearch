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

   // console.log("items length: " + results.items.length);
const resultsTable = this.populateTable(results);
this.container.appendChild(resultsTable);

};

ResultsView.prototype.createHeader = function(results){
  const header = document.createElement('header');
  const h2 = document.createElement('h2');
  h2.textContent = `Total Number of results: ${results.total_count}`;

  header.appendChild(h2);
  return header;
};


ResultsView.prototype.populateTable = function (results) {

  const resultsTable = document.createElement("table");
  resultsTable.setAttribute("id", "results-table");
  resultsTable.innerHTML="<table><tr><th>Result Number</th><th>Repository URL</th><th>Description</th></tr></table>";
  for(var i = 0; i < results.items.length; i++) {
    var row = resultsTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = i+1;
    cell2.innerHTML = `<a href="${results.items[i].html_url}">${results.items[i].html_url}</a>`;
    cell3.innerHTML = `${results.items[i].description}`;
    // cell2.innerHTML =  results.items[i].owner.html_url;
  }

console.log(resultsTable);
return resultsTable;
//
//
//   var tableHeader = "<table><tr><th>Entry Number</th><th>Repo URL</th></tr>";
//   var tableContent = "";
//
//   for(var i = 0; i < 29; i++) {
//     console.log(results.items[i].owner.html_url);
//     tableContent = tableContent + "<tr><td>" + results.items[i].owner.html_url + "</td><td>" + "some other field" + "</tr>";
//   }
//
//   var tableFooter = "</table>";
// document.getElementById("results-table").innerHTML = tableHeader + tableContent + tableFooter;

};



module.exports = ResultsView;
