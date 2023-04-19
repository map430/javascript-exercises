const leapYears = function(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true; 
    }else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }else {
        return false;
    }  
};


/*

Leap years are divisible by four
Years divisible by 100 are not leap years unless they are divisible by 400


*/





// Do not edit below this line
module.exports = leapYears;
