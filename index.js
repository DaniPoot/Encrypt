const { encryptWithCryptoJS } = require('./src/crypto-js.js')
const { encryptWithCrypto } = require('./src/crypto.js')
const { encryptWithHybridCrypto } = require('./src/hybrid.js')

encryptWithCryptoJS('Mensaje con crypto js')
console.log('\n');
encryptWithCrypto('Mensaje con crypto')
console.log('\n');
encryptWithHybridCrypto('Mensaje con hybrid')
