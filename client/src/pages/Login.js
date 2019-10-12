import React, { Component } from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

class Login extends Component {
    render() {
        return (
            <div className="body-padding">
                <FormGroup
                    helperText="Helper text with details..."
                    label="Label A"
                    labelFor="text-input"
                    labelInfo="(required)" >
                    <InputGroup id="text-input" placeholder="Placeholder text" />
                </FormGroup>
            </div>
        );
    }
}

export default Login;