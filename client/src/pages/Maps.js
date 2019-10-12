import React, { Component } from "react";
import Map from "../components/here-maps/Map";
import { inject, observer } from "mobx-react";
import { Button, Drawer, Classes, Position, ButtonGroup, Icon, FormGroup, InputGroup, Label, ControlGroup, TextArea } from "@blueprintjs/core";
import MapMarker from "../components/here-maps/MapMarker";

@inject("store")
@observer
class Maps extends Component {
    state = {
        drawerIsOpen: false
    }

    constructor(props) {
        super(props);

        this.updateFunc = (update) => {
            this.update = update;
        }
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

    centerMapToUser = () => {
        this.props.store.updateLocation({
            lat: this.props.store.userLocation.lat,
            lon: this.props.store.userLocation.lon
        })

        if(this.update) {
            this.update();
        }
    }

    render() {
        return (
            <div className="maps-page">
                {this.props.store.location.loaded ? (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Map lat={this.props.store.location.lat} lon={this.props.store.location.lon} zoom={11} update={this.updateFunc}>
                            <MapMarker lat={this.props.store.userLocation.lat} lon={this.props.store.userLocation.lon} icon={
                                '<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="black" stroke-width="1" fill="red" /></svg>'
                            }></MapMarker>
                        </Map>
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
                    size={"70%"}
                    title="Add Passage"
                    position={Position.BOTTOM}
                    onClose={this.closeDrawer}>
                    <div className={Classes.DRAWER_BODY}>
                        <div className={Classes.DIALOG_BODY}>
                            <FormGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-title">Title</Label>
                                    <InputGroup className="passage-input" id="text-input" name="passage-title" placeholder="Add Title..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-type">Type</Label>
                                    <InputGroup className="passage-input" id="text-input" name="passage-type" placeholder="Add Type..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-stanf">Stanf</Label>
                                    <InputGroup className="passage-input" id="text-input" name="passage-stanf" placeholder="Add Stanf..." />
                                </ControlGroup>
                                <ControlGroup className="passage-control-group">
                                    <Label className="passage-label" htmlFor="passage-comment">Comment</Label>
                                    <TextArea className="passage-input" name="passage-comment" placeholder="Add Comment..." />
                                </ControlGroup>
                            </FormGroup>
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