/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

document.addEventListener('DOMContentLoaded', function() {
  const detailButtons = document.querySelectorAll('.view-detail');
  detailButtons.forEach((button, index) => {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = '../project_product/index.html?id=' + (index + 1);
      });
  });
});

// Add event listener to the page title
document.getElementById('main-title').addEventListener('click', function() {
  // Navigate to the main page
  window.location.href = '../project_main/index.html';
});

// Add event listener to "Home" button
document.getElementById('home-btn').addEventListener('click', function() {
  // Navigate to the main page
  window.location.href = '../project_main/index.html';
});

// Add event listener to "About" button
document.getElementById('about-btn').addEventListener('click', function() {
  // Navigate to the about page
  window.location.href = '../project_about/index.html';
});
