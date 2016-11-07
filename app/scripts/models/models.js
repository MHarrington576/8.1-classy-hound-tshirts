var Backbone = require('backbone');
Backbone.localStorage = require('backbone.localstorage');

var ShirtListing = Backbone.Model.extend({
  idAttribute: '_id'
});

var ShirtListingCollection = Backbone.Collection.extend({
  model: ShirtListing
});

var CartItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var CartItemCollection = Backbone.Collection.extend({
  model: CartItem
  // ,
  // localStorage: new Backbone.localStorage('shirtOrder')
});

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  ShirtListing: ShirtListing,
  ShirtListingCollection: ShirtListingCollection,
  CartItem: CartItem,
  CartItemCollection: CartItemCollection,
  Order: Order,
  OrderCollection: OrderCollection
};
