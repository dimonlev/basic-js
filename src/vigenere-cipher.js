const { AssertionError } = require("chai");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error()
    }

    let strToCipher = str.slice().toUpperCase();
    let newStr = []
    let keyStr = "";
    let keyStrWithSpace = [];
    let count2 = 0;

    let count = Math.ceil(str.length / key.length)
    if (key.length >= str.length) {
      for (let i = 0; i < str.length; i++) {
        keyStr = key.toUpperCase().slice(0, str.length)
      }
    }

    else {
      for (let i = 0; i < count + 1; i++) {
        keyStr += key;
      }
      keyStr = keyStr.slice(0, str.length).toUpperCase()
    }
    keyStr = keyStr.split("")

    for (let i = 0; i < strToCipher.length; i++) {
      if (strToCipher.charCodeAt(i) > 64 && strToCipher.charCodeAt(i) < 92) {
        keyStrWithSpace.push(keyStr[i - count2])

      }

      else {
        keyStrWithSpace.push(strToCipher[i])
        count2++;
      }

    }

    keyStrWithSpace = keyStrWithSpace.join("")

    for (let i = 0; i < strToCipher.length; i++) {
      let charOfStr = strToCipher.charCodeAt(i);
      let charOfKey = keyStrWithSpace.charCodeAt(i);

      if (charOfStr > 64 && charOfStr < 92) {
        if ((charOfStr + charOfKey - 65) >= 91) {
          newStr.push(String.fromCharCode(charOfStr + charOfKey - 65 - 26))
          // console.log(String.fromCharCode(charOfStr + charOfKey - 65 - 26));
        }
        else {
          newStr.push(String.fromCharCode(charOfStr + charOfKey - 65))
        }
      }

      else
        newStr.push(strToCipher[i])

    }

    // console.log(strToCipher)
    // console.log(keyStrWithSpace)
    // console.log(keyStrWithSpace)
    // console.log(keyStr.length)
    // newStr = newStr.join("")

    if (this.reverse)
      newStr = newStr.join("");
    else newStr = newStr.reverse().join("")
    return newStr

  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error()
    }

    let strToCipher = str.slice().toUpperCase();
    let newStr = []
    let keyStr = "";
    let keyStrWithSpace = [];
    let count2 = 0;

    let count = Math.ceil(str.length / key.length)
    if (key.length >= str.length) {
      for (let i = 0; i < str.length; i++) {
        keyStr = key.toUpperCase().slice(0, str.length)
      }
    }

    else {
      for (let i = 0; i < count + 1; i++) {
        keyStr += key;
      }
      keyStr = keyStr.slice(0, str.length).toUpperCase()
    }
    keyStr = keyStr.split("")

    for (let i = 0; i < strToCipher.length; i++) {
      if (strToCipher.charCodeAt(i) > 64 && strToCipher.charCodeAt(i) < 92) {
        keyStrWithSpace.push(keyStr[i - count2])

      }

      else {
        keyStrWithSpace.push(strToCipher[i])
        count2++;
      }

    }

    keyStrWithSpace = keyStrWithSpace.join("")

    for (let i = 0; i < strToCipher.length; i++) {
      let charOfStr = strToCipher.charCodeAt(i);
      let charOfKey = keyStrWithSpace.charCodeAt(i);

      if (charOfStr > 64 && charOfStr < 92) {
        if ((charOfStr - (charOfKey - 65)) < 65) {
          newStr.push(String.fromCharCode(charOfStr - (charOfKey - 65) + 26))
          // console.log(String.fromCharCode(charOfStr + charOfKey - 65 - 26));
        }
        else {
          newStr.push(String.fromCharCode(charOfStr - (charOfKey - 65)))
        }
      }

      else
        newStr.push(strToCipher[i])

    }

    // console.log(strToCipher)
    // console.log(keyStrWithSpace)
    // console.log(keyStrWithSpace)
    // console.log(keyStr.length)
    // newStr = newStr.join("")

    if (this.reverse)
      newStr = newStr.join("");
    else newStr = newStr.reverse().join("")
    return newStr
  }
}

module.exports = VigenereCipheringMachine;
