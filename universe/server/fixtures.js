if (Posts.find().count() == 0) {
/*
  Posts.insert({
    title: 'Introducing iPhon 6',
    author: 'Apple',
    url: "http://www.apple.com"
  });

  Posts.insert({
    title: 'Introducing iPhone 6 plus',
    author: 'Apple',
    url: "http://www.apple.com"
  });
  
  Posts.insert({
    title: 'Introducing iWatch',
    author: 'Apple',
    url: "http://www.apple.com"
  });
*/
  var now = new Date().getTime();

  // Create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman'}
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope',
    submitted: now - 7 * 3600 * 1000
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    aubmitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sache.profile.name,
    submitted: now - 3 * 3600 * 100,
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000
  });

  Posts.insert({
    title: 'the Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000
  });
}
