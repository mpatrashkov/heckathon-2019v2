import React, { Component } from "react";
import { Navbar, Button, Drawer, Alignment, Classes, Position, Menu } from "@blueprintjs/core";
import NavigationButton from "./NavigationButton";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Header extends Component {
    state = {
        drawerIsOpen: false
    }

    closeDrawer = () => {
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
                    <Navbar.Heading>
                        <b>FishTracker</b>
                        {/* <b>{this.props.store.location.lat}</b> */}
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button minimal icon="menu" onClick={this.openDrawer} />
                </Navbar.Group>

                <Drawer 
                    isOpen={this.state.drawerIsOpen} 
                    size={"80%"} 
                    title="Navigation Menu"
                    position={Position.LEFT}
                    onClose={this.closeDrawer}>
                    <div className={Classes.DRAWER_BODY}>
                        <Menu>
                            <NavigationButton route="/" icon="home" text="Home" divider onClick={this.closeDrawer} />
                            <NavigationButton route="/login" icon="log-in" text="Log in" divider onClick={this.closeDrawer} />
                            <NavigationButton route="/logout" icon="log-out" text="Log out" divider onClick={this.closeDrawer} />
                            <NavigationButton route="/maps" icon="map" text="Maps" divider onClick={this.closeDrawer} />
                            <NavigationButton route="/add" icon="series-add" text="Add data" onClick={this.closeDrawer}/>
                        </Menu>
                    </div>
                </Drawer>
            </Navbar>
        );
    }
}

export default Header;