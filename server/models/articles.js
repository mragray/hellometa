Articles = new Meteor.Collection('articles');

Meteor.publish('artciles', function() {
  return Articles.find();
})