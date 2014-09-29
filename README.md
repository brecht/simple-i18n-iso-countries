simple-i18n-iso-countries
=========================
```
var I18nCountries = require('simple-i18n-iso-countries');
var i18nCountries = I18nCountries.getCountries('en');

var belgium = i18nCountries.countries.BE;

//  {
//    "name" : "Belgium",
//    "capital" : "Brussels",
//    "continent" : "EU",
//    "currency" : "EUR",
//    "languages" : "nl,fr,de",
//    "native" : "België",
//    "phone" : "32"
//  }

var belgiumContinentName = i18nCountries.continents[belgium.continent];
// "Europe"

```
