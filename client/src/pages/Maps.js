import React, { Component } from "react";
import Map from "../components/here-maps/Map";
import { Button, Drawer, Dialog, Classes, Position, ButtonGroup, Icon, FormGroup, InputGroup, Label, ControlGroup, TextArea } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import PassageService from "../services/passageServices"
import NodeService from '../services/nodeServices';
import MapMarker from "../components/here-maps/MapMarker";
import MapCircle from "../components/here-maps/MapCircle";

@inject("store")
@observer
class Maps extends Component {
    constructor(props) {
        super(props);

        this.updateFunc = (update) => {
            this.update = update;
        }
    }

    state = {
        drawerIsOpen: false,
        lat: this.props.store.userLocation.lat,
        lon: this.props.store.userLocation.lon,
        isOpened: false,
        message: '',
        title: '',
        type: '',
        stanf: '',
        nodes: [],
        passages: [],
        mapMode: "all",
        passageTitle: '',
        passageComment: '',
        passageStanf: '',
        passageType: ''
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

        Maps.passageService.addPassages({
            lat: this.props.store.userLocation.lat,
            lon: this.props.store.userLocation.lon,
            comment: this.state.passageComment,
            title: this.state.passageTitle,
            stanf: this.state.passageStanf,
            type: this.state.passageType,
            userId: this.props.store.userCredentials.userId
        }).then(result => {
            if(result) {
                this.setState({
                    drawerIsOpen: false
                })
            }
        })
    }

    centerMapToUser = () => {
        this.props.store.updateLocation({
            lat: this.props.store.userLocation.lat,
            lon: this.props.store.userLocation.lon
        })

        if (this.update) {
            this.update();
        }
    }

    onTap = (node) => {
        this.setState(prevState => ({
            isOpened: !prevState.isOpened,
            message: node.comment || "This Passage Was Found By Our Device",
            title: node.title || "Fish Passage",
            type: node.type || "No Info About Type",
            stanf: node.stanf || "No Info About Stanf"
        }))
    }

    toggleOverlay = () => {
        this.props.store.updatePassageOverlay({ isOpened: false, message: '' })
    }

    changeMapMode(mapMode) {
        this.setState({
            mapMode: mapMode
        });
    }

    static passageService = new PassageService()
    static nodeService = new NodeService()

    render() {
        let circles = [];

        if (this.state.passages) {
            this.state.passages.forEach((passage) => {
                var circle = new window.H.map.Circle({ lat: passage.lat, lng: passage.lon }, 500)
                circle.addEventListener('tap', () => {
                    this.setState(prevState => ({
                        isOpened: !prevState.isOpened,
                        message: passage.comment,
                        title: passage.title
                    }))
                })
                circles.push(circle)
            })
        }

        if (this.state.nodes) {
            this.state.nodes.forEach((node) => {
                if (node.fish === true) {
                    var circle = new window.H.map.Circle({ lat: node.lat, lng: node.lon }, 500)
                    circle.addEventListener('tap', () => {
                        this.setState(prevState => ({
                            isOpened: !prevState.isOpened,
                            message: node.temp,
                            title: "passage.title"
                        }))
                    })
                    circles.push(circle)
                }
            })
        }

        console.log(this.props.store.userCredentials.username)

        return (
            <div className="maps-page">
                {this.props.store.location.loaded ? (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Map lat={this.props.store.location.lat} lon={this.props.store.location.lon} zoom={11} update={this.updateFunc}>
                            <MapMarker lat={this.props.store.userLocation.lat} lon={this.props.store.userLocation.lon} icon={
                                '<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="black" stroke-width="1" fill="red" /></svg>'
                            } />

                            {(this.state.mapMode === "all" || this.state.mapMode === "buoy-data") && this.state.nodes ?
                                this.state.nodes.filter(node => node.fish == true).map(node => (
                                    <MapCircle
                                        lat={node.lat}
                                        lon={node.lon}
                                        size={500}
                                        color="rgba(0, 128, 0, 0.5)"
                                        onTap={() => this.onTap(node)} />)
                                ) : null
                            }
                            {this.state.mapMode === "all" && this.state.passages ?
                                this.state.passages.map(passage => (
                                    <MapCircle
                                        lat={passage.lat}
                                        lon={passage.lon}
                                        size={500}
                                        onTap={() => this.onTap(passage)} />)
                                ) : null
                            }
                            {this.state.mapMode === "buoy-grid" && this.state.nodes ?
                                this.state.nodes.filter(node => node.fish == true).map(node => (
                                    <MapMarker
                                        lat={node.lat}
                                        lon={node.lon}
                                        icon={
                                            '<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="black" stroke-width="1" fill="green" /></svg>'
                                        }
                                        onTap={() => this.onTap(node)} />)
                                ) : null
                            }

                        </Map>
                    </div>
                ) : (
                        <div>Getting the location data&hellip; </div>
                    )}

                <ButtonGroup vertical className="change-map-mode">
                    <Button
                        type="button"
                        large
                        className="bp3-button bp3-intent-primary passage-btn"
                        onClick={() => this.changeMapMode("all")}>
                        <Icon
                            icon="full-stacked-chart"
                            iconSize={27} />
                    </Button>
                    <Button
                        type="button"
                        large
                        className="bp3-button bp3-intent-primary location-btn"
                        onClick={() => this.changeMapMode("buoy-data")}>
                        <Icon
                            icon="layout-skew-grid"
                            iconSize={27} />
                    </Button>
                    <Button
                        type="button"
                        large
                        className="bp3-button bp3-intent-primary location-btn"
                        onClick={() => this.changeMapMode("buoy-grid")}>
                        <Icon
                            icon="layout-grid"
                            iconSize={27} />
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="add-passage">
                    <Button type="button" large className="bp3-button bp3-intent-secondary passage-btn" onClick={this.openDrawer}> <Icon icon="add" iconSize={30} /> </Button>
                    <Button type="button" large className="bp3-button bp3-intent-secondary location-btn" onClick={this.centerMapToUser}> <Icon icon="locate" iconSize={30} /> </Button>
                </ButtonGroup>

                <Dialog isOpen={this.state.isOpened} title={this.state.title || "fish"} canOutsideClickClose={false} onClose={() => this.setState({ isOpened: false })}>
                    <div className={Classes.DIALOG_BODY}>
                        <ul>
                            <li className="dialog-item">Message: {this.state.message}</li>
                            <li className="dialog-item">Type: {this.state.type}</li>
                            <li className="dialog-item">Stanf: {this.state.stanf}</li>
                        </ul>
                        
                    </div>
                </Dialog>

                <Drawer
                    isOpen={this.state.drawerIsOpen}
                    size={"65%"}
                    title="Add Passage"
                    position={Position.BOTTOM}
                    onClose={this.closeDrawer}>
                    <div className={Classes.DRAWER_BODY}>
                        <div className={Classes.DIALOG_BODY}>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <ControlGroup className="passage-control-group">
                                        <Label className="passage-label" htmlFor="passageTitle">Title</Label>
                                        <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passageTitle" placeholder="Add Title..." />
                                    </ControlGroup>
                                    <ControlGroup className="passage-control-group">
                                        <Label className="passage-label" htmlFor="passageType">Type</Label>
                                        <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passageType" placeholder="Add Type..." />
                                    </ControlGroup>
                                    <ControlGroup className="passage-control-group">
                                        <Label className="passage-label" htmlFor="passageStanf">Stanf</Label>
                                        <InputGroup onChange={this.handleChange} className="passage-input" id="text-input" name="passageStanf" placeholder="Add Stanf..." />
                                    </ControlGroup>
                                    <ControlGroup className="passage-control-group">
                                        <Label className="passage-label" htmlFor="passageComment">Comment</Label>
                                        <TextArea onChange={this.handleChange} className="passage-input" name="passageComment" placeholder="Add Comment..." />
                                    </ControlGroup>
                                </FormGroup>
                                <div className="center-container">
                                    <Button type="submit" large className="bp3-button bp3-intent-primary passage-btn" text="Submit Passage" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }

    componentDidUpdate() {
        try {
            Maps.passageService.getAllPassages().then((passages) => {
                this.setState({
                    passages
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        try {
            setInterval(() => {
                Maps.nodeService.getAllNodes().then((nodes) => {
                    this.setState({
                        nodes
                    })
                })
            }, 3000)

            Maps.passageService.getAllPassages().then((passages) => {
                this.setState({
                    passages
                })
            })
        } catch (error) {
            console.log(error)
        }

    }
}

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(Maps);

export default Maps;