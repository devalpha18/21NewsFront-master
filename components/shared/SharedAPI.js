
var cloudinary = require('cloudinary/lib/cloudinary');
var CryptoJS = require("crypto-js");

 export const getImageSrc = (cloudPath, width, height) => {
    let cname, apiKey;
    cname = "africa-one";
    apiKey = "493426532268145";
    cloudinary.config({ cloud_name: cname, api_key: apiKey})
    var url = cloudinary.url(cloudPath, {width: width, height: height, crop: "fill"});
    return url;
  };

  export const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + ' ...' : str;
  };

  export const truncateText = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '' : str;
  };

  export const random = (max) => {
    return Math.floor(Math.random() * max) + 1;
    // const mn = 0;
    // return Math.floor(Math.random() * (max - mn)) + mn; 
  }

  export const encryptStr = (plaintext) =>{
    var ciphertext = CryptoJS.AES.encrypt(plaintext, 'africaonesitenextbigthing').toString();
    return ciphertext;
  }

  export const decryptStr = (ciphertext) =>{
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'africaonesitenextbigthing');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }






 
