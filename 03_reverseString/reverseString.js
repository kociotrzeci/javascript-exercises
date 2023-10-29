const reverseString = function(string) {
    let arrayOfStringReversed= [];
    for (let i = string.length; i > 0; i--)
    {
        arrayOfStringReversed.push(string.charAt(i-1));
    }
    return arrayOfStringReversed.join("");
};


module.exports = reverseString;
