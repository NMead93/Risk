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

//  START TEST FUNCTIONS AND VARIABLES

var makeElement = function(element, elementId, elementText, elementClasses, targetElement) {
  var newElement = document.createElement(element);
  newElement.id = elementId;
  newElement.className = elementClasses;
  newElement.innerHTML = elementText;
  $(targetElement).append(newElement);
}

var generateElements = function(arrayOfCountries) {
  for (var index = 0; index < arrayOfCountries.length; index++) {
    makeElement('div', arrayOfCountries[index].countryId, arrayOfCountries[index].countryName + " ", "clickable-space country-div", "#country-holder");
    makeElement('span', '', " Troops ", "peeps", "#" +  arrayOfCountries[index].countryId);
  }
}


var countries = [["Bosnia", 0, 1, 1],["Japan", 1, 1, 1],["China", 2, 1, 1],["Chile", 3, 1, 1],["Madagascar", 4, 1, 1],["Canada", 5, 1, 1],["Latvia", 6, 1, 1],["Russia", 7, 1, 1],["Germany", 8, 1, 1]];

var continents = [["Asia", 7], ["Europe", 5], ["North America", 5], ["Australia", 2], ["South America", 2], ["Africa", 3]]
var countries = [["Alaska", "alaska", "Asia", 1],
                ["Japan", "asia", "Asia", 1],
                ["China", 2, "Asia", 1],
                ["Chile", 3, "Asia", 1],
                ["Madagascar", 4, "Asia", 1],
                ["Canada", 5, "Asia", 1],
                ["Latvia", 6, "Asia", 1],
                ["Russia", 7, "Asia", 1],
                ["Germany", 8, "Asia", 1]];

var dummyCountries = [];
var dummyContinents = [];

var newPlayer = new Player("Melvin", 1);
newPlayer.countryArray = dummyCountries;

var countryAssigner = function(arrayOfCountries) {
  // this is a test function to grab countries from the dummy country list and make them objects
  for (var index = 0; index < arrayOfCountries.length; index++) {
    var makeCountry = new Country(arrayOfCountries[index][0], arrayOfCountries[index][1], arrayOfCountries[index][2], arrayOfCountries[index][3]);
    dummyCountries.push(makeCountry);
  }
};

var continentAssigner = function(arrayOfContinents) {
  // this is a test function to grab countries from the dummy country list and make them objects
  for (var index = 0; index < arrayOfContinents.length; index++) {
    var makeContinents = new Continent(arrayOfContinents[index][0], arrayOfContinents[index][1]);
    dummyContinents.push(makeContinents);
  }
};



// END TEST FUNCTIONS AND VARIABLES

function Game(countries, players, continents) {
  // The Game class contains the player objects and the country objects
  this.countries = countries;
  this.players = players;
  this.playing = false;
  this.continents = continents;
};


function Player(playerName, playerId) {
  this.playerName = playerName;
  this.playerId = playerId;
  this.reinforcements = 0;
  this.continents = ["super"]
  this.countryArray = [];
  this.active = true;
};

function Continent(continentName, bonus) {
  this.countryArray = [];
  this.continentName = continentName;
  this.bonus = bonus;
};

function Country(countryName, countryId, continent, adjacent) {
  this.countryName = countryName;
  this.countryId = countryId;
  this.continent = continent;
  this.owner;
  this.unitCount = 0;
  this.adjacent = adjacent;
};

// begin Turn functions



// prototype functions ==========================

Game.prototype.assignment = function(player) {
  this.currentPlayer = player;
  console.log(this.currentPlayer);
  this.currentPlayer.reinforcements = Math.floor(this.currentPlayer.countryArray.length / 3);
  this.continentChecker(player);
}

Game.prototype.continentChecker = function(player) {
  for (var index = 0; index < this.continents.length; index++) {
    var held = true;
    for (var continentCountry = 0; continentCountry < this.continents[index].countryArray.length; continentCountry++) {
      var hasCountry = false;
      for (var playerCountry = 0; playerCountry < this.currentPlayer.countryArray.length; playerCountry++) {
        if (this.currentPlayer.countryArray[playerCountry] === this.continents[index].countryArray[continentCountry]) {
          hasCountry = true;
          break;
        }
      }
      if (hasCountry === false) {
        held = false;
        break;
      }
    }
    if (held === true) {
      this.currentPlayer.reinforcements += this.continents[index].bonus;
    }
  }
}

Game.prototype.setup = function() {
  // This function will randomly assign countries to players
  var countriesIdArray = []
  //creates an array of the index locations of the countries, so that countries can be spliced out as they are assigned
  for (var item = 0; item < this.countries.length; item++) {
    countriesIdArray.push(item);
  }
  var numberOfPlayers = this.players.length;
  // checks for an unevenly assigned number of countries and takes out the remainder
  var numberOfCountries = this.countries.length;
  var remainderCountries = numberOfCountries % numberOfPlayers;
  var countriesPerPlayer = (numberOfCountries - remainderCountries) / numberOfPlayers;
  for (var playerIndex = 0; playerIndex < numberOfPlayers; playerIndex++) {
    //iterates through the players and assigns the whole product number of countries randomly
    for (var index = 0; index < countriesPerPlayer; index++) {
      var randomIndex = Math.floor(Math.random() * countriesIdArray.length);
      newCountryId = countriesIdArray[randomIndex];
      this.players[playerIndex].countryArray.push(this.countries[newCountryId]);
      this.countries[newCountryId].owner = this.players[playerIndex].playerName;
      countriesIdArray.splice(randomIndex,1);
      // console.log("added " + this.countries[newCountryId].countryName + " to " + this.players[playerIndex].playerName);
    }
  }
  for (var remainder = 0; remainder < remainderCountries; remainder++) {
    // assigns the remainder countries randomly starting with the last player
    var randomIndex = Math.floor(Math.random() * countriesIdArray.length);
    newCountryId = countriesIdArray[randomIndex];
    this.players[this.players.length-(remainder+1)].countryArray.push(this.countries[newCountryId]);
    this.countries[newCountryId].owner = this.players[this.players.length-(remainder+1)].playerName;
    countriesIdArray.splice(randomIndex,1);
    // console.log("added " + this.countries[newCountryId].countryName + " to " + this.players[this.players.length-(remainder+1)].playerName);
  }
}

Game.prototype.buildContinents = function() {
  console.log("called continent builder!");
  // Assigns the appropiate countries to a continent
  for (var index = 0; index < this.countries.length; index++) {
    for (var continentIndex = 0; continentIndex < this.continents.length; continentIndex++) {
      if (this.continents[continentIndex].continentName === this.countries[index].continent) {
        // console.log(this.countries[index].countryName + " is in " + this.continents[continentIndex].continentName);
        this.continents[continentIndex].countryArray.push(this.countries[index]);
      }
    }
  }
}

Game.prototype.combatRolls = function(numOfDice) {
    var rolls = []
    for (i = 0; i < numOfDice; i++) {
        rolls.push(Math.floor((Math.random() * 6) + 1));//new roll into array of rolls
    }
    return rolls;
}

Game.prototype.combat = function(attackDice, defendDice) {
//pass number of dice for each player

    //create sorted array of rolls for attack and defense
    var attackRolls = this.combatRolls(attackDice).sort(function(a, b){return b-a});
    // console.log(attackRolls + ' attack');
    var defendRolls = this.combatRolls(defendDice).sort(function(a, b){return b-a});
    // console.log(defendRolls + ' defence');
    var armiesLost = [0, 0];//array of armiesLost

    for (i = 0; i < Math.min(attackRolls.length, defendRolls.length); i++) {
        if (attackRolls[i] > defendRolls[i]) {
            armiesLost[1] -= 1;//defense loses one army
        } else {
            armiesLost[0] -= 1;//attack loses one army
        }
    }
    // console.log(armiesLost);
    return armiesLost;
}
countryAssigner(countriesFull)
continentAssigner(continents)
var newPlayer = new Player("Melvin", 0)
var currentGame = new Game(dummyCountries, [newPlayer], dummyContinents);
currentGame.setup();
currentGame.buildContinents();
currentGame.assignment(newPlayer);
console.log(currentGame.currentPlayer.reinforcements);

//=====================================================

$(function() {

  $('#number-form').submit(function(event) {
    event.preventDefault()
    var totalPlayers = parseInt($('number-of-players').val())
    for (var i = 0; i < totalPlayers; i++) {
      $('.player-name').append("<input type='text' val='' id=''")
    }
  })
  generateElements(dummyCountries);



  $('.clickable-space').click(function(){

    if(newPlayer.reinforcements > 0){ //add troops to space if there are troops available
      console.log('in the function');
      var newUnitCount = 0;
      var spaceClicked = $(this).attr('id'); // select space with click, select country based on ID
      for (i = 0; i < currentGame.countries.length; i++) {
        if (currentGame.countries[i].countryId === spaceClicked) {
          currentGame.countries[i].unitCount++
          newUnitCount = currentGame.countries[i].unitCount;
        }
      }
      $(this).children("span").text(newUnitCount);
      newPlayer.reinforcements--;
    }
  });
});

//====================================
