const products = [
  {
    name: "Black Oversized Tee",
    price: 25,
    image: "https://via.placeholder.com/300x300?text=Black+Tee",
  },
  {
    name: "Beige Cargo Pants",
    price: 40,
    image: "https://via.placeholder.com/300x300?text=Cargo+Pants",
  },
  {
    name: "Clean Hoodie",
    price: 50,
    image: "https://via.placeholder.com/300x300?text=Hoodie",
  },
];

const productsEl = document.getElementById('products');

if (productsEl) {
  products.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productsEl.appendChild(div);
  });
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(products[index]);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Added to cart!");
}
