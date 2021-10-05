const AES = require('crypto-js/aes');
const CryptoJS = require('crypto-js')
const secretKey = 'RDjyFJqiRtwo6gDaMMMH'

function encryptWithCryptoJS(text) {
  const encryp = AES.encrypt(text, secretKey)
  console.log( 'Incriptacion: ', encryp)

  const bytes  = AES.decrypt(encryp, secretKey)
  console.log( 'Desencriptacion: ', bytes)

  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  console.log( 'Mensaje desencriptado with AES: ', originalText)
}

module.exports = {
  encryptWithCryptoJS
}
