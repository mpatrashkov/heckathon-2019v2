import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import UserService from '../services/userServices'
import { inject } from "mobx-react";
import { observer } from "mobx-react";
import {Redirect} from 'react-router-dom'

@inject('store')
@observer
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSumbit = (e) => {
        e.preventDefault();
        Login.userService.loginUser(this.state).then(result => {
            console.log(result)
            this.props.store.updateUserCredentials({
                userId: result.userId,
                username: result.username,
                isAdmin: result.isAdmin
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    static userService = new UserService();

    render() {

        if(this.props.store.userCredentials.username) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div className="body-padding">
                <form onSubmit={this.handleSumbit}>
                    <FormGroup
                        helperText="Enter the username you've used upon registering."
                        label="Username"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="username" placeholder="Enter your username." />
                    </FormGroup>
                    <FormGroup
                        helperText="Enter the password you've used upon registering."
                        label="Password"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="password" type="password" placeholder="Enter your password." />
                    </FormGroup>
                    <div className="center-container">
                        <Button type="submit" large className="bp3-button bp3-intent-primary login-btn" text="Log In" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;