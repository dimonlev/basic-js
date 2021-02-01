const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === typeof "" & Number(sampleActivity) > 0 & Number(sampleActivity) <= 15)

    return (1 / HALF_LIFE_PERIOD) * Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)))


  else return false
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
