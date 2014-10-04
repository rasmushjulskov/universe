Stickers = new Meteor.Collection('stickers');

Meteor.methods({
  update: function(ie) {
    Stickers.update({"_id" : ie.id}, {$set: {"top" : ie.X, "left" : ie.Y}});
  },
  add: function(id) {
    Stickers.insert({ "title" : "element2", "top" : 50, "left" : 50});
  }
});

//{ "title" : "element1", "top" : 50, "left" : 50, "_id" : "wZAc6vk7FWSiXeqN9" }