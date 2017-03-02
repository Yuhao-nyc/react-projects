var React = require('react');
var ReactDOM = require('react-dom');
var MyDiv = require('./components/myDiv');
var MyButton = require('./components/myButton');
var JsonDiv = require('./components/jsonRender');


var userAge = 19;

var habitArray = ['eat', 'sleep', 'drink', 'repeat'];

//TODO divide all scripts into COMPONENTS
//React using keys to keep track of the sequence
var habitsList = habitArray.map(function(list, i) {
    return <li key={'myhabits_'+i}>{list}</li>
})

var globalStyles = {
    color: '#f9f9f9',
    border: '1px solid #ddd',
    fontSize: 30,
}

//render variables && If you want to create a list of JSX elements
/*var todoList = (
    <ul>
        <li>Algorithms</li>
        <li>Angular 2</li>
        <li>React.JS</li>
        <li>Data structure</li>
        <li>Time Complexity</li>
    </ul>
)

ReactDOM.render(
    todoList,
    document.getElementById('list')
)
*/

//TODO
function randomColor() {
    return Math.random() < 0.5 ? 'red' : 'green';
}

function changeColor(e) {
    e.target.innerHTML = 'clicked';
    e.target.style.color = 'red';
}

if (userAge >= 18 ) {
  var warnMessage = (
      'Enjoy'
  )
} else {
  var warnMessage = (
     'Please leave NOW!'
  )
}

var adult = userAge < 18;

var userImg = [
      {
          name: 'empty user',
          title: "your profile picture",
          alt: "default empty profile picture",
          src: "http://placehold.it/60x60"
      },
      {
          name: 'Adam',
          title: "Adam profile picture",
          alt: "Adam empty profile picture",
          src: "http://placehold.it/60x60"
      },
      {
          name: 'Bob',
          title: "Bob profile picture",
          alt: "Bob empty profile picture",
          src: "http://placehold.it/60x60"
      },
      {
          name: 'Carol',
          title: "Carol profile picture",
          alt: "Carol empty profile picture",
          src: "http://placehold.it/60x60"
      },
]

/*var ProfilePage = React.createClass({
  // this refers to the instructions object being passed to React.createClass. this has two properties: user_name and render
  // identifying and referring to the object that we’re currently working with
  user_name: 'Yuhao',

  ban: function() {
      alert('You are banned from our system!')
  },

  handleClick: function(e) {
      e.target.innerHTML = 'oh you did it!'
  },

  //default setup props if the prop is none, not empty
  getDefaultProps: function () {
    return {
        text: 'its just a button!'
    }
  },

  render: function () {
    var user = userImg[0];

    //stringfy and defining the props or can use it directly
    var stringProps = JSON.stringify(this.props);

    //If a JSX expression takes up more than one line, then you should wrap the multi-line JSX expression in parentheses. JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a div.
    //a multi-line JSX expression should always be wrapped in parentheses!
    return (
        <div className="small">
            <MyDiv name="Dan" returnUser={true}/>

            <br />
            <h1>Hi hello {this.user_name}, its my {2+5}.{Math.PI.toFixed(6)} times saw you</h1>
            {!adult && <p>You will see this if you are older than 18</p>}
            <h3>{warnMessage}</h3>
            <h1>{user.name}</h1>
            <div onClick={this.ban} style={globalStyles}><img src={user.src} alt={user.alt} title={user.title}/></div>
            <ul>{habitsList}</ul>
            <button onClick={changeColor}>CHANGE HERE</button>
            <br /><br />
            <div style={{color: 'blue'}}>{stringProps}</div>
            <h4>the intern is graduate from <b>{this.props.info}</b> and his degree is <b>{this.props.myProp} And that it a {this.props.text}</b></h4>
            <br />

            <MyButton onClick={this.handleClick}/>
        </div>
    )
  }
});

//props is by giving component an attribute
ReactDOM.render(
	<ProfilePage myProp="Master" info="NYU" />,
    document.getElementById('app')
)*/


/*var ProfileApp = React.createClass({
    getInitialState: function() {
       return {
         name: 'Admin',
         user_name: 'admin',
         password: 12345,
         location: 'New York',
         super_admin: 'No'
       }
    },

    changePower: function() {
      var power = this.state.super_admin == 'No' ? 'High' : 'No';
      this.setState({super_admin: power});
    },

    render: function() {
      return (
        <div>
            <h1>{this.state.name}</h1>
            <h5>You have <b>{this.state.super_admin}</b> privilege</h5>
            <button onClick={this.changePower}>Switch IT!</button>
        </div>
      )
    }
})

ReactDOM.render(
    <ProfileApp />,
    document.getElementById('profile-app')
)*/

var JobApp = React.createClass({
    render: function() {
        return (
            <div>
                 <JsonDiv url="https://codepen.io/jobs.json"/>
            </div>
        )
    }
})

ReactDOM.render(
    <JobApp />,
    document.getElementById('jobs')
)