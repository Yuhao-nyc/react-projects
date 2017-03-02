var React = require('react');
var axios = require('axios');


var JsonDiv = React.createClass({

      getInitialState: function() {
        return {
          jobs: []
        }
      },

      componentDidMount: function() {
        var _this = this;
        this.serverRequest =
          axios
            .get(this.props.url)
            .then(function(result) {
              _this.setState({
                jobs: result.data.jobs
              });
            })
      },

      componentWillUnmount: function() {
        this.serverRequest.abort();
      },

      render: function() {
        return (
          <div>
             <h1>Bunch of Lists</h1>
             {this.state.jobs.map(function(data, index) {
                   return (
                   <div key={index}>
                      <div className="card" style={{marginBottom: 30}}>
                        <div className="card-header">
                          Featured
                        </div>
                        <div className="card-block">
                          <h4 className="card-title">{data.company_name}</h4>
                          <p className="card-text">{data.description}</p>
                          <p className="card-text">{data.title}</p>
                          <p className="card-text">{data.term}</p>
                          <p className="card-text">Remote Working: {data.remote ? 'Yes' : 'No'}</p>
                          <p className="card-text">{data.featured_text}</p>
                          <p className="card-text">Job Id: {data.hashid}</p>
                          <a href={data.url} className="btn btn-primary">Go Check Out!</a>
                        </div>
                      </div>
                    </div>
                   )
                })}
          </div>
        )
      }

    });

module.exports = JsonDiv;