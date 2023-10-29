const repeatString = function(string, num) {
    if (num<0) return 'ERROR';
    let stringResult = '';
    for (let i = 0; i<num; i++)
    {
        stringResult = stringResult + string;
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
