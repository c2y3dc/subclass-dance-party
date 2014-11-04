var TitanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./lib/images/titan.gif" class="TitanDancer"></img>');
  this.setPosition(top, left);
  this.$node.css("opacity", .6)
            .css("width", "10%");
  this.step();
};

TitanDancer.prototype = Object.create(Dancer.prototype);
TitanDancer.prototype.constructor = TitanDancer;
TitanDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css("transform", "rotate(90deg)");
};
