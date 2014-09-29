var defaultLocale = 'en';

var i18nCountries = {

  en:     require('./countries/en'),
  fr:     require('./countries/fr'),
  nl:     require('./countries/nl'),
  shared: require('./countries/shared')

};

exports.getCountries = function(locale){

  if(i18nCountries[locale] === undefined) locale = defaultLocale;

  var countries = i18nCountries[locale];

  for(var countryCode in countries){

    var country = countries[countryCode];
    var sharedAttrs = i18nCountries.shared[countryCode];

    for(var attrName in sharedAttrs){

      country[attrName] = sharedAttrs[attrName];

    }

  }

  return countries;

};
