import './compact.css';
import pcImage from './pc-image.png'
import app from '../app';
import RebillyInstruments from '@rebilly/instruments';


document.querySelector('#app').innerHTML = `
  <header>
    <img src="https://picsum.photos/200"/>
    <p>My Awesome e-Learning Website</p>
  </header>
  <div class="hero">
    <div>
      <h1>Learn anything!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
    </div>
    <img width="100" src="${pcImage}"/>
  </div>
  <div class="wrapper">
    <section>
      <div>
        <h2>Be better!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
      </div>
      <img width="100px" src="${pcImage}"/>
    </section>
    <section>
      <div>
        <h2>Make it happen!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
      </div>
      <img width="100px" src="${pcImage}"/>
    </section>
  </div>
  <div class="form-wrapper">
    <h1>Start learning now for just $30.00!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
    <section class="rebilly-form"></section>
  </div>
  <footer>
      <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
  </footer>
`;

RebillyInstruments.initialize({
    ...app.initOptions,
  theme: {
    color: {
      primary: '#2c3e50',
      background: '#f8fbfd',
    }
  },
  css: `
    .rebilly-instruments-divider {
      padding: 12px 0;
    }

    .rebilly-instruments-form-express > * {
      margin: 4px 0;
      min-height: 44px;
      background: linear-gradient(110deg , #e7eaec 0%, #ffffff 25%, #e7eaec 50%);
      border-radius: 6px;
      background-size: 200% 100%;
      animation: 1.5s rebillyExpressShine linear infinite;
    }
  `
});

RebillyInstruments.mount({
  form: ".rebilly-form",
  options: {
      intent: {
        items: app.carts.cart1,
      },
      paymentInstruments: {
          compactExpressInstruments: false,
          googlePay: app.paymentInstruments.googlePay,
          paymentCard: {
            popup: true
          }
      },
      features: {
        autoResult: false
      }
  },
});

RebillyInstruments.on('purchase-complete', (purchase) => {
  const {
    billingAddress: {
      firstName = '',
      lastName = '',
    } = {}
  } = purchase?.invoice || {};
  const rbForm = document.querySelector('.rebilly-form');
  const content = `
    <h2>Thanks ${firstName} ${lastName} for joining your education journey with us!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
  `;
  rbForm.innerHTML = content;
});
