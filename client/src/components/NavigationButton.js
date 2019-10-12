import React, { Component } from "react";

import {
    Link
} from "react-router-dom";
import { MenuItem, MenuDivider } from "@blueprintjs/core";

class NavigationButton extends Component {
    render() {
        return (
            <>
                <Link to={this.props.route}>
                    <MenuItem
                        icon={this.props.icon} 
                        text={this.props.text} 
                        onClick={this.props.onClick}
                        tagName="span" />
                    {this.props.divider ? <MenuDivider /> : null}
                </Link>
            </>
        );
    }
}

export default NavigationButton;