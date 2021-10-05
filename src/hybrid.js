const RSA = require('hybrid-crypto-js').RSA;
const Crypt = require('hybrid-crypto-js').Crypt;

const crypt = new Crypt({ entropy: 'RDjyFJqiRtwo6gDaMMMH' });
const rsa = new RSA({ entropy: 'RDjyFJqiRtwo6gDaMMMH' });


async function encryptWithHybridCrypto(text) {
  const { publicKey, privateKey } = await rsa.generateKeyPairAsync()
  const encrypted = crypt.encrypt(publicKey, text);
  console.log('Encrypt with Hybrid:', encrypted)
  const decrypted = crypt.decrypt(privateKey, encrypted);
  console.log('Dencrypt with Hybrid:', decrypted)
}

module.exports = {
  encryptWithHybridCrypto
}
