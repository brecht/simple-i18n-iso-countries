var defaultLocale = 'en';

var countries = {

  en: require('./countries/en'),
  fr: require('./countries/fr'),
  nl: require('./countries/nl')

};

exports.getCountries = function(locale){

  if(countries[locale] === undefined) locale = defaultLocale;
  return countries[locale];

};
