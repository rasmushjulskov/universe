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
    $(".box").each(function(){

      var pos = {
        id: $(this).attr("data-id"),
        X: $(this).attr("data-top"),
        Y: $(this).attr("data-left")    
      }
    
      Meteor.call('update', pos, function(error, id) {
        if(error) {
          return alert(error.reason);
        } else {
        }
        //Router.go('postPage', {_id: id});
      }); 
    });
  },
  'click #reset': function(){
    $(".box").each(function(){
      var pos = {
        id: $(this).attr("data-id"),
        X: 0,
        Y: 0    
      }
      Meteor.call('update', pos, function(error, id) {
        if(error) {
          return alert(error.reason);
        } else {
        }
        //Router.go('postPage', {_id: id});
      }); 
    });
  },
  'click #addElement': function(){
    Meteor.call('add', function(error, id) {
      if(error) {
        return alert(error.reason);
      }
    }); 
  }
});


Template.upload.rendered = function(){
  var overlapThreshold = "0%"; 
  var droppables = $(".box");

  function onDrop(dragged, dropped) {
    TweenMax.fromTo(dropped, 0.1, {opacity:1}, {opacity:0, repeat:3, yoyo:true});
  }

  // Animates to the current position
  $(".box").each(function(){
    TweenLite.to($(this), 0.4, {left: $(this).attr("data-left"), top: $(this).attr("data-top")});
  });
  

  var parent = $("#container"),
    startX, startY;

  Draggable.create(".box", {
    bounds: parent,
    edgeResistance:0.8,
    throwProps:true,
    onPress:function() {
      
      startX = this.x,
      startY = this.y        
    },
    onDrag:function(e) {
      var i = droppables.length;
      while (--i > -1) {
        if (this.hitTest(droppables[i], overlapThreshold)) {
          $(droppables[i]).addClass("highlight");
        } else {
          $(droppables[i]).removeClass("highlight");
        }
       
       /* ALTERNATE TEST: you can use the static Draggable.hitTest() method for even more flexibility, like passing in a mouse event to see if the mouse is overlapping with the element...
       if (Draggable.hitTest(droppables[i], e) && droppables[i] !== this.target) {
         $(droppables[i]).addClass("highlight");
       } else {
         $(droppables[i]).removeClass("highlight");
       }
       */
      }
      
      newPosX = this.x;
      newPosY = this.y;
      console.log($(this));
      $(this).find(".posX").html(this.x);
      $(this).find(".posY").html(this.y);
      $(this).attr("data-left", this.x);
      $(this).attr("data-top", this.y);
    },
    onDragEnd:function(e) {
      var i = droppables.length;
      while (--i > -1) {
        if (this.hitTest(droppables[i], overlapThreshold)) {
          onDrop(this.target, droppables[i]);
        }
      }
    },
    onThrowComplete: function() {
      TweenLite.to("#original", 0.7, {x:this.x, y:this.y, ease:Power2.easeInOut});
    }
  });

/*  if(Meteor.isClient){
    Deps.autorun(function(){
      var i = Stickers.findOne({postId: "wZAc6vk7FWSiXeqN9"});
    
      var left = i.left;
      var top = i.top;
      alert("wokr")
      TweenLite.to(i, 0.4, {left: left, top: top});
    });
  }*/
  $("input[name=scale]").change(function(){
    TweenLite.to($("#container"), 1,{scale: $(this).val()});
  });
  $("input[name=rotate]").change(function(){
    TweenLite.to($("#container"), 1,{rotation: $(this).val()});
  });
  $("input[name=skewX]").change(function(){
    TweenLite.to($("#container"), 1,{skewX: $(this).val()});
  });
  $("input[name=skewY]").change(function(){
    TweenLite.to($("#container"), 1,{skewY: $(this).val()});
  });
};
