const reverseString = function(myString) {
    let stringLen = myString.length;
    let revString = '';
    for (let i = stringLen; i >= 0; i--) {
       let indivLetter = myString.slice(i-1, i);
       revString += indivLetter
    }
    return revString;
   };
   
   reverseString('hello');


//create a loop that takes a string and analyzes each letter starting from the -1 postion
    //start at -1 and slice out i, then return it
    //go to -2 then slice out i
  //return i each time 
// Do not edit below this line
module.exports = reverseString;