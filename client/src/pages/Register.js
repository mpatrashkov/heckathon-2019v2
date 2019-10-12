import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

class Register extends Component {

    registerSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="body-padding">
                <FormGroup
                    helperText="Enter an email for your account."
                    label="Email"
                    labelInfo="(required)" >
                    <InputGroup placeholder="Enter your email." />
                </FormGroup>
                <FormGroup
                    helperText="Enter a password for your account."
                    label="Password"
                    labelInfo="(required)" >
                    <InputGroup type="password" placeholder="Enter your password." />
                </FormGroup>
                <div className="center-container">
                    <Button type="button" onClick={this.registerSubmit} large className="bp3-button bp3-intent-primary register-btn" text="Register" />
                </div>
            </div>
        );
    }
}

export default Register;