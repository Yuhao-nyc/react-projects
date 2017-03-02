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
             <br />
             <br />
             <div className="jumbotron">
                <h3 className="display-3">Job Listing Tool</h3>
                <p className="lead">This is a simple job listing streaming tool build with React.JS. Parsing JSON data using React.JS and Axios.</p>
                <hr className="my-4" />
                <p>Its shows you all the latest live job listings from CodePen job lists databases.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="https://github.com/Yuhao-nyc/react-projects" role="button">Learn more</a>
                </p>
             </div>
             <h6></h6>
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