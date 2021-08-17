import './cart.css'

const products = [
  {
    planId: "my-awesome-product",
    quantity: 1,
    thumbnail: "https://picsum.photos/200"
  },
  {
    planId: "awesome-t-shirt",
    quantity: 1,
    thumbnail: "https://picsum.photos/200"
  }
];

localStorage.clear();
localStorage.setItem('demo-product', JSON.stringify(products));

function renderProducts(items) {
  let result = '';
  items.forEach(item => {
    result += `
      <tr>
        <td class="text-left">
          <a>x</a>
          <img src="https://picsum.photos/200"/>
          <span class="name">${item.planId}</span>
        </td>
        <td class="text-right">$24.99</td>
        <td class="text-center">
          <input class="text-center" value="${item.quantity}" type="number"/>
        </td>
        <td class="text-right">$24.99</td>
      </tr>
    `;
  });
  tableBody.insertAdjacentHTML('afterbegin', result)
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="https://picsum.photos/200"/>
    <p>My Awesome Website</p>
  </header>
  <h1>🛒 Cart</h1>
  <table>
    <thead>
      <tr>
        <td class="text-left">Product</td>
        <td class="text-right">Price</td>
        <td class="text-center">Quantity</td>
        <td class="text-right">Total</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="text-right">Total $300</td>
      </tr>
    </tbody>
  </table>
  <a href="./cart-checkout.html">Go to Checkout</a>
`;

const tableBody = document.querySelector('table tbody');

renderProducts(products)
