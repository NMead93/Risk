var generateElements = function(arrayOfCountries) {
  for (var index = 0; index < arrayOfCountries.length; index++) {
    makeElement('div', arrayOfCountries[index].countryId, arrayOfCountries[index].countryName + " ", "clickable-space country-div", "#country-holder");
    makeElement('span', '', " Troops ", "peeps", "#" +  arrayOfCountries[index].countryId);
  }
}

var createIdOnClick = function(event) {
  // utility script to determine the coordinates of a click
  counter+=1
  console.log(counter);
  var coordsId = $(this).attr('id');
  makeElement('div', coordsId, coordsId + ": (" + event.pageX + ", " + event.pageY + ")", "soldier-coordinates", ".target-holder");
  console.log("(" + event.pageX + ", " + event.pageY + ")");
}

var compareLists = function(array1, array2) {
  // utility script to check if elements in an array are present in another
  for (var index = 0; index < array1.length; index++) {
    var contains = false;
    for (var jdex = 0; jdex < array2.length; jdex++) {
      if (array2[jdex][0] === array1[index][1]) {
        contains = true;
        break;
      }
    }
    if (contains === false) {
      console.log(array1[index][1]);
    }
  }
}
