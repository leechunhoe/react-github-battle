var React = require('react');
var ReactDOM = require('react-dom');
require('./index.less');

var MY_PROFILE = {
  name: "Lee Chun Hoe",
  age: 60,
  photo: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/28276643_1792654431040398_6684893520552935441_n.jpg?_nc_cat=0&oh=5c2c075471d1fe91c5e73f25833f3ce2&oe=5B6E83BE",
  description: "I am so old, sorry la",
  friends: ["albert", "beta", "sam", "sa", "ngoo"],
  get new_friends() {
    return this.friends.filter(function(friend) {
      return friend[0] == "s";
  })}
}

// main app
class App extends React.Component {
    render() {
        return (
          <div>
            <Avatar profile={this.props.profile}/>
            <ScreenName name={this.props.profile.name}/>
            <Label profile={this.props.profile}/>
            <FriendList title="My Friends:" friends={this.props.profile.friends}/>
            <FriendList title="My New Friends:" friends={this.props.profile.new_friends}/>
          </div>)
    }
}

var ProfilePic = function(props) {
  return <img height="200px" width="200px" src={props.photo}/>;
}

var ProfileLink = function(props) {
  return <a target="_blank" href={props.link}>{props.name}</a>;
}

class Avatar extends React.Component {
    render() {
      return (<div>
        <ProfilePic photo={this.props.profile.photo} />
        <br/>
        <ProfileLink name={this.props.profile.name} link={this.props.profile.photo}/>
      </div>);
        //return (<img height="200px" width="200px" src={this.props.photo}/>)
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

class FriendList extends React.Component {
  render() {
        return (<div>
            <h3>{this.props.title}</h3>
            <ul>{
                this.props.friends.map(function(friend) {
                  return <li>{friend}</li>;
                })}
            </ul>
          </div>)
    }
}




ReactDOM.render(<App profile={MY_PROFILE}/>, document.getElementById('app'));













