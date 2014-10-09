
var i18nCountries = require('../index.js');

/*
 * Logs title to console
 */
var logBlock = function(title){

  var line = '----------------------------------------------------------------';

  console.log('\n\n' + line);
  console.log(title);
  console.log(line + '\n');

};


/*
 * Logs test to console
 */
var testCountries = function(locale){

  logBlock('COUNTRIES FOR ' + locale);
  console.log(i18nCountries.getCountries(locale));

  logBlock('CONTINENTS FOR ' + locale);
  console.log(i18nCountries.getContinents(locale));

  logBlock('REGIONS FOR US FOR ' + locale);
  console.log(i18nCountries.getRegions(locale,'US'));

  logBlock('CONTINENTS FOR BE (does not exist) FOR ' + locale);
  console.log(i18nCountries.getRegions(locale,'BE'));

};

/*
 * Tests existing locale
 */
testCountries('nl');

/*
 * Tests not existing locale
 */
testCountries('de');
