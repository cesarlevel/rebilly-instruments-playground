import './cart-checkout.css'
import confetti from 'canvas-confetti';
import RebillyInstruments from '@rebilly/instruments';
import app from "../app";

document.querySelector('#app').innerHTML = `
    <canvas style="display: none"></canvas>
    <section id="form">
        <div class="form-wrapper">
            <h1>My Store</h1>
            <div class="breadcrumb">
                <a href="./cart.html">
                    <svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10">
                        <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
                    </svg>
                    <small>Go back to cart</small>
                </a>
            </div>
            <div class="rebilly-form"><div>
        </div>
    </section>
    <section id="summary">
        <div class="rebilly-summary"><div>
    </section>
`;

const myCanvas = document.querySelector('canvas');

RebillyInstruments.initialize({
    ...app.initOptions,
    theme: {
        color: {
            primary: '#fb4f16'
        }
    },
    css: `
        .rebilly-summary .rebilly-instruments-content,
        .rebilly-summary .rebilly-instruments-loader.is-active {
            background: #fafafa;
        }
    `
});

RebillyInstruments.mount({
    form: ".rebilly-form",
    summary: ".rebilly-summary",
    options: {
        intent: {
            items: JSON.parse(localStorage.getItem('demo-product')).map(item => {
                return {
                    planId: item.id,
                    quantity: Number(item.quantity),
                    thumbnail: item.thumbnail
                }
            }),
          countryCode: "US"
        },
        paymentInstruments: {
            compactExpressInstruments: true,
            paymentCard : {
                popup: false
            }
        }
    },
});

RebillyInstruments.on('purchase-completed', (purchase) => {
    myCanvas.style.display = 'block';

    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti({
        particleCount: 100,
        spread: 160
    });

    setTimeout(() => {
        myCanvas.remove();
    }, 3000);
});

document.querySelector('.form-wrapper').insertAdjacentHTML('beforeend', `
    <footer>
        <small>Refund policy | Privacy policy | Terms of service<br><a href="../index.html">Go to back to menu</a></small>
    </footer>
`);
