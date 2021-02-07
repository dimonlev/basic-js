const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let newStr = String(str);
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = 1;
  let separator = "+";
  let additionSeparator = "|";
  let addition = "";
  let separatorPlusAddition = separator + addition;
  let separatorPlusNewStr = separator + newStr;

  if (options.repeatTimes === undefined) {
    return newStr + String(options.addition)
  }

  // if (options.hasOwnProperty(additionRepeatTimes)) {
  //   additionRepeatTimes = options.additionRepeatTimes;
  // }
  if (options.hasOwnProperty("separator")) {
    separator = String(options.separator);
  }
  // if (options.hasOwnProperty(additionSeparator)) {
  //   additionSeparator = String(options.additionSeparator);
  // }
  // if (options.hasOwnProperty(addition)) {
  //   addition = String(options.addition);


  for (let i = 1; i < repeatTimes; i++) {
    for (let k = 1; k < additionRepeatTimes; k++) {
      addition = addition + separatorPlusAddition;
    }
    newStr = newStr + separator + String(str);
  }

  return newStr;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
}
