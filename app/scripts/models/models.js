var Backbone = require('backbone');
Backbone.localStorage = require('backbone.localstorage');

var Shirt = Backbone.Model.extend({
  idAttribute: '_id'
});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt
});

var CartItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var CartItemCollection = Backbone.Collection.extend({
  model: CartItem
});

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  Shirt: Shirt,
  ShirtCollection: ShirtCollection,
  CartItem: CartItem,
  CartItemCollection: CartItemCollection,
  Order: Order,
  OrderCollection: OrderCollection
};
