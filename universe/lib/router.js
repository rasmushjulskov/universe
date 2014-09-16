Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // wating on subscribtion
  waitOn: function() { return [Meteor.subscribe('notifications')];}
});

Router.map(function() {
  this.route('postsList', {
    path: '/:postsLimit?',
    waitOn: function(){
      var postsLimit = parseInt(this.params.postsLimit) || 5;
      return Meteor.subscribe('posts', {sort: {submitted: -1}, limit: postsLimit});
    },
    data: function() {
      var postsLimit = parseInt(this.params.postsLimit) || 5;
      return {
        posts: Posts.find({}, {sort: {submitted: -1}, limit: postsLimit})
      }
    }
  });
  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id);   }
  });
  this.route('postSubmit', {
    path: '/submit'
  });
  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });
});

var requireLogin = function(pause) {
  if( ! Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});