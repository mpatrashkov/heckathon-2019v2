import React, { Component } from "react";
import { Navbar, Button, Drawer, Alignment, Classes, Position, Menu } from "@blueprintjs/core";
import NavigationButton from "./NavigationButton";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

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
                        <Link className="no-decoration" to="/"><img src={logo} alt="logo" /></Link>
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
                            <NavigationButton route="/maps" icon="map" text="Maps" divider onClick={this.closeDrawer} />
                            {
                                this.props.store.userCredentials.username ? (
                                    <NavigationButton route="#" icon="log-out" onClick={(e) => { e.preventDefault(); localStorage.clear(); window.location.href = "/" }} divider text="Log out" />
                                ) : (
                                        <>
                                            <NavigationButton route="/login" icon="log-in" text="Log in" divider onClick={this.closeDrawer} />
                                            <NavigationButton route="/register" icon="new-person" text="Register" divider onClick={this.closeDrawer} />
                                        </>
                                    )
                            }
                        </Menu>
                    </div>
                </Drawer>
            </Navbar>
        );
    }
}

export default Header;