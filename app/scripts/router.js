var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var StoreContainer = require('./components/store.jsx').StoreContainer;
var CartContainer = require('./components/cart.jsx').CartContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart/': 'cart'
  },

  // initialize ???

  index: function(){
    ReactDOM.render(
      React.createElement(StoreContainer, {router: this}),
      document.getElementById('app')
    );
  },

  cart: function(){
    ReactDOM.render(
      React.createElement(CartContainer, {router: this}),
      document.getElementById('app')
    );
  }
});
