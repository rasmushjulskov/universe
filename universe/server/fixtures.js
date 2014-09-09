if (Posts.find().count() == 0) {
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
}