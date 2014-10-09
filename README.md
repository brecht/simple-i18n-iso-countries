simple-i18n-iso-countries
=========================
This repo is available as an npm package, but not yet listed on npmjs.org (still in development).

# Install
```
npm install --save-dev git+https://github.com/brecht/simple-i18n-iso-countries.git
```

# Usage
Require the module
```
var i18nCountries = require('simple-i18n-iso-countries');
```

## Countries

Get all countries
```
var countries = i18nCountries.getCountries('en');
```

## Country

Get Belgium from the countries list:
```
var countries = i18nCountries.getCountries('en');
var belgium = i18nCountries.getCountries('en').BE; // alternatively: countries['BE'];

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

## Continents
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

## Continent
Get Oceania
```
var continents = i18nCountries.getContinents('en');
var oceania = continents.OC; // alternatively: continents['OC'];
```

Get the continent for China
```
var countries = i18nCountries.getCountries('en');
var continents = i18nCountries.getContinents('en');
var china = countries.CN; // alternatively: countries['CN'];
var continent = continents[china.continent];

// "Asia"
```

## Regions for a country
Get all the states of USA
```
var states = i18nCountries.getRegions('en','US');

//  {
//    "AL": "Alabama",
//    "AK": "Alaska",
//    "AS": "American Samoa",
//    "AZ": "Arizona",
//   ...
```
