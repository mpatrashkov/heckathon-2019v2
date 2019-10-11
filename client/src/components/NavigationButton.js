import React, { Component } from "react";

import {
    Link
} from "react-router-dom";
import { Button, Divider } from "@blueprintjs/core";

class NavigationButton extends Component {
    render() {
        return (
            <>
                <Link exact to={this.props.route}>
                    <Button 
                        minimal
                        large
                        alignText="right" 
                        icon={this.props.icon} 
                        text={this.props.text} 
                        onClick={this.props.onClick} />

                    {this.props.divider ? <Divider /> : null}
                </Link>
            </>
        );
    }
}

export default NavigationButton;