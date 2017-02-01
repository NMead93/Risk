var generateElements = function(arrayOfCountries) {
  for (var index = 0; index < arrayOfCountries.length; index++) {
    makeElement('div', arrayOfCountries[index].countryId, arrayOfCountries[index].countryName + " ", "clickable-space country-div", "#country-holder");
    makeElement('span', '', " Troops ", "peeps", "#" +  arrayOfCountries[index].countryId);
  }
}
