const { resolve } = require('path')

module.exports = {
  define: {
    'process.env': process.env,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'sites/cart-checkout.html'),
        nested: resolve(__dirname, 'sites/cart.html'),
        nested: resolve(__dirname, 'sites/vanilla.html'),
        nested: resolve(__dirname, 'sites/vanilla-dark.html'),
        nested: resolve(__dirname, 'sites/compact.html')
      }
    }
  }
}
