fetch('http://www.xclusivedesigns.somee.com/api/Producto')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));