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

var riskCountries = ["Alaska", "North West Territory", "Alberta", "Ontario", "Quebec", "Western United States", "Eastern United States", "Central America", "Greenland"]

//=====================================================

$(function() {
  $(".clickable-space").click(function() {
    var spaceClicked = $(this).attr('id');
    console.log(spaceClicked);
  })
})
