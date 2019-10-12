import React, { Component } from "react";

class MapCircle extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.circle = new window.H.map.Circle({
            lat: this.props.lat,
            lng: this.props.lon
        }, this.props.size);

        this.circle.addEventListener('tap', this.props.onTap);

        if(this.props.map) {
            this.props.map.addObject(this.circle);
            console.log(this.circle)
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        //TODO: Remove object
    }

    componentWillUpdate(prevProps) {
        // if(prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
            // this.marker.setGeometry(
            //     new window.H.geo.Point(this.props.lat, this.props.lon)
            // );
        // }
    }

    render() {
        return (<></>);
    }
}

export default MapCircle;