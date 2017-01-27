var Die = function (sides) {
    this.sides = sides || 6;  //Creates n-sided Die Object or 6 sided if no args
}

Die.prototype.roll = function () {
    return Math.floor((Math.random() * this.sides))//simulate roll
}
