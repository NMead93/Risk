// Main Classes

function GameBoard(countries, players) {
  this.countries = countries;
  this.players = players;
};

function Player(playerName, playerId) {
  this.playerName = playerName;
  this.playerId = playerId;
  this.reinforcements = 0;
  this.countryArray = [];
};

function Country(countryName, countryId, continent, adjacent) {
  this.countryName = countryName;
  this.countryId = countryId;
  this.continent = continent;
  this.owner;
  this.unitCount = 0;
  this.adjacent = adjacent;
};

function Turn(currentGame) {
  this.currentGame = currentGame;
  this.stage = 0;
};
