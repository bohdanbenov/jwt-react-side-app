import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'email' ? target.value : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Your email: ' + this.state.email + ' Your password: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <div>
              <form onSubmit={this.handleSubmit}>
                  <label>
                      Email:
                      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </label>
                  <br/>
                  <br/>
                  <label>
                      Password:
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Login" />
              </form>
          </div>
      </div>
    );
  }
}

export default App;
