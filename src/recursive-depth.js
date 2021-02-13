const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let newArr = arr.filter(x => Array.isArray(x));
    if (newArr.length > 0) {
      newArr = newArr.flat();
      count += this.calculateDepth(newArr);
    }
    return count;

  }
};