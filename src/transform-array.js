const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_PREV = '--double-prev';
  const DOUBLE_NEXT = '--double-next';
  const DISCARD_NEXT = '--discard-next';

  let newArr = [];
  let endCount = arr.length;

  if (arr[arr.length - 1] === DOUBLE_NEXT || arr[arr.length - 1] === DISCARD_NEXT) {
    endCount = arr.length - 1
  }

  for (let i = 0; i < endCount; i++) {

    if ((arr[0] === DISCARD_PREV && arr[i] === DISCARD_PREV) || (arr[0] === DOUBLE_PREV && arr[i] === DOUBLE_PREV)) {
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
