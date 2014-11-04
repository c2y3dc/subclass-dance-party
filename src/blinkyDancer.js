

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="BlinkyDancer"></span>');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

