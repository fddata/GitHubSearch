## GitHub Repository Browser

A simple front end to search GitHub via the search API.

### How to install:

Clone/download the repository.

In the root folder, in the terminal run:

```console
#install webpack
npm i 

#run webpack
npm run build 
```

Then open public/index.html to launch the app.

### Overview

The app provides a simple interface to construct queries to search GitHub repositories via the GitHub Search API.

You can add a a `Search Phrase`, specify a `Language`, `Sort By` either Number of Comments, Date Created or Date Updated either ascending or descending.

A summary of the total number of results is provided as is a list of the first 100 entries, with a description and hyperlinks to the repositories.

