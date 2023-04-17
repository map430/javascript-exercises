const sumAll = function(val1, val2) {
    let finalSum = 0;
    if ((val1 < 0 || val2 <0) || typeof(val1) !== "number" || typeof(val2) !== "number") {
        return "ERROR";
    }else if (val1 > val2) {
        for (i=val2; i<=val1; i++) {
          finalSum += i;
        }
    }else if (val2 > val1) {
        for (i=val1; i<=val2; i++) {
          finalSum += i;
        }
    }
   return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
