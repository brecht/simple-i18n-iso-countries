var defaultLocale = 'en';
var jsonCountries = require('./i18n_countries');

var i18nCountries = {};

/*
 * @summary If locale is set returns locale, if not returns default locale
 * @param {String} locale
 */
i18nCountries.getLocale = function(locale){

  if(jsonCountries[locale] === undefined) return defaultLocale;
  return locale;

};


/*
 * @summary Returns JSON list of continents
 * @param {String} locale
 */
i18nCountries.getContinents = function(locale){

  // Check if locale is set, if not return default locale
  locale = this.getLocale(locale);

  // Return continents
  return jsonCountries[locale].continents;

};


/*
 * @summary Returns JSON list of country regions
 * @param {String} locale
 * @param {String} countryCode
 */
i18nCountries.getRegions = function(locale,countryCode){

  // Check if locale is set, if not return default locale
  locale = this.getLocale(locale);

  // Return regions if set
  if(jsonCountries[locale].regions[countryCode] !== undefined){
    return jsonCountries[locale].regions[countryCode];
  }

  return false;

};


/*
 * @summary Returns JSON list of countries
 * @param {String} locale
 */
i18nCountries.getCountries = function(locale){

  // Check if locale is set, if not return default locale
  locale = this.getLocale(locale);

  // Countries
  var countries = jsonCountries[locale].countries;

  // Merge localized countries with shared country attributes
  for(var countryCode in countries){

    var country = countries[countryCode];
    var sharedAttrs = jsonCountries.shared.countries[countryCode];

    for(var attrName in sharedAttrs){

      country[attrName] = sharedAttrs[attrName];

    }

  }

  return countries;

};


module.exports = i18nCountries;
