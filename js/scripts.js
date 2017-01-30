

var countries = [["Bosnia", 0, 1, 1],["Japan", 1, 1, 1],["China", 2, 1, 1],["Chile", 3, 1, 1],["Madagascar", 4, 1, 1],["Canada", 5, 1, 1],["Latvia", 6, 1, 1],["Russia", 7, 1, 1],["Germany", 8, 1, 1]];
var dummyCountries = [];


var Alaska = new Country("Alaska", 1, "nw","no one");
var riskCountries = [Alaska, "North West Territory", "Alberta", "Ontario", "Quebec", "Western United States", "Eastern United States", "Central America", "Greenland"];

var newPlayer = new Player("Melvin", 1);
newPlayer.countryArray=[Alaska, "Ontario","NW US"];

var newTurn = new Turn(newPlayer);

var countryAssigner = function(arrayOfCountries) {
  // this is a test function to grab countries from the dummy country list and make them objects
  for (var index = 0; index < arrayOfCountries.length; index++) {
    var makeCountry = new Country(arrayOfCountries[index][0], arrayOfCountries[index][1], arrayOfCountries[index][2], arrayOfCountries[index][3]);
    dummyCountries.push(makeCountry);
  }
};

// END TEST FUNCTIONS AND VARIABLES

function Game(countries, players) {
  // The Game class contains the player objects and the country objects
  this.countries = countries;
  this.players = players;
  this.playing = false;
};


function Player(playerName, playerId) {
  this.playerName = playerName;
  this.playerId = playerId;
  this.reinforcements = 0;
  this.countryArray = [];
  this.active = true;
};

function Continent(arrayOfCountries, continentName, bonus) {
  this.countryArray = arrayOfCountries;
  this.continentName = continentName;
  this.bonus = bonus;
}



function Country(countryName, countryId, continent, adjacent) {
  this.countryName = countryName;
  this.countryId = countryId;
  this.continent = continent;
  this.owner;
  this.unitCount = 0;
  this.adjacent = adjacent;
};

// begin Turn functions

function Turn(player) {
  this.currentPlayer = player;
  this.stage = 0;
  this.Available = function(){

    return (Math.floor(this.currentPlayer.countryArray.length / 3));
  }
  this.availableTroops = this.Available();
};

// prototype functions ==========================

Turn.prototype.checkForBonus = function() {

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
      console.log("added " + this.countries[newCountryId].countryName + " to " + this.players[playerIndex].playerName);
    }
  }
  for (var remainder = 0; remainder < remainderCountries; remainder++) {
    // assigns the remainder countries randomly starting with the last player
    var randomIndex = Math.floor(Math.random() * countriesIdArray.length);
    newCountryId = countriesIdArray[randomIndex];
    this.players[this.players.length-(remainder+1)].countryArray.push(this.countries[newCountryId]);
    this.countries[newCountryId].owner = this.players[this.players.length-(remainder+1)].playerName;
    countriesIdArray.splice(randomIndex,1);
    console.log("added " + this.countries[newCountryId].countryName + " to " + this.players[this.players.length-(remainder+1)].playerName);
  }
}

// end Turn functions


var Die = function (sides) {
    this.sides = sides || 6;  //Creates n-sided Die Object or 6 sided if no args
}

Die.prototype.roll = function () {
    return Math.floor((Math.random() * this.sides) + 1)//simulate roll
}

function battleRolls (numOfDice) {
    var rolls = []
    for (i = 0; i < numOfDice; i++) {
        var die = new Die();
        rolls.push(die.roll());//new roll into array of rolls
    }
    return rolls;
}

function battle (attackDice, defendDice) {  //pass number of dice for each player

    //create sorted array of rolls for attack and defense
    var attackRolls = battleRolls(attackDice).sort(function(a, b){return b-a});
    var defendRolls = battleRolls(defendDice).sort(function(a, b){return b-a});
    var armiesLost = [0, 0];//array of armiesLost

    for (i = 0; i < Math.min(attackRolls.length, defendRolls.length); i++) {
        if (attackRolls[i] > defendRolls[i]) {
            armiesLost[1] -= 1;//defense loses one army
        } else {
            armiesLost[0] -= 1;//attack loses one army
        }
    }

    return armiesLost;
}

//=====================================================

game1.setup();
console.log(player1.countryArray);

Turn.prototype.movement = function(troopLooser, troopGainer) {
  troopLooser--;
  troopGainer++;
};

Turn.prototype.combat = function(attacker, defender) {
  // This function will execute combat
}


$(function() {

  $('.clickable-space').click(function(){

    if(newTurn.availableTroops > 0){ //add troops to space if there are troops available
      console.log('in the function');
      var spaceClicked = $(this).attr('id'); // select space with click, select country based on ID
      riskCountries[spaceClicked].unitCount++;
      $(this).children("span").text(riskCountries[spaceClicked].unitCount);
      newTurn.availableTroops--;
    }
  });
});
