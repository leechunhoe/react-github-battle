var React = require('react');
var ReactDOM = require('react-dom');
require('./index.less');

var MY_PROFILE = {
  name: "Lee Chun Hoe",
  age: 60,
  photo: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/28276643_1792654431040398_6684893520552935441_n.jpg?_nc_cat=0&oh=5c2c075471d1fe91c5e73f25833f3ce2&oe=5B6E83BE",
  description: "I am so old, sorry"
}

// main app
class App extends React.Component {
    render() {
        return (
          <div>
            <Avatar photo={this.props.profile.photo}/>
            <ScreenName name={this.props.profile.name}/>
            <Label profile={this.props.profile}/>
          </div>)
    }
}

class Avatar extends React.Component {
    render() {
        return (<img height="200px" width="200px" src={this.props.photo}/>)
    }
}

class Label extends React.Component {
    render() {
        return (<p>Description: My age is {this.props.profile.age}. {this.props.profile.description}</p>)
    }
}

class ScreenName extends React.Component {
    render() {
        return (<h1>{this.props.name}</h1>)
    }
}

ReactDOM.render(<App profile={MY_PROFILE}/>, document.getElementById('app'));