import React, { Component } from "react";

const apiKey = "aFasvoVUtmqMHR4lkN0H4fVUPzJN7nmWKVEkr93oiNg";

class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;
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
    }

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '400px', background: 'grey' }} />
        );
    }
}

export default Map;