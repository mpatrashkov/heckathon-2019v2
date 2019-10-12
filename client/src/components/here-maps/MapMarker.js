import React, { Component } from "react";

class MapMarker extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.marker = new window.H.map.Marker({
            lat: this.props.lat,
            lng: this.props.lon
        }, {
            icon: new window.H.map.Icon(this.props.icon)
        });

        if(this.props.onTap) {
            this.marker.addEventListener('tap', this.props.onTap);
        }
        if(this.props.map) {
            this.props.map.addObject(this.marker);
        }
    }

    componentWillUnmount() {
        if(this.props.map) {
            this.props.map.removeObject(this.marker);
        }
    }

    componentWillUpdate(prevProps) {
        // if(prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
            this.marker.setGeometry(
                new window.H.geo.Point(this.props.lat, this.props.lon)
            );
        // }
    }

    render() {
        return (<></>);
    }
}

export default MapMarker;