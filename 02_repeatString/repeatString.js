const repeatString = function(myString, n) {
    let repeatedString = '';
    if (n < 0){
        return('ERROR');
    }else {
    }for (let i=0; i<n; i++) {
    repeatedString += myString;
}
return(repeatedString);
};

repeatString('hey', 3);

repeatString('hey', 10);

repeatString('hey', 1);

repeatString('hey', 0);

repeatString('hey', -1);

const number = Math.floor(Math.random() * 1000)
repeatString('hey', number);

repeatString('hey', '');


// Do not edit below this line
module.exports = repeatString;
