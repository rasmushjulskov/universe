# Views

This is where your views are going to be stored and called. 

The way Meteor handles views is by naming it after a `template=""` name and that `template` name should have its `templateWithSameName.js` peer. 

### Good practices

I suggest you to give it a second thought on naming your views as they are going to be the main structure of your application. 

For example, if you are creating a blogging service you may have: 

        /Views
          - /Posts
              -+ post_show.html
              -+ post_show.js
              -+ post_edit.html
              -+ post_edit.js
              -+ posts_index.html
              -+ posts_index.js
              -+ posts_create.html
              -+ posts_create.js

### Handlebars partials

It's time to introduce Meteor's templating system, __Handlebars__. Handlebars is simply HTML, with the addition of three things: _partials, expressions and block helpers._

Partials use the `{{> templateName}}` syntax, and simply tell Meteor to replace the partial with the template of the same name (in our case postItem).

Expressions such as `{{title}}` either call a property of the current object, or the return value of a template helper as defined in the current template's manager (more on this later).

Finally, block helpers are special tags that control the flow of the template, such as `{{#each}}…{{/each}}` or `{{#if}}…{{/if}}`.

#### Handlebars helpers

First you need to create a _manager_ for the template file. The _manager_ needs to be called the same way you call your but with the `*.js` extension. 

Create _Handlebars_ helpers as so: 

        Template.viewName.helpers({
          helperName: function() {
            // Your code here
          }
        });


              