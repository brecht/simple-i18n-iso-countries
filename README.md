simple-i18n-iso-countries
=========================
```
var I18nCountries = require('simple-i18n-iso-countries');
```

Get Belgium from the countries list:
```
var belgium = i18nCountries.getCountries('en').BE;

//  {
//    "name" : "Belgium",
//    "capital" : "Brussels",
//    "continent" : "EU",
//    "currency" : "EUR",
//    "languages" : "nl,fr,de",
//    "native" : "België",
//    "phone" : "32"
//  }
```

Get all continents:
```
var continents = i18nCountries.getContinents('en');
//  {
//    "AF": "Africa",
//    "AN": "Antarctica",
//    "AS": "Asia",
//    "EU": "Europe",
//    "NA": "North America",
//    "OC": "Oceania",
//    "SA": "South America"
//  }
```

Get the continent for Belgium
```
var europe = continents[belgium.continent];
// "Europe"
```

Get all the states in the USA
```
var usStates = i18nCountries.getRegions('en','US');

//  {
//    "AL": "Alabama",
//    "AK": "Alaska",
//    "AS": "American Samoa",
//    "AZ": "Arizona",
//   ...
```
