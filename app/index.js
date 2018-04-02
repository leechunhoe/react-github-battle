var React = require('react');
var ReactDOM = require('react-dom');
require('./index.less');

// main app
class App extends React.Component {
    render() {
        return (<p>Action and reaction, is Newton 3rd law.</p>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));