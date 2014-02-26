Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'default'
  });  
  this.route('home', {
    path: '/styleguide',
    template: 'styleguide',
    layoutTemplate: 'default'
  });
  this.route('contact', {
    path: '/contact',
    template: 'contact',
    layoutTemplate: 'default'
  });
});