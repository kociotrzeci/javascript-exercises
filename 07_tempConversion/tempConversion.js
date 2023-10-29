const convertToCelsius = function(temperatureInFarenheit) {
  let anwser = (temperatureInFarenheit-32)*5/9;
  return Math.round(anwser*10)/10;
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let anwser = temperatureInCelsius*9/5+32;
  return Math.round(anwser*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
