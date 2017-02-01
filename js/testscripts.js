function Country(countryName, countryId, continent, adjacent) {
  this.countryName = countryName;
  this.countryId = countryId;
  this.continent = continent;
  this.owner;
  this.unitCount = 0;
  this.adjacent = adjacent;
};

var makeElement = function(element, elementId, elementText, elementClasses, targetElement) {
  var newElement = document.createElement(element);
  newElement.id = elementId;
  newElement.className = elementClasses;
  newElement.innerHTML = elementText;
  $(targetElement).append(newElement);
}

var dummyCountries = [];

var countryAssigner = function(arrayOfCountries) {
  // this is a test function to grab countries from the dummy country list and make them objects
  for (var index = 0; index < arrayOfCountries.length; index++) {
    var makeCountry = new Country(arrayOfCountries[index][0], arrayOfCountries[index][1], arrayOfCountries[index][2], arrayOfCountries[index][3]);
    dummyCountries.push(makeCountry);
  }
};

var countriesFull = [["Northwest Territory", "northwest-territory", "North America", ["alaska", "alberta", "ontario", "greenland"]],
                ["Alaska", "alaska", "North America", ["northwest-territory", "alberta", "kamchatka"]],
                ["Greenland", "greenland", "North America", ["northwest-territory", "ontario", "eastern-canada"]],
                ["Alberta", "alberta", "North America", ["alaska", "northwest-territory", "ontario", "western-united-states"]],
                ["Ontario", "ontario", "North America", ["alberta", "northwest-territory", "greenland", "eastern-canada", "eastern-united-states", "western-united-states"]],
                ["Eastern United States", "eastern-united-states", "North America", ["central-america", "western-united-states", "ontario", "eastern-canada"]],
                ["Central America", "central-america", "North America", ["venezuela", "western-united-states", "eastern-united-states"]],
                ["Eastern Canada", "eastern-canada", "North America", ["greenland", "ontario", "eastern-united-states"]],
                ["Western United States", "western-united-states", "North America", ["alberta", "ontario", "eastern-united-states", "central-america"]],
                ["Venezuela", "venezuela", "South America", ["central-america", "peru", "brazil"]],
                ["Peru", "peru", "South America", ["venezuela", "brazil", "argentina"]],
                ["Argentina", "argentina", "South America", ["peru", "brazil"]],
                ["Brazil", "brazil", "South America", ["argentina", "peru", "venezuela", "north-africa"]],
                ["North Africa", "north-africa", "Africa", ["brazil", "western-europe", "southern-europe", "egypt", "east-africa", "central-africa"]],
                ["Egypt", "egypt", "Africa", ["north-africa", "east-africa", "middle-east", "southern-europe"]],
                ["East Africa", "east-africa", "Africa", ["madagascar", "south-africa", "central-africa", "north-africa", "egypt", "middle-east"]],
                ["Madagascar", "madagascar", "Africa", ["south-africa", "east-africa"]],
                ["South Africa", "south-africa", "Africa", ["madagascar", "central-africa", "east-africa"]],
                ["Central Africa", "central-africa", "Africa", ["south-africa", "north-africa", "east-africa"]],
                ["Western Europe", "western-europe", "Europe", ["north-africa", "great-britain", "northern-europe", "southern-europe"]],
                ["Great Britain", "great-britain", "Europe", ["iceland", "scandanavia", "northern-europe", "western-europe"]],
                ["Iceland", "iceland", "Europe", ["greenland", "scandanavia", "great-britain"]],
                ["Scandanavia", "scandanavia", "Europe", ["russia", "northern-europe", "great-britain", "iceland"]],
                ["Russia", "russia", "Europe", ["ural", "afghanistan", "middle-east", "southern-europe", "northern-europe", "scandanavia"]],
                ["Southern Europe", "southern-europe", "Europe", ["middle-east", "egypt", "western-europe", "northern-europe", "russia", "northern-africa"]],
                ["Northern Europe", "northern-europe", "Europe", ["southern-europe", "western-europe", "great-britain", "scandanavia", "russia"]],
                ["Middle East", "middle-east", "Asia", ["east-africa", "egypt", "southern-europe", "russia", "afghanistan", "india"]],
                ["India", "india", "Asia", ["middle-east", "afghanistan", "china", "southeast-asia"]],
                ["Southeast Asia", "southeast-asia", "Asia", ["india", "china", "indonesia"]],
                ["China", "china", "Asia", ["india", "southeast-asia", "afghanistan", "ural", "siberia", "mongolia"]],
                ["Afghanistan", "afghanistan", "Asia", ["russia", "middle-east", "india", "china", "ural"]],
                ["Ural", "ural", "Asia", ["russia", "afghanistan", "china", "siberia"]],
                ["Siberia", "siberia", "Asia", ["yakutsk", "irkutsk", "mongolia", "china", "ural"]],
                ["Yakutsk", "yakutsk", "Asia", ["siberia", "irkutsk", "kamchatka"]],
                ["Irkutsk", "irkutsk", "Asia", ["kamchatka", "yakutsk", "siberia", "mongolia"]],
                ["Kamchatka", "kamchatka", "Asia", ["japan", "mongolia", "alaska", "irkutsk", "yakutsk"]],
                ["Mongolia", "mongolia", "Asia", ["siberia", "china", "japan", "kamchatka", "irkutsk"]],
                ["Japan", "japan", "Asia", ["kamchatka", "mongolia"]],
                ["Indonesia", "indonesia", "Australia", ["new-guinea", "southeast-asia", "western-australia"]],
                ["New Guinea", "new-guinea", "Australia", ["eastern-australia", "western-australia", "indonesia"]],
                ["Eastern Austalia", "eastern-australia", "Australia", ["new-guinea", "western-australia"]],
                ["Western Australia", "western-australia", "Australia", ["indonesia", "eastern-australia", "new-guinea"]]];

var locations = [["northwest-territory", 500, 420],
                ["alberta", 431, 486],
                ["ontario", 488, 461],
                ["eastern-canada", 575, 463],
                ["greenland", 679, 383],
                ["western-united-states", 413, 538],
                ["eastern-united-states", 549, 547],
                ["central-america", 470, 603],
                ["venezuela", 573, 691],
                ["brazil", 652, 747],
                ["peru", 597, 764],
                ["argentina", 582, 800],
                ["western-australia", 1250, 773],
                ["eastern-australia", 1283, 766],
                ["new-guinea", 1307, 705],
                ["indonesia", 1199, 714],
                ["southeast-asia", 1148, 630],
                ["india", 1062, 614],
                ["china", 1170, 574],
                ["mongolia", 1182, 534],
                ["japan", 1309, 546],
                ["alaska", 291, 409],
                ["kamchatka", 1345, 433],
                ["irkutsk", 1224, 464],
                ["yakutsk", 1221, 423],
                ["siberia", 1132, 435],
                ["ural", 1070, 490],
                ["afghanistan", 1000, 534],
                ["russia", 945, 481],
                ["scandanavia", 863, 450],
                ["iceland", 792, 408],
                ["great-britain", 793, 470],
                ["western-europe", 792, 538],
                ["southern-europe", 886, 530],
                ["northern-europe", 897, 493],
                ["north-africa", 802, 646],
                ["egypt", 915, 594],
                ["east-africa", 960, 651],
                ["central-africa", 898, 700],
                ["south-africa", 891, 788],
                ["madagascar", 972, 746],
                ["middle-east", 995, 568]]

var createIdOnClick = function(event) {
  counter+=1
  console.log(counter);
  var coordsId = $(this).attr('id');
  makeElement('div', coordsId, coordsId + ": (" + event.pageX + ", " + event.pageY + ")", "soldier-coordinates", ".target-holder");
  console.log("(" + event.pageX + ", " + event.pageY + ")");
}

function GetObjectFromArray(objectId, objectsArray, idType) {
  var objectIndex = 0;
  for (var index = 0; index < objectsArray.length; index++) {
    if (objectsArray[index].idType === objectId) {
      objectIndex = index;
      break;
    }
  }
  return objectIndex;
}

var placeIcon = function(coordsId, currentGame) {
  // console.log("function");
  // console.log(coordsId);
  // console.log("removed #" + coordsId + "-icon");
  var countryIndex;
  var country;
  for (var index = 0; index < currentGame.countries.length; index++) {
    if (currentGame.countries[index].countryId === coordsId) {
      countryIndex = index;
      country = currentGame.countries[index];
      break;
    }
  }
  iconNumber = country.unitCount;

  $("#" + coordsId + "-icon").remove();
  makeElement('div', coordsId + "-icon", iconNumber, "marker-div", ".target-holder");
  var xcoord = 0;
  var ycoord = 0;
  for (var index = 0; index < locations.length; index ++) {
    if (locations[index][0] === coordsId) {
      xcoord = locations[index][1]-100;
      ycoord = locations[index][2];
      console.log(locations[index][1] + ", " + locations[index][2]);
      break;
    }
  }
  $("#" + coordsId + "-icon").css({
    top: ycoord + "px",
    left: xcoord + "px"
  })
}

var compareLists = function(array1, array2) {
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

$(document).ready(function() {
  $('.clickable-space').click(function() {
    placeIcon($(this).attr('id'));
  });
});
