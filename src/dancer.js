//Creates and returns a new Dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left , timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node= $('<span class="Dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = Dancer;
Dancer.prototype.step = function(){
  var boundStep = this.step.bind(this);
  setTimeout(boundStep, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function(){
  this.$node.css("left", "0px");
};

Dancer.prototype.runAway = function(){

};

