//Selecting Side navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//searchBar

  document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(function (product) {
      const title = product.querySelector('h1').textContent.toLowerCase();
      if (title.includes(searchValue)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
