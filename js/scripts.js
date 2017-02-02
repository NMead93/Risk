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
                ["eastern-australia", 1325, 818],
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

//  START TEST FUNCTIONS AND VARIABLES
var currentGame;

var makeElement = function(element, elementId, elementText, elementClasses, targetElement) {
  var newElement = document.createElement(element);
  newElement.id = elementId;
  newElement.className = elementClasses;
  newElement.innerHTML = elementText;
  $(targetElement).append(newElement);
}


var generateList = function(arrayOfCountries) {
  for (var index = 0; index < arrayOfCountries.length; index++) {
    makeElement('div', arrayOfCountries[index].countryId + "-troops", arrayOfCountries[index].countryName + ": " + arrayOfCountries[index].unitCount, "current-country-owned", ".countries-on");

  }
}

var playerArray = [['Sam', 0, 'blue'], ['Derek', 1, '#00ff00'], ['Jeff?', 2, '#0f0f0f']];
var continents = [["Asia", 7], ["Europe", 5], ["North America", 5], ["Australia", 2], ["South America", 2], ["Africa", 3]]

var dummyCountries = [];
var dummyContinents = [];
var dummyPlayers = [];


var playerAssigner = function(playerArray) {
  for (var index = 0; index < playerArray.length; index++) {
    var makePlayer = new Player(playerArray[index][0], playerArray[index][1], playerArray[index][2]);
    dummyPlayers.push(makePlayer);
  }
};

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

countryAssigner(countriesFull); //initializing the game
continentAssigner(continents); //initializing the game


// END TEST FUNCTIONS AND VARIABLES

function Game(countries, continents) {
  // The Game class contains the player objects and the country objects
  this.countries = countries;
  this.players = [];
  // this.currentPlayer = this.players[0];
  this.playing = true;
  this.continents = continents;
  this.phase = 0;
  this.currentPlayer;
  this.playerCounter = 1;
};


function Player(playerName, playerId, playerColor) {
  this.playerName = playerName;
  this.playerId = playerId;
  this.playerColor = playerColor;
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
  this.unitCount = 5;
  this.adjacent = adjacent;
};

// begin

// prototype functions ==========================

Game.prototype.assignment = function(player) { //give troops at beginning of turn
  console.log(this.currentPlayer);
  this.currentPlayer.reinforcements = Math.floor(this.currentPlayer.countryArray.length / 3);
  this.continentChecker(player);
}

Game.prototype.continentChecker = function(player) { //check for continent bonus
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
  for (var i = 0; i < this.countries.length; i++) {
    placeIcon(this.countries[i].countryId, this);
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

Game.prototype.numberOfDice = function(attacking, defending) {            //add adjacency later
  var diceArray = []
  if (attacking.owner != defending.owner && attacking.unitCount > 1 && attacking.adjacent.includes(defending.countryId)) {
  } else {
    alert('select valid country and opponent!')
  }
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
Game.prototype.contiguousOwnershipSearch = function(startPointId, checkPointId) {
  // This function checks to see if there is a path between two country objects via ownership, the countries are passed in as Ids
  var startPoint = this.getCountryObject(startPointId);
  var checkPoint = this.getCountryObject(checkPointId);
  var encountered = [];
  var toCheck = [];

  toCheck.push(startPoint);
  encountered.push(startPoint.countryId);
  var counter = 0;
  while (toCheck.length != 0) {
    counter += 1;
    var current = toCheck.pop();
    console.log(current.countryId + ' current <>  checkpoint ' + checkPoint.countryId);
    if (current.countryId === checkPoint.countryId) {
      console.log("Final result is TRUE");
      return true;
    }
    for (var adjacentIndex = 0; adjacentIndex < current.adjacent.length; adjacentIndex++) {
      var alreadyEncountered = false;
      if (encountered.includes(current.adjacent[adjacentIndex]) === true) {
        alreadyEncountered = true;
      }
      if (alreadyEncountered === false) {
        var counter2 = 0;
        encountered.push(current.adjacent[adjacentIndex]);
        for (var countriesIndex = 0; countriesIndex < this.countries.length; countriesIndex++) {
          counter++;
          if (this.countries[countriesIndex].countryId === current.adjacent[adjacentIndex] && this.countries[countriesIndex].owner === this.currentPlayer.playerName) {
            toCheck.push(this.countries[countriesIndex]);
            counter2++;
          }
        }
      }
    }
  }
  console.log(encountered);
  console.log(toCheck.length);
  console.log("FALSE is the final result");
  console.log(counter);
  return false;
}

Game.prototype.getCountryObject = function(countryId) {
  // utility script for finding the object of a country from the id in the Game.countries array
  for (var index = 0; index < this.countries.length; index++) {
    if (this.countries[index].countryId === countryId) {
      return this.countries[index];
    }
  }
  return "Found Nothing";
}

Game.prototype.checkIfStillActive = function() {
  var notPlaying = true;
  //check if current player still owns a country
  for (var i = 0; i < this.countries.length; i++) {
    if (this.countries[i].owner === this.currentPlayer.playerName) {
      notPlaying = false;
    }
  }

  if (notPlaying) {
    //else mark them inactive
    this.currentPlayer.active = false;
  }
}
//check for winner
Game.prototype.checkGameWinner = function() {
  var inactivePlayerCounter = 0;
  //iterate through and collect number of inactive players
  for (var i = 0; i < this.players.length; i++) {
    if (this.players[i].active === false) {
      inactivePlayerCounter++;
    }
  }
  //if game over, set game object to false
  if (inactivePlayerCounter === this.players.length - 1) {
    this.playing = false;
  }
}

Game.prototype.getGameWinner = function() {
  for (var i = 0; i < this.players.length; i++) {
    if (this.players[i].active === true) {
      return this.players[i].playerName;
    }
  }
}

Game.prototype.getNextActivePlayer = function() {
  var currentPlayerStatus = false;
  var currentPlayerIndex;
  //get current player index in Game.players[]
  for (var i = 0; i < this.players.length; i++) {
    if (this.currentPlayer.playerName === this.players[i].playerName) {
      currentPlayerIndex = i;
      break;
    }
  }
  //loop through Game.players from index of currentPlayer to next active player
  while (!currentPlayerStatus) {
    //set index back to zero if reached end of Game.players
    if (currentPlayerIndex === this.players.length) {
      currentPlayerIndex = 0;
    } else {
      //set next active player as current and break from loop
      if (this.players[currentPlayerIndex].active) {
        this.currentPlayer = this.players[currentPlayerIndex];
        currentPlayerStatus = true;
      }
      currentPlayerIndex++;
    }
  }
}

Game.prototype.checkOwner = function(countryId) {
  if (this.currentPlayer.playerName === (this.getCountryObject(countryId)).owner) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.moveTroops = function(originId, targetId) {
  var origin = this.getCountryObject(originId);
  var target = this.getCountryObject(targetId);
  if (origin.unitCount > 1 && target.unitCount < 100) {
    origin.unitCount--;
    target.unitCount++;
  }
}

//end prototype functions

//begin regular functions

var placeIcon = function(countryId, currentGame) {
  // This function places an icon in the default coordinates in a country, and updates it with the number of troops in the country and the color of the owner.
  var countryIndex;
  var country;
  var playerIndex;
  var player;

  for (var index = 0; index < currentGame.countries.length; index++) {
    if (currentGame.countries[index].countryId === countryId) {
      countryIndex = index;
      country = currentGame.countries[index];
      break;
    }
  }

  for (var index = 0; index < currentGame.players.length; index++) {
    if (currentGame.players[index].playerName === country.owner) {
      playerIndex = index;
      player = currentGame.players[index];
      break;
    }
  }
  var iconNumber = country.unitCount;

  var iconColor = player.playerColor;

  $("#" + countryId + "-icon").remove();
  makeElement('div', countryId + "-icon", iconNumber, "marker-div", ".target-holder");
  var xcoord = 0;
  var ycoord = 0;
  for (var index = 0; index < locations.length; index ++) {
    if (locations[index][0] === countryId) {
      xcoord = locations[index][1]-100;
      ycoord = locations[index][2]-200;
      break;
    }
  }
  $("#" + countryId + "-icon").css({
    top: ycoord + "px",
    left: xcoord + "px",
    'background-color': iconColor
  })
}

function choosePlayer(){
  if(currentGame.playerCounter === (currentGame.players.length)){
    currentGame.playerCounter = 1;
    currentGame.currentPlayer = currentGame.players[0];
  } else {
    currentGame.currentPlayer = currentGame.players[currentGame.playerCounter]
    currentGame.playerCounter++;
  }
}

function checkAdjacentAndOwner(attacker, defender) {
  attackerObject = currentGame.countries[currentGame.getIndex(attacker)];
  defenderObject = currentGame.countries[currentGame.getIndex(defender)];
  if (attackerObject.adjacent.includes(defenderObject.countryId) && attackerObject.owner !== defenderObject.owner && attackerObject.unitCount > 1 && attackerObject.owner === currentGame.currentPlayer.playerName) {
    return true;
  } else {
    return false;
  }
}

function checkIfWinner() {//check for any troops left in defender or attacker
  if (defenderObject.unitCount < 1 || attackerObject.unitCount < 2) {
    return true;
  } else {
    return false;
  }
}

function moveArmies(armyCount) {//change global vars to move attacker armies and owner
  attackerObject.unitCount -= armyCount;
  defenderObject.unitCount = armyCount;
  defenderObject.owner = currentGame.currentPlayer.playerName;
}


//=====================================================

// THIS BEGINS JQUERY

var attacker = "none";
var defender = "none";
var attackerObject;
var defenderObject;
var currentPlayerNames = [];
var currentPlayerColors = [];
var originCountry = "undefined";
var targetCountry = "undefined";


// THIS BEGINS JQUERY

// ========================================================================================================


$(function() {
  currentGame = new Game(dummyCountries, dummyContinents);
  currentGame.buildContinents();

  // start setup step 1 - choose the number of players
  $('#number-form').submit(function(event) {
    event.preventDefault();


    totalPlayers = parseInt($('#number-of-players').val());
    for (var i = 0; i < totalPlayers; i++) {
      $('.player-name').append("<label>Player"+(i+1)+ " name: <br><input class='currentPlayerNames' type='text' id='"+i+"'>");
      $('.player-color').append("<label>Player"+(i+1)+ " color: <br><input type='color' id='color"+i+"'>")
    }
    $('#select-player-quantity').hide();
  })
  // end setup step 1

  // start setup the players step 2 - set the names of the players and call the setup prototype

  $('#name-color-avatar').submit(function(event){  //enter user info
    event.preventDefault();
    for(var i=0;i<totalPlayers;i++){
      currentPlayerNames.push($('#'+i).val());
      currentPlayerColors.push($('#color'+i).val());
    }

    for(var i=0;i<totalPlayers;i++){
      currentGame.players.push(new Player(currentPlayerNames[i], i, currentPlayerColors[i]));
    }

    currentGame.setup();
    currentGame.currentPlayer = currentGame.players[0];
    $("#setup-display").hide();
    // end setup step 2

  })  // end user info

  $('#next-turn').click(function(){
    choosePlayer();
    currentGame.checkIfStillActive();
    currentGame.checkGameWinner();
    if (!currentGame.playing) {
      //run end game celebration
      //Implement celebrations here!
      console.log("The winner is " + currentGame.getGameWinner())
    }

    if (!currentGame.currentPlayer.active) {
      //get next active player and set to currentPlayer
      currentGame.getNextActivePlayer();
    }
    currentGame.phase = 0;
    originCountry = 'undefined';
    targetCountry = 'undefined';
  })

  $('.clickable-space').click(function(){ // this is the interaction between the user and the map
    var spaceClicked = $(this).attr('id');
    if(currentGame.currentPlayer.reinforcements > 0 && currentGame.phase === 0){ //add troops to space if there are troops available
      console.log('in the function');
// select space with click, select country based on ID
      for (i = 0; i < currentGame.countries.length; i++) {
        if (currentGame.countries[i].countryId === spaceClicked) {
          currentGame.countries[i].unitCount++
        }
      }
      $(this).children("span").text(newUnitCount);
      currentGame.currentPlayer.reinforcements--;
    } else if (currentGame.phase === 1) {
      //game.combatflow
      if (attacker === "none") {
        attacker = spaceClicked;
      } else if(attacker !== "none") {
        defender = spaceClicked;
        if(!checkAdjacentAndOwner(attacker, defender)){
          alert("You Fool! Choose a Valid Target")
        } else {
          console.log("To Battle!")
          appendTroopInfo();
          appendDice();
          placeIcon(attackerObject.countryId, currentGame)
          placeIcon(defenderObject.countryId, currentGame)
        }
        attacker = "none";
        defender = "none";
      }
    } else if (currentGame.phase === 2) { // This is the
      var clickedId = $(this).attr('id')
      if (currentGame.checkOwner(clickedId) === true) { // currentPlayer can only select countries they own
        if (originCountry === 'undefined') { // check if originCountry needs assignment
          originCountry = currentGame.getCountryObject(clickedId);
        } else if (originCountry.countryId !== clickedId && targetCountry === 'undefined') { // check if targetCountry needs assignment
          if (currentGame.contiguousOwnershipSearch(originCountry.countryId, clickedId) === true) {
            targetCountry = currentGame.getCountryObject(clickedId);
          } else {
            console.log("The two are not connected");
          }
        } else { // take from the other country and add to the clicked country
          if (clickedId === targetCountry.countryId) {
            currentGame.moveTroops(originCountry.countryId, targetCountry.countryId);
          } else {
            currentGame.moveTroops(targetCountry.countryId, originCountry.countryId);
          }
        }
      } else {
        console.log("you are not the owner");
      }
      if (originCountry != 'undefined' && targetCountry != 'undefined') {
        placeIcon(originCountry.countryId, currentGame);
        placeIcon(targetCountry.countryId, currentGame);
      }
    } else if (currentGame.phase === "setup"){
      console.log('in setup');
      for (i = 0; i < currentGame.countries.length; i++) {
        if (currentGame.countries[i].countryId === spaceClicked && currentGame.currentPlayer.reinforcements > 0) {
          currentGame.countries[i].unitCount++
        } else {
          console.log('not enough reinforcements')
        }
      }
      currentGame.currentPlayer.reinforcements--
      choosePlayer();
      console.log(currentGame.currentPlayer);
    }
  });

  $("#combat-form").submit(function(event) {
    event.preventDefault()
    attackerObject.diceNum = $("#attacker-dice option:selected").val()
    defenderObject.diceNum = $("#defender-dice option:selected").val()
    if (!checkIfWinner()) {//do combat if still able to
      var armiesLost = currentGame.combat(attackerObject.diceNum, defenderObject.diceNum)
      attackerObject.unitCount += armiesLost[0];
      defenderObject.unitCount += armiesLost[1];
      if (defenderObject.unitCount < 1) {//if attacker is winner
        appendTroopsQuantity()//add options from 2 to unitcount - 1(jquery)
        hideBattle();
      }
    }
    placeIcon(attackerObject.countryId, currentGame)
    placeIcon(defenderObject.countryId, currentGame)
    appendDice();
    appendTroopInfo();
    attacker = "none";
    defender = "none";
  })

  $("#move-army").submit(function(event) {
    event.preventDefault()
    var troopsToMove = parseInt($("#army-quantity option:selected").val())
    if(checkIfWinner() && defenderObject.unitCount < 1) {
      moveArmies(troopsToMove);
    }
    placeIcon(attackerObject.countryId, currentGame)
    placeIcon(defenderObject.countryId, currentGame)
    showBattle();
  })

  $("#next-phase").click(function() {
    console.log("in gamephase plus thingy")
    currentGame.phase++;
  });

  function hideBattle() {
    $("#combat-form").hide();
  }

  function showBattle() {
    $("#combat-form").show();
  }

  function appendTroopInfo() {
    $("#selected-attacker").text(attackerObject.countryName);
    $("#selected-defender").text(defenderObject.countryName);
    $("#attacker-troops").text(attackerObject.unitCount);
    $("#defender-troops").text(defenderObject.unitCount);
  }

  function appendDice() {
    $('#attacker-dice').empty()
    $('#defender-dice').empty()
    $('#attacker-dice').append("<option value='1'>One</option>")
    $('#defender-dice').append("<option value='1'>One</option>")
     if (attackerObject.unitCount === 3 && defenderObject.unitCount === 1) {
      $('#attacker-dice').append('<option value="2">Two</option>')
    } else if (attackerObject.unitCount > 3 && defenderObject.unitCount === 1) {
      $('#attacker-dice').append('<option value="2">Two</option>')
      $('#attacker-dice').append('<option value="3">Three</option>')
    } else if (attackerObject.unitCount === 2 && defenderObject.unitCount >= 2) {
      $('#defender-dice').append('<option value="2">Two</option>')
    } else if (attackerObject.unitCount === 3 && defenderObject.unitCount >= 2) {
      $('#attacker-dice').append('<option value="2">Two</option>')
      $('#defender-dice').append('<option value="2">Two</option>')
    } else if (attackerObject.unitCount > 3 && defenderObject.unitCount >= 2) {
      $('#attacker-dice').append('<option value="2">Two</option>')
      $('#attacker-dice').append('<option value="3">Three</option>')
      $('#defender-dice').append('<option value="2">Two</option>')
    }
  }

  function appendTroopsQuantity() {
    $("#army-quantity").empty().append("<option value='1'>One</option>");
    for (var i = 2; i < attackerObject.unitCount; i++) {
      $("#army-quantity").append("<option value='" + i + "'>" + parseInt(i) + "</option>");
    }
  }
});
