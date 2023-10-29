const fibonacci = function(members) {
    if (members<1) return "OOPS";
    let number = 1;
    let previous = 0;
    for (let i = 1; i < members; i++)
    {
        const temp = number;
        number = number + previous;
        previous = temp;
    }
    return number;
};

// Do not edit below this line
module.exports = fibonacci;
