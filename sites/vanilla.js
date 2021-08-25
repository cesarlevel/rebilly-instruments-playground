import './vanilla.css';
import RebillyInstruments from '@rebilly/instruments';
import app from '../app';

document.querySelector('#app').innerHTML = `
  <div class="form-wrapper">
    <section class="rebilly-instruments-summary"></section>
    <section class="rebilly-instruments"></section>
    <footer>
      <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
    </footer>
  </div>
`;

RebillyInstruments.initialize(app.initOptions);

RebillyInstruments.mount({
  options: {
    intent: {
      items: app.carts.cart2,
    },
    paymentInstruments: {
      googlePay: app.paymentInstruments.googlePay,
    }
  },
});
