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
    typography: {
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif"
    },
    color: {
      primary: '#2c3e50',
      background: '#f8fbfd',
    }
  }
});

RebillyInstruments.mount({
  form: ".rebilly-form",
  options: {
      intent: {
        items: app.carts.cart1,
      },
      paymentInstruments: {
          compactExpressInstruments: false,
          paymentCard: {
            popup: true
          }
      },
      features: {
        autoResult: false
      }
  },
});

RebillyInstruments.on('purchase-completed', (purchase) => {
  const {
    billingAddress: {
      firstName = '',
      lastName = '',
    } = {}
  } = purchase?.invoice || {};
  const rbForm = document.querySelector('.rebilly-form');
  const content = `
    <h2>Thanks ${firstName} ${lastName} for starting your education journey with us!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium metus. Nam luctus nibh a diam porta egestas. Donec eget leo et est convallis consectetur eu a mauris.</p>
  `;
  rbForm.innerHTML = content;
});
