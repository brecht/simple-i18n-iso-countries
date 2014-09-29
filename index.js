var defaultLocale = 'en';

var I18nCountries = {

  en:     require('./countries/en'),
  fr:     require('./countries/fr'),
  nl:     require('./countries/nl'),
  shared: require('./countries/shared')

};

exports.getCountries = function(locale){

  if(I18nCountries[locale] === undefined) locale = defaultLocale;

  var i18nCountries = I18nCountries[locale];

  for(var countryCode in i18nCountries.countries){

    var country = i18nCountries.countries[countryCode];
    var sharedAttrs = I18nCountries.shared[countryCode];

    for(var attrName in sharedAttrs){

      country[attrName] = sharedAttrs[attrName];

    }

  }

  return i18nCountries;

};
