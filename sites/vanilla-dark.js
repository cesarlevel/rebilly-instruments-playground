import './vanilla-dark.css';
import RebillyInstruments from '@rebilly/instruments';
import app from "../app";

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
  ...app.initOptions,
  theme: {
    color: {
      background: '#212f3d',
      text: '#fff',
      primary: '#80a2ea'
    }
  },
  css: `
    .rebilly-instruments-loader {
      border-radius: 6px;
    }
    .rebilly-instruments-input-field input,
    .rebilly-instruments-select-field select {
      color: #ffffff;
    }
    .rebilly-instruments-framepay-wrapper .rebilly-framepay {
      background: transparent;
      color: '#ffffff'
    }
    .rebilly-instruments-form-fields {
      margin-bottom: 0;
    }

    .rebilly-instruments-summary-line-item,
    .rebilly-instruments-summary-breakdown-total,
    .rebilly-instruments-form-express.compact,
    .rebilly-instruments-input-field input,
    .rebilly-instruments-select-field select,
    .rebilly-instruments-summary-line-item-figure,
    .rebilly-instruments-framepay-wrapper .rebilly-framepay {
      border-color: #7a828b;
    }
    
    .rebilly-instruments-divider::before {
      background: #7a828b;
    }

    .rebilly-instruments-form-express.compact > * {
      background: linear-gradient(110deg, #374450 0%, #646d77 25%, #374450 50%)
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  `,
});

RebillyInstruments.mount({
  form: ".rebilly-form",
  summary: ".rebilly-summary",
  options: {
    intent: {
      items: app.carts.cart2,
    },
    paymentInstruments: {
      googlePay: {
        ...app.paymentInstruments.googlePay,
        displayOptions: {
          buttonColor: "white",
        },
      },
    }
  },
});
