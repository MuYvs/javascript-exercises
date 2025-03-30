const reverseString = function(string) {
    let str_array = string.split("");
    str_array.reverse();
    let new_str = str_array.join("")
    return new_str;
};

// Do not edit below this line
module.exports = reverseString;
