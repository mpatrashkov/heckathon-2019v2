import React, { Component } from "react";

import {
    Link
} from "react-router-dom";
import { Button, Divider } from "@blueprintjs/core";

class NavigationButton extends Component {
    render() {
        return (
            <>
                <Link to={this.props.route}>
                    <Button 
                        minimal
                        large
                        alignText="left" 
                        icon={this.props.icon} 
                        text={this.props.text} 
                        onClick={this.props.onClick}
                        style={{width: "100%"}} />
                    {this.props.divider ? <Divider /> : null}
                </Link>
            </>
        );
    }
}

export default NavigationButton;