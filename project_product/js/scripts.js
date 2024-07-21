/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/

// 메인 -> 상세 페이지 연결하기
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id'); 

  if (productId) {
      fetch(`http://localhost:3000/api/products/${productId}`)
          .then(response => response.json())
          .then(data => {
            document.getElementById('product-tags').textContent = data.tags;  
            document.getElementById('product-name').textContent = data.name;

              const interparkButton = document.getElementById('interpark');
              if (data.interpark) {
                  interparkButton.href = data.interpark;
              } else {
                  interparkButton.addEventListener('click', function(event) {
                      event.preventDefault();
                      alert('해당 예매처의 링크가 없습니다.');
                  });
              }

              const yes24Button = document.getElementById('yes24');
              if (data.yes24) {
                  yes24Button.href = data.yes24;
              } else {
                  yes24Button.addEventListener('click', function(event) {
                      event.preventDefault();
                      alert('해당 예매처의 링크가 없습니다.');
                  });
              }
              const productImage = data.image;
              const imgElement = document.getElementById("poster-img");
              imgElement.src = productImage;
          })
          .catch(error => {
              console.error('Error fetching product details:', error);
              document.getElementById('product-name').textContent = 'Error loading product details';
          })

      fetch(`http://localhost:3000/api/productDetails/${productId}`) 
          .then(response => response.json())
          .then(data => {
            const descriptionElement = document.getElementById('product-description');
            const descriptions = data.description.split(', ');
            descriptionElement.innerHTML = descriptions.map(item => {
                const [label, value] = item.split(': ');
                return `<div class="description-item">
                            <div class="description-label">${label}</div>
                            <div class="description-value">${value}</div>
                        </div>`;
            }).join('');
          });
          
  } else {
      document.getElementById('product-name').textContent = 'No product selected';
  }

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