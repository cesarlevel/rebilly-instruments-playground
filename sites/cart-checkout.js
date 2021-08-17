import './cart-checkout.css'
import RebillyInstruments from '@rebilly/instruments';

document.querySelector('#app').innerHTML = `
  <section id="form">
    <div class="form-wrapper">
        <h1>My Store</h1>
        <div class="breadcrumb">
            <small>Cart</small>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10">
                <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
            </svg>
            <small class="active">Payment</small>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10">
                <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
            </svg>
            <small>Confirm (Non clickable)</small>
        </div>
        <div class="rebilly-form"><div>
    </div>
  </section>
  <section id="summary">
    <div class="rebilly-summary"><div>
  </section>
`;

const breadcrumbItems = document.querySelector('.breadcrumb').querySelectorAll('small');

RebillyInstruments.initialize({
    publishableKey: import.meta.env.VITE_P_KEY,
    organizationId: import.meta.env.VITE_ORG_ID,
    websiteId: "my-awesome-website",
    apiMode: "sandbox",
    theme: {
        color: {
            primary: '#fb4f16'
        }
    },
    css: `
        .rebilly-instruments-summary-container,
        .rebilly-summary .rebilly-instruments-loader.active {
            background: #fafafa;
        }

    `
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
                thumbnail: "https://picsum.photos/200"
            },
            {
                planId: "awesome-t-shirt",
                quantity: 2,
                thumbnail: "https://picsum.photos/200"
            }
          ],
          countryCode: "US"
        },
        paymentInstruments: {
            compactExpressInstruments: true,
            googlePay: {
                merchantConfig: {
                    merchantName: "merchant_name", 
                    merchantOrigin: "merchant_origin"
                }
            },
            paymentCard : {
                popup: false
            }
        }
    },
});

RebillyInstruments.on('instrument-ready', (instrument) => {
    console.info('Customer has entered information for the following instrument', instrument);
    breadcrumbItems.forEach(item => {
        item.classList.remove('active');
        if (item.innerHTML === 'Confirm') {
            item.classList.add('active');
        }
    })
    // RebillyInstruments.show('confirmation', instrument);
});

document.querySelector('.form-wrapper').insertAdjacentHTML('beforeend', `
    <footer>
        <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
    </footer>
`);