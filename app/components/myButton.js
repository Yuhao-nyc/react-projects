var React = require('react');

var MyButton = React.createClass({

  render: function () {
       return (
          <div>
               <button onClick={this.props.onClick}>CLICK ME</button>
          </div>
       )
  }
});

module.exports = MyButton;