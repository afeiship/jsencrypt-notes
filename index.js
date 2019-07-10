var JSEncrypt = require("node-jsencrypt");
var encrypt = new JSEncrypt();
var CryptoJS = require("crypto-js");
var SECRET_KEYS = require("./scretrc.json");


function pubkey() {
  var decrypted = CryptoJS.AES.decrypt(SECRET_KEYS.cipher, SECRET_KEYS.phase, {
    iv: CryptoJS.enc.Hex.parse(SECRET_KEYS.iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

console.log(pubkey());
