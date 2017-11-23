import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {users: []}

  }

  componentDidMount() {
    fetch('/index')
      .then(response => response.json())
      .then(section => console.log(section));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <input type="submit" onClick={this.componentDidMount}></input>
      </div>
    );
  }
}

export default App;
