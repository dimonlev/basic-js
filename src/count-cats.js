const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    for (let k = 0; k < el.length; k++) {
      if (el[k] == '^^')
        number++;
    }
  }
  return number;
  // remove line with error and write your code here
};
