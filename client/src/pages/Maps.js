import React, { Component } from "react";
import Map from "../components/here-maps/Map";
import { geolocated } from "react-geolocated";
import { Navbar, Button, Drawer, Alignment, Classes, Position, ButtonGroup, Icon, FormGroup, InputGroup, Label, ControlGroup, TextArea } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Maps extends Component {
    state = {
        drawerIsOpen: false,
        lat: this.props.store.lat
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    centerMapToUser = () => {

    }

    render() {
        console.log(this.state)
        return (
            <div className="maps-page">
                {this.props.store.location.loaded ? (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Map lat={this.props.store.location.lat} lon={this.props.store.location.lon} zoom={11}/>
                    </div>
                ) : (
                        <div>Getting the location data&hellip; </div>
                )}

                <ButtonGroup className="add-passage">
                    <Button type="button" large className="bp3-button bp3-intent-secondary passage-btn" onClick={this.openDrawer}> <Icon icon="add" iconSize={30} /> </Button>
                    <Button type="button" large className="bp3-button bp3-intent-secondary location-btn" onClick={this.centerMapToUser}> <Icon icon="locate" iconSize={30} /> </Button>
                </ButtonGroup>

                <Drawer
                    isOpen={this.state.drawerIsOpen}
                    size={"60%"}
                    title="Add Passage"
                    position={Position.BOTTOM}
                    onClose={this.closeDrawer}>
                    <div className={Classes.DRAWER_BODY}>
                        <div className={Classes.DIALOG_BODY}>
                            <FormGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-title">Title</Label>
                                    <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passage-title" placeholder="Add Title..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-type">Type</Label>
                                    <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passage-type" placeholder="Add Type..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-stanf">Stanf</Label>
                                    <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passage-stanf" placeholder="Add Stanf..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-comment">Comment</Label>
                                    <TextArea onChange={this.handleChange} className="passage-input" name="passage-comment" placeholder="Add Comment..." />
                                </ControlGroup>
                            </FormGroup>
                            <Button type="button" large className="bp3-button bp3-intent-secondary passage-btn" text="Submit Passage"> </Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(Maps);

export default Maps;