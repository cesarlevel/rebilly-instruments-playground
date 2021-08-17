const { resolve } = require('path')

module.exports = {
  define: {
    process: () => {},
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'sites/cart-checkout.html'),
        nested: resolve(__dirname, 'sites/cart.html')
      }
    }
  }
}
