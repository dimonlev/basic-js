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

    let newStr = "";
    let keyStr = "";

    return newStr;
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error()
    }
    let newStr = "";

    return newStr;
  }
}

module.exports = VigenereCipheringMachine;
