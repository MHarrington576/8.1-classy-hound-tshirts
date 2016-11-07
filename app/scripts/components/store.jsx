var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var models = require('../models/models');
var TemplateComponent = require('./template.jsx').TemplateComponent;
require('../router');

var ShirtDisplay = React.createClass({
  render: function(){
    var self = this;
    var shirtListing = this.props.shirtListing.map(function(item){
      return (
        <div key={item.get('shirt')} className="col-md-4">
          <div className="shirt-tile">

            <img src={item.get('img')} />
            <div className="caption">
              <span className="shirt-name">{item.get('name')}</span>
              <span className="price">{item.get('price')}</span>
            </div>

            <form>
              <div className="form-group">
                <input type="number" id="select-quantity" placeholder="0"></input>
                <button className="btn btn-primary" onClick={function(){self.props.addToCart(item)}}>Add to Cart</button>
              </div>
            </form>

          </div>
        </div>
      )
    });
  }
});

var StoreContainer = React.createClass({
  getInitialState: function(){
    var shirtListing = new models.ShirtCollection();
    var orderCollection = new models.CartItemCollection();

    var cartData = JSON.parse(localStorage.getItem('order'));
    orderCollection.add(cartData);

    shirtListing.add([
      {name: 'Test 1', price: 18, img: '...'},
      {name: 'Test 2', price: 21, img: '...'},
      {name: 'Test 3', price: 16, img: '...'}
    ]);

    return {
      shirtListing: shirtListing,
      orderCollection: orderCollection
    }
  },

  addToCart: function(){
    var orderCollection = this.state.orderCollection;
    var orderItemData = item.toJSON();
    // delete item.cid;
    orderCollection.add([orderItemData]);
    this.updateCart();
    this.setState({orderCollection: orderCollection});
  },

  updateCart: function(){
    var orderCollection = this.state.orderCollection;
    var cartData = JSON.stringify(orderCollection.toJSON());
    localStorage.setItem('order', cartData);
  },

  linkToHome: function(){
    var router = this.props.router;
    router.navigate(''), {trigger: true};
  },

  linkToCart: function(){
    var router = this.props.router;
    router.navigate('#/cart/'), {trigger: true};
  },

  render: function(){
    return (
      <TemplateComponent>
        <ShirtDisplay shirtListing={this.state.shirtListing} updateCart={this.updateCart} />
      </TemplateComponent>
    )
  }
});

module.exports = {
  StoreContainer: StoreContainer
}
