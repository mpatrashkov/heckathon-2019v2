import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

class Login extends Component {

    loginSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="body-padding">
                <FormGroup
                    helperText="Enter the email you've used upon registering."
                    label="Email"
                    labelInfo="(required)" >
                    <InputGroup placeholder="Enter your email." />
                </FormGroup>
                <FormGroup
                    helperText="Enter the password you've used upon registering."
                    label="Password"
                    labelInfo="(required)" >
                    <InputGroup type="password" placeholder="Enter your password." />
                </FormGroup>
                <div className="center-container">
                    <Button type="button" onClick={this.loginSubmit} large className="bp3-button bp3-intent-primary login-btn" text="Log In" />
                </div>
            </div>
        );
    }
}

export default Login;