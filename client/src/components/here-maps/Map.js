import React, { Component } from "react";
import { Overlay } from '@blueprintjs/core'
import { inject, observer } from "mobx-react";

const apiKey = "aFasvoVUtmqMHR4lkN0H4fVUPzJN7nmWKVEkr93oiNg";

@inject("store")
@observer
class Map extends Component {
    state = {
        mounted: false
    }

    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;
        this.passages = this.props.passages
        this.isOpened = false;
        this.message = ''
        
        this.mapContainer = React.createRef();
    }

    toggleOverlay = () => {
        this.isOpened = !this.isOpened
    }

    // TODO: Add theme selection discussed later HERE

    componentDidMount() {
        this.props.update(() => {
            this.map.setCenter({
                lat: this.props.lat,
                lng: this.props.lon
            })
        })
        this.platform = new window.H.service.Platform({
            apikey: apiKey,
            useHTTPS: false
        });


        var defaultLayers = this.platform.createDefaultLayers();

        this.map = new window.H.Map(this.mapContainer.current, defaultLayers.vector.normal.map, {
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            zoom: this.props.zoom,
        });

        this.props.circles.forEach(circle => {
            this.map.addObject(circle)
        });


        var events = new window.H.mapevents.MapEvents(this.map);

        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // var behavior = new window.H.mapevents.Behavior(events);
        // // eslint-disable-next-line
        // var ui = new window.H.ui.UI.createDefault(this.map, layer)

        this.setState({
            mounted: true
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon){
            this.map.setCenter({
                lat: this.props.lat,
                lng: this.props.lon
            })
        }

        this.props.circles.forEach(circle => {
            this.map.addObject(circle)
        });
    

    }

    

    render() {

        return (
            <div id="here-map" ref={this.mapContainer} style={{width: '100%', height: '100%', background: 'grey' }}>
                {this.state.mounted && React.Children.toArray(this.props.children).map(child => {
                    let _map = this.map;
                    return React.cloneElement(child, {
                        map: _map
                    })
                })}
            </div>
        );
    }
}

export default Map;