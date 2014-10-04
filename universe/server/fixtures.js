// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Universe',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://google.com',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 100
  });

  for (var i = 0; i < 10; i++) {
    Comments.insert({
      postId: telescopeId,
      userId: tom._id,
      author: tom.profile.name,
      submitted: now - i * 3600 * 1000,
      body: 'Interesting project Sacha, can I get involved?',
      commentsCount: 0
    });
  }

  for (var i = 0; i < 32; i++) {
    Posts.insert({
      title: 'Test post #'+i,
      author: tom.profile.name,
      userId: tom._id,
      url: 'http://google.com/?q=test-'+i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0,
      upvoters: [], votes: 0,
    });
  }

  // Adds developer account 
  Accounts.createUser({ username: "rhl", email: "rhjulskov@gmail.com", password: "123456"});
}

if(Boards.find().count() === 0) {
  Boards.insert({
    title: 'First board ever!',
    author: tom.profile.name,
    userId: tom._id,
    url: 'http://google.com/?q=test-'+i,
    submitted: now - i * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0,
  });
  Stickers.insert({
    title: "element1",
    estimatedPrice: 325,
    img: "http://ih0.redbubble.net/image.5758410.2568/sticker,375x360.png",
    top: 50,
    left: 50,
  });
}