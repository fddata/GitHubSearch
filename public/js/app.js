document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World");

    const form = document.querySelector('#query-form');
      form.addEventListener('submit', handleFormSubmit);

    });

      const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log("submitted");
};
