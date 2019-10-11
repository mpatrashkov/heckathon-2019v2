import React, { Component } from "react";
import { Navbar, NavbarDivider, Button, Drawer } from "@blueprintjs/core";

class Header extends Component {
    state = {
        drawerIsOpen: true
    }

    handleClose = () => {
        this.setState({
            drawerIsOpen: false
        })
    }

    openDrawer = () => {
        this.setState({
            drawerIsOpen: true
        })
    }

    render() {
        return (
            <Navbar>
                <Navbar.Group>
                    <Navbar.Heading>FishTracker</Navbar.Heading>
                    <NavbarDivider/>
                    <Button className="bp3-minimal" icon="home" text="Menu" onClick={this.openDrawer} />
                    <Drawer isOpen={this.state.drawerIsOpen} size={Drawer.SIZE_LARGE} onClose={this.handleClose}>
                        <div>
                            123
                        </div>
                    </Drawer>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Header;