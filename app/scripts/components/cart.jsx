var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var models = require('../models/models');
var TemplateComponent = require('./template.jsx').TemplateComponent;
require('../router');

var OrderComponent = React.createClass({
  render: function(){
    var self = this;

    var orderListing = this.props.orders.map(function(item){
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>1</td>
          <td>00:00</td>
          <td><button className="btn btn-danger" onClick={function(){self.props.removeItem(item)}}>Remove</button></td>
        </tr>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>DEAL EXPIRES IN:</th>
          </tr>
        </thead>
        <tbody>
          {orderListing}
        </tbody>
      </table>
    )
  }
});

var CartContainer = React.createClass({
  getInitialState: function(){
    var orderCollection = new models.CartItemCollection();
    var inCart = JSON.parse(localStorage.getItem('order'));
    orderCollection.add(items);

    return {
      inCart: inCart,
      orderCollection: orderCollection
    }
  },

  linkToHome: function(){
    var router = this.props.router;
    router.navigate(''), {trigger: true};
  },

  linkToCart: function(){
    var router = this.props.router;
    router.navigate('/#cart/'), {trigger: true};
  },

  removeItem: function(){
    var orderCollection = this.state.orderCollection;
    orderCollection.remove(item);
    this.updateCart();
    this.setState({'orderCollection: orderCollection'});
  },

  updateCart: function(){
    var orderCollection = this.state.orderCollection;
    var cartData = JSON.stringify(orderCollection.toJSON());
    localStorage.getItem('orderCollection', orderCollection);
  },

  render: function(){
    return (
      <TemplateComponent>
        <OrderComponent orders={this.state.orders} removeItem={this.removeItem} />
      </TemplateComponent>
    )
  }
});

module.exports = {
  CartContainer: CartContainer
};
