const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

return;

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})