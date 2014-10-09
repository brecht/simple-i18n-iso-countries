/*
 * @summary JSON list of countries, continents, regions for each locale
 */
var i18nCountries = {

  /*
   * @summary English
   */
  en:     {
    countries:  require('./en/countries'),
    continents: require('./en/continents'),
    regions:    require('./en/regions')
  },

  /*
   * @summary French (Français)
   */
  fr:     {
    countries:  require('./fr/countries'),
    continents: require('./fr/continents'),
    regions:    require('./fr/regions')
  },

  /*
   * @summary Dutch (Nederlands)
   */
  nl:     {
    countries:  require('./nl/countries'),
    continents: require('./nl/continents'),
    regions:    require('./nl/regions')
  },

  /*
   * @summary Shared attributes
   */
  shared:     {
    countries:  require('./shared/countries')
  }

};

module.exports = i18nCountries;
