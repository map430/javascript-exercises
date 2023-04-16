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

   reverseString('hello there');

   reverseString('123! abc!');

   reverseString('');



module.exports = reverseString;