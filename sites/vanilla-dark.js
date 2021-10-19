import './vanilla-dark.css';
import RebillyInstruments from '@rebilly/instruments';
import app from "../app";

document.querySelector('#app').innerHTML = `
  <div class="form-wrapper">
    <section class="rebilly-instruments-summary"></section>
    <section class="rebilly-instruments"></section>
    <footer>
      <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
    </footer>
  </div>
`;

RebillyInstruments.initialize({
  ...app.initOptions,
  theme: {
    color: {
      background: '#212f3d',
      text: '#fff',
      primary: '#80a2ea'
    }
  }
});

RebillyInstruments.mount({
  options: {
    intent: {
      items: app.carts.cart2,
    },
    paymentInstruments: {
      googlePay: {
        displayOptions: {
          buttonColor: "white",
        },
      },
    }
  },
});
