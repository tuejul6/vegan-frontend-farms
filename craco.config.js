const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@pancakeswap-libs/uikit': path.resolve(__dirname, 'src/uikit/src'),
    },
  },
}
