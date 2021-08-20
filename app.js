class App {
    plans = {
        plan1: {
            id:  import.meta.env.VITE_PLAN_1_ID,
            name: import.meta.env.VITE_PLAN_1_NAME,
            thumbnail: "https://picsum.photos/200",
            price: "$30.00"
        },
        plan2: {
            id:  import.meta.env.VITE_PLAN_2_ID,
            name: import.meta.env.VITE_PLAN_2_NAME,
            thumbnail: "https://picsum.photos/200",
            price: "$20.00"
        },
        plan3: {
            id:  import.meta.env.VITE_PLAN_3_ID,
            name: import.meta.env.VITE_PLAN_3_NAME,
            thumbnail: "https://picsum.photos/200",
            price: "$10.00"
        },
    }

    carts = {
        cart1: [
            {
                planId: this.plans.plan1.id,
                quantity: 1,
            },
        ],
        cart2: [
            {
                planId: this.plans.plan1.id,
                quantity: 1,
            },
            {
                planId: this.plans.plan2.id,
                quantity: 2,
            }
        ],
        cart3: [
            {
                ...this.plans.plan1,
                quantity: 1,
            },
            {
                ...this.plans.plan2,
                quantity: 1,
            }
        ],
    }

    paymentInstruments = {
        googlePay: {
            merchantConfig: {
                merchantName: 'merchant_name',
                merchantOrigin: 'merchant_origin'
            },
        },
    }

    initOptions = {
        organizationId: import.meta.env.VITE_ORGANIZATION_ID,
        publishableKey: import.meta.env.VITE_API_KEY,
        websiteId: import.meta.env.VITE_WEBSITE_ID,
        apiMode: "sandbox",
    }
}

const app = new App();

export default app;
