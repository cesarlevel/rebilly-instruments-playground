import './cart.css'
import app from '../app';

let products = app.carts.cart3;

localStorage.clear();
localStorage.setItem('demo-product', JSON.stringify(products));

function renderProducts(items) {
  const tableBody = document.querySelector('table tbody');
  let result = '';

  tableBody.querySelectorAll('table tbody tr:not(.total)').forEach(el => el.remove());

  items.forEach((item, i) => {
    result += `
      <tr class="items" data-index="${i}">
        <td class="text-left">
          <a class="remove">x</a>
          <img src="https://picsum.photos/200"/>
          <span data-plan-id="${item.planId}" class="name">${item.name}</span>
        </td>
        <td class="text-right">${item.price}</td>
        <td class="text-center">
          <input class="text-center" min="1" value="${item.quantity}" type="number"/>
        </td>
        <td class="text-right">${formatCurrency(item.quantity * Number(item.price.replace('$', '')))}</td>
      </tr>
    `;
  });
  tableBody.insertAdjacentHTML('afterbegin', result)
}

function formatCurrency(number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number)
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
      <tr class="total">
        <td></td>
        <td></td>
        <td></td>
        <td class="text-right">Total $50.00</td>
      </tr>
    </tbody>
  </table>
  <div class="cta">
    <a href="./cart-checkout.html">Checkout</a>
  </div>
  <footer>
    <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
  </footer>
`;


function updateTotal() {
  const total = document.querySelector('table tbody tr.total td.text-right');
  const prices = products.map(item => {
    return item.quantity * Number(item.price.replace('$', ''));
  })
  total.innerHTML = `Total ${formatCurrency(prices.reduce((acc, val) => acc + val))}`
}

renderProducts(products);
attachListeners();

function attachListeners() {
  const tableItems = document.querySelectorAll('table tr.items');
  tableItems.forEach(item => {
    item.querySelector('a.remove').addEventListener('click', () => {
      removeItem(item);
    });
    item.querySelector('input').addEventListener('change', () => {
      updateQuantity(item);
    });
  });
}


function removeItem(item) {
  const id = item.querySelector('.name').dataset.planId;
  products = products.filter(product => {
    return product.planId !== id;
  });
  renderProducts(products);
  updateTotal();
  attachListeners();
  localStorage.setItem('demo-product', JSON.stringify(products));
}

function updateQuantity(item) {
  const qty = item.querySelector('input').value;
  const index = item.dataset.index;
  products[index].quantity = qty;
  renderProducts(products);
  updateTotal();
  attachListeners();
  localStorage.setItem('demo-product', JSON.stringify(products));
}
