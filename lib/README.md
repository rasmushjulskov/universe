# Lib

Files here run before anything else

This directory is suggested for writing a `router.js` file that runs the routing configuration. 

Suggested package: 

        mrt add iron-router

Easy initialization for the `iron-router` package: 

        Router.configure({
          layoutTemplate: 'layout',
          waitOn: function(){
            return [Meteor.subscribe("coll1"), Meteor.subscribe("coll2"), Meteor.subscribe("coll3"), Meteor.subscribe("coll4")];
          }
        });

        Router.map(function() {
          
          // Home
          this.route("home", {path: "/"});
          
          // View with data
          this.route('view1name', {
            path: '/view1/:_id',
            data: function() { return Programas.findOne(this.params._id); }
          });

          // View
          this.route("view2name", {
            path: "/view2root/view2name"
          });
        });