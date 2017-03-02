var React = require('react');

var MyDiv = React.createClass({
  render: function () {
        // alwasy conditional statement first and then return!!!
        if (this.props.returnUser == true) {
          return (
            <div>
                <h5>Hi <b>{this.props.name}</b> its good to see you again</h5>
                <a href="https://www.google.com/">NOW <b>{this.props.name}</b>, please CLICK!</a>
            </div>
          )
        } else {
          return <h5>Please register NOW!</h5>
        }
  }
});

module.exports = MyDiv;