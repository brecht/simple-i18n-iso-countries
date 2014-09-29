var defaultLocale = 'en';

var I18nCountries = {

  en:     require('./countries/en'),
  fr:     require('./countries/fr'),
  nl:     require('./countries/nl'),
  shared: require('./countries/shared')

};

exports.getCountries = function(locale){

  if(I18nCountries[locale] === undefined) locale = defaultLocale;

  var Countries = I18nCountries[locale];

  for(var countryCode in Countries.countries){

    var country = Countries.countries[countryCode];
    var sharedAttrs = i18nCountries.shared[countryCode];

    for(var attrName in sharedAttrs){

      country[attrName] = sharedAttrs[attrName];

    }

  }

  return countries;

};
