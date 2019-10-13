import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import UserService from "../services/userServices"
import { inject, observer } from "mobx-react";
import {Redirect} from "react-router-dom"

@inject('store')
@observer
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            username: '',
            firstName: '',
            lastName: ''
        }
    }

    static userService = new UserService();

    handleSubmit = (e) => {
        e.preventDefault();
        Register.userService.registerUser(this.state).then(result => {
            
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

    render() {

        if(this.props.store.userCredentials.username) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div className="body-padding">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        helperText="Enter an email for your account."
                        label="Email"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="email" placeholder="Enter your email." />
                    </FormGroup>
                    <FormGroup
                        helperText="Enter a password for your account."
                        label="Password"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="password" type="password" placeholder="Enter your password." />
                    </FormGroup>
                    <FormGroup
                        helperText="Enter a username for your account."
                        label="Username"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="username" type="text" placeholder="Enter your username." />
                    </FormGroup>
                    <FormGroup
                        helperText="Enter a first name for your account."
                        label="First Name"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="firstName" type="text" placeholder="Enter your first name." />
                    </FormGroup>
                    <FormGroup
                        helperText="Enter a last name for your account."
                        label="Last Name"
                        labelInfo="(required)" >
                        <InputGroup onChange={this.handleChange} id="lastName" type="text" placeholder="Enter your lastName." />
                    </FormGroup>
                    <div className="center-container">
                        <Button type="submit" large className="bp3-button bp3-intent-primary register-btn" text="Register" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;