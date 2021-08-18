import './vanilla.css';
import RebillyInstruments from '@rebilly/instruments';


document.querySelector('#app').innerHTML = `
  <div class="form-wrapper">
    <section class="rebilly-summary"></section>
    <section class="rebilly-form"></section>
    <footer>
      <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
    </footer>
  </div>
`;

RebillyInstruments.initialize({
  publishableKey: import.meta.env.VITE_P_KEY,
  organizationId: import.meta.env.VITE_ORG_ID,
  websiteId: "my-awesome-website",
  apiMode: "sandbox",
});

RebillyInstruments.mount({
  form: ".rebilly-form",
  summary: ".rebilly-summary",
  options: {
    intent: {
      items: [
        {
          planId: "my-awesome-product",
          quantity: 1,
        },
        {
          planId: "awesome-t-shirt",
          quantity: 2,
        }
      ],
    },
    paymentInstruments: {
      googlePay: {
        merchantConfig: {
          merchantName: "merchant_name", 
          merchantOrigin: "merchant_origin"
        }
      },
    }
  },
});
