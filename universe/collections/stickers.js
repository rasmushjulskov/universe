Stickers = new Meteor.Collection('stickers');

Meteor.methods({
  update: function(attr) {
    Stickers.update({"_id" : "wZAc6vk7FWSiXeqN9"}, {$set: {"top" : attr.X, "left" : attr.Y}});
  }
});

//{ "title" : "element1", "top" : 50, "left" : 50, "_id" : "wZAc6vk7FWSiXeqN9" }