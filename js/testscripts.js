var makeElement = function(element, elementId, elementText, elementClasses, targetElement) {
  var newElement = document.createElement(element);
  newElement.id = elementId;
  newElement.className = elementClasses;
  newElement.innerHTML = elementText;
  $(targetElement).append(newElement);
}
var locations = [["nw-territory", 500, 420],
                ["alberta", 431, 486],
                ["ontario", 488, 461],
                ["quebec", 575, 463],
                ["greenland", 679, 383],
                ["western-united-states", 413, 538],
                ["e-us", 549, 547],
                ["central", 470, 603],
                ["venezuela", 573, 691],
                ["brazil", 652, 747],
                ["peru", 597, 764],
                ["argentina", 582, 800],
                ["wstralia", 1250, 773],
                ["estralia", 1283, 766],
                ["newguinea", 1307, 705],
                ["indonesia", 1199, 714],
                ["siam", 1148, 630],
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
                ["afghan", 1000, 534],
                ["ukraine", 945, 481],
                ["scndnva", 863, 450],
                ["iceland", 792, 408],
                ["uk", 793, 470],
                ["weurope", 792, 538],
                ["ukrane", 886, 530],
                ["neurope", 897, 493],
                ["nafrica", 802, 646],
                ["egypt", 915, 594],
                ["eafrica", 960, 651],
                ["congo", 898, 700],
                ["safrica", 891, 788],
                ["mdgscr", 972, 746],
                ["meast", 995, 568]]

var createIdOnClick = function(event) {
  counter+=1
  console.log(counter);
  var coordsId = $(this).attr('id');
  makeElement('div', coordsId, coordsId + ": (" + event.pageX + ", " + event.pageY + ")", "soldier-coordinates", ".target-holder");
  console.log("(" + event.pageX + ", " + event.pageY + ")");
}

var placeIcon = function() {
  console.log("function");
  console.log($(this));
  var coordsId = $(this).attr('id');
  console.log(coordsId);
  makeElement('div', coordsId + "-icon", "XX", ".marker-div", "target-holder");
  var xcoord = 0;
  var ycoord = 0;
  for (var index = 0; index < locations.length; index ++) {
    if (locations[index][0] === coordsId) {
      xcoord = locations[index][1];
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

$(document).ready(function() {
  $('.clickable-space').click(function() {
    placeIcon();
  });
});
