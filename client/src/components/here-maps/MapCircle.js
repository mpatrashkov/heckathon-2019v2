import React, { Component } from "react";

class MapCircle extends Component {
    constructor(props) {
        super(props);

        const defaultColor = "rgba(20, 20, 128, 0.2)";

        this.circle = new window.H.map.Circle({
            lat: this.props.lat,
            lng: this.props.lon
        }, this.props.size, {
            style: {
                strokeWidth: 1,
                fillColor: this.props.color || defaultColor
            }
        });

        this.circle.addEventListener('tap', this.props.onTap);
        console.log(this.props.color || defaultColor);
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
        if(this.props.map) {
            this.props.map.removeObject(this.circle);
        }
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