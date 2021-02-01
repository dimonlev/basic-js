const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_PREV = '--double-prev';
  const DOUBLE_NEXT = '--double-next';
  const DISCARD_NEXT = '--discard-next';

  let newArr = [];
  let endCount = arr.length;
  // console.log(arr)
  if (arr[arr.length - 1] === DOUBLE_NEXT || arr[arr.length - 1] === DISCARD_NEXT) {
    endCount = endCount - 1
  }

  for (let i = 0; i < endCount; i++) {

    if ((arr[i] === DISCARD_PREV && i === 0) || (arr[i] === DOUBLE_PREV && i === 0)) {
      continue
    }

    if (arr[i] === DISCARD_PREV) {
      newArr.pop();
    }
    else if (arr[i] === DOUBLE_PREV) {
      // newArr.pop();
      newArr.push(arr[i - 1]);
    }
    else if (arr[i] === DOUBLE_NEXT) {
      newArr.push(arr[i + 1]);
    }
    else if (arr[i] === DISCARD_NEXT) {
      if ((arr[i + 2] === DISCARD_PREV) || (arr[i + 2] === DOUBLE_PREV)) {
        i++;
      }
      i++;
    }

    else newArr.push(arr[i])
  }

  return newArr
};
