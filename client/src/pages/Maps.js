import React, { Component } from "react";
import Map from "../components/here-maps/Map";
import { geolocated } from "react-geolocated";

class Maps extends Component {
    render() {
        return (
            <div>
                {this.props.coords ? (
                    <Map lat={this.props.coords.latitude} lon={this.props.coords.longitude} zoom={11}/>
                ) : (
                     <div>Getting the location data&hellip; </div>
                )}
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Maps);