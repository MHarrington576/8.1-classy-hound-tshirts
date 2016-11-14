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
        <div key={item.get('name')} className="col-md-4 col-xs-6">
          <div className="shirt-tile">
            <div className="image-container">
              <img className="shirt-image" src={item.get('img')} />
            </div>
            <div className="caption">
              <span className="shirt-name">{item.get('name')}</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="price">${item.get('price')}.00</span>
            </div>

           <form>
             <div className="form-group">
               <input type="number" id="select-quantity" placeholder="How many?"></input>
               <button className="btn btn-primary" onClick={function(){self.props.addToCart(item)}}>Add to Cart</button>
             </div>
           </form>

          </div>
        </div>
      )
    });

    return (
      <div>
        {shirtListing}
      </div>
    )
  }
});

var StoreContainer = React.createClass({
  getInitialState: function(){
    var shirtListing = new models.ShirtCollection();
    var orderCollection = new models.CartItemCollection();

    var cartData = JSON.parse(localStorage.getItem('order'));
    orderCollection.add(cartData);

    shirtListing.add([
      {name: 'Starbucks Shirt', price: 18, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1017px-Starbucks_Corporation_Logo_2011.svg.png'},
      {name: 'Google Shirt', price: 21, img: 'https://pbs.twimg.com/profile_images/762369348300251136/5Obhonwa.jpg'},
      {name: 'Tungsten Shirt', price: 16, img: 'http://periodictable.com/Samples/074.5/s13.JPG'}
    ]);

    return {
      shirtListing: shirtListing,
      orderCollection: orderCollection
    }
  },

  addToCart: function(){
    var orderCollection = this.state.orderCollection;
    var orderItemData = item.toJSON();
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
