var newPosX,
    newPosY;

Template.upload.helpers({
  boards: function(){
    return Boards.find();
  },
  stickers: function(){
    return Stickers.find();
  }
});


Template.upload.events({
  'click #uploadSave': function(){
    var pos = {
      X: newPosX,
      Y: newPosY        
    }
    Meteor.call('update', pos, function(error, id) {
      if(error) {
        return alert(error.reason);
      } else {
      }
      //Router.go('postPage', {_id: id});
    }); 
  }
});

Template.upload.rendered = function(){
  // Animates to the current position
  var i =$("#box1");
  TweenLite.to(i, 0.4, {left:i.attr("data-left"), top: i.attr("data-top")});

  var parent = $("#container"),
    startX, startY;

  Draggable.create("#box1, #box2", {
    bounds: parent,
    edgeResistance:0.65,
    throwProps:true,
    onPress:function() {
      //record the starting values so we can compare them later...

      
      startX = this.x,
      startY = this.y        
      console.log(this)
    },
    onDrag:function() {
      newPosX = this.x;
      newPosY = this.y;
    },
    onThrowComplete: function() {
      TweenLite.to("#original", 0.7, {x:this.x, y:this.y, ease:Power2.easeInOut});
    }
  });
/*
  function getMomentaryDirection(target) {
    var x = ThrowPropsPlugin.getVelocity(target, "x"),
        y = ThrowPropsPlugin.getVelocity(target, "y"),
        ratio = Math.abs(x / y),
        direction = [];
    if (ratio > 0.25) { //you can adjust the ratio thresholds to make things more or less sensitive to diagonal movement.
      direction.push((x < 0) ? "left" : "right");
    }
    if (ratio < 4) {
      direction.push((y < 0) ? "up" : "down");
    }
    return direction.join("-");
  }
*/
};