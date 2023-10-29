const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    const array1 = Array.from(string);
    const string1 = array1.toString();
    array1.reverse();
    const string2 = array1.toString();
    return (string1 === string2 ? true : false);
};

palindromes("Dupa.");

module.exports = palindromes;
