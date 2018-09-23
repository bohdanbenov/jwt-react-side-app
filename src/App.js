import React, { Component } from 'react';
import Login from './components/Login';
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
          <div className="App">
              <Header/>
              <Login/>
          </div>
    );
  }
}

export default App;
