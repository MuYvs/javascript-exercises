const sumAll = function(num1, num2) {
    let total = 0;
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) == true && Number.isInteger(num2) == true){
        if (num1 > num2){
            for (; num2 <= num1; num2++)
                total += num2;
        }
        else{
            for (; num1 <= num2; num1++)
                total += num1;
        }
    }
    else{
        return "ERROR";
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
