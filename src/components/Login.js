import React, { Component } from 'react';
import axios from 'axios';
import Main from "./Main";

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            auth_token: '',
            logged_in: false
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
        axios.post("http://localhost:3000/auth_user",{
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            this.setState({
                auth_token: response.data.auth_token
            });

            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                timeout: 1000,
                headers: {'Authorization': 'Bearer '+ this.state.auth_token}
            });

            instance.get('/home')
                .then(response => {
                    if(response.data.logged_in){
                        alert("you have logged in successful");
                        this.setState({logged_in: true});
                    }
                });
        }).catch(function(error){
            console.log(error);
        });

        event.preventDefault();
    }

    render(){
        let component;

        if(this.state.logged_in){
            component = <Main/>;
        }
        else{
            component = (
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
            );
        }
        return(
            <div>
                {component}
            </div>
        );
    }
}

export default Login;