var nbElements = 50; // Number of stars & sparkles

// CSS Classes available
var shapes = ["sparkle", "star"];
var sizes = ["", "medium", "small"];
var styles = ["", "alt", "alt2"];
var animations = ["pulse", "pulse-1", "pulse-2", "pulse-3"];

// Random generating elements
for (var i = 0; i < nbElements; i++) {
  // Random styles
  var classes = shapes[rand(0, shapes.length)] + " ";
  classes += sizes[rand(0, sizes.length)] + " ";
  classes += styles[rand(0, styles.length)] + " ";
  classes += animations[rand(0, animations.length)];

  // Random position
  var style = "top:" + rand(0, 100) + "%;left:" + rand(0, 100) + "%;";

  $("body").append('<div class="' + classes + '" style="' + style + '"></div>');
}

function rand(min, max) {
  return Math.floor(Math.random() * max + min);
}
