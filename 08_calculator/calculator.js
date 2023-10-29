const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return (array.reduce((sum, a) => {
    sum = sum+a;
    return sum} ,0));
};

const multiply = function(array) {
    return(
    array.reduce((mul, a) => {
    mul = mul*a;
    return mul} ,1));
};


const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
	let ret = 1;
  for (let i = 1; i<=number; i++) {
    ret = ret*i;
  }
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
