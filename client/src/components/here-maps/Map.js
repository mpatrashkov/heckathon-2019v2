import React, { Component } from "react";
import { Overlay } from '@blueprintjs/core'
import { inject, observer } from "mobx-react";

const apiKey = "aFasvoVUtmqMHR4lkN0H4fVUPzJN7nmWKVEkr93oiNg";

@inject("store")
@observer
class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;
        this.passages = this.props.passages
        this.isOpened = false;
        this.message = ''
    }

    toggleOverlay = () => {
        this.isOpened = !this.isOpened
    }

    // TODO: Add theme selection discussed later HERE

    componentDidMount() {
        this.platform = new window.H.service.Platform({
            apikey: apiKey,
            useHTTPS: false
        });


        var defaultLayers = this.platform.createDefaultLayers();
        var container = document.getElementById('here-map');

        this.map = new window.H.Map(container, defaultLayers.vector.normal.map, {
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            zoom: this.props.zoom,
        });

        console.log(this.props)
        this.props.circles.forEach(circle => {
            this.map.addObject(circle)
        });


        var events = new window.H.mapevents.MapEvents(this.map);

        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // var behavior = new window.H.mapevents.Behavior(events);
        // // eslint-disable-next-line
        // var ui = new window.H.ui.UI.createDefault(this.map, layer)
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
            this.map.setCenter({
                lat: this.props.lat,
                lng: this.props.lon
            })
        }

        console.log(this.props)

        this.props.circles.forEach(circle => {
            this.map.addObject(circle)
        });


    }

    

    render() {

        return (
                <div id="here-map" style={{ width: '100%', height: '100%', background: 'grey' }}>
                    {this.props.children}
                </div>
        );
    }
}

export default Map;