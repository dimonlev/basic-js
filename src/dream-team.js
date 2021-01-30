const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  dreamTeam = [];
  if (arr === []) {
    return []
  }
  else if (!!arr) {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (typeof el === typeof 'Dima')
        dreamTeam.push(el.trim()[0].toUpperCase())
    }
    dreamTeam = dreamTeam.sort().join("");
    return dreamTeam;
  }
  else return false


};
