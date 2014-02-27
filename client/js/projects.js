Projects = new Meteor.Collection('projects');

Template.projects.featuredProjects = function () {
  return Projects.find({featured: true}, {limit: 10});
};

// Template.projects.subProjects = function () {
//   return Projects.find({featured: false}, {limit: 20});
// };

Meteor.subscribe("projects");