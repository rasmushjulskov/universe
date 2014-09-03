# Server

This is where you manage Database CRUD services only for the backend

For quick starting your project you can write sever `fixtures` to insert data into MongoDB:

      if (Collection.find().count() === 0) {
        Collection.insert({
          name: 'G. Andrés Ibarra',
          genre: 'M',
          age: '24'
        });
      }

### Note

When you start a Meteor project, it comes with the `meteor autopublish` package activated. This helps us to not have to worry about Meteor Publish and Subscribe methods for a faster development. 

If the _meteor autopublish_ package is removed, then you'll need to create the respective `Meteor.publish({});` and `Meteor.subscribe({});` methods. 

Your `/server` directory would need to have a `publications.js` file for the publications and it is a good practice to handle the subscriptions in the `router.js` file liek this: 

      Router.configure({
        layoutTemplate: 'layout',
        waitOn: function(){
          return [Meteor.subscribe("collection")];
        }
      });

