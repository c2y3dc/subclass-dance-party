var HobbesDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./lib/images/hobbes.gif" class="HobbesDancer"></img>');
  this.setPosition(top, left);
};

HobbesDancer.prototype = Object.create(Dancer.prototype);
HobbesDancer.prototype.constructor = HobbesDancer;
HobbesDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node;
};