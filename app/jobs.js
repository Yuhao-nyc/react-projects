var React = require('react');
var ReactDOM = require('react-dom');
var PriceApp = require('./components/priceApp');

var Prices = React.createClass({

  getDefaultProps: function () {
    return {
        text: 'its just a button!'
    }
  },

  render: function () {

    return (
        <div>
            <JsonDiv url="https://codepen.io/jobs.json"/>
        </div>
    )
  }
});

ReactDOM.render(
	<Prices />,
    document.getElementById('jobs')
)
