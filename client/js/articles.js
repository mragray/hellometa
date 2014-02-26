Articles = new Meteor.Collection('articles');
Meteor.subscribe('articles');

Template.articles.featuredArticles = function() {
  return Articles.find({}, {limit: 3});
}