var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <h1>Classy Hound T-Shirts</h1>
        <a className="nav-link" href="#index/">Home</a>
        <a className="nav-link" href="#cart/">Cart</a>
        <div className="col-md-12">

          {this.props.children}

        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
