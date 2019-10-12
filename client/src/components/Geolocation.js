import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { geolocated } from "react-geolocated";

@inject("store")
@observer
class Geolocation extends Component {
    constructor(props) {
        super(props);
        navigator.geolocation.getCurrentPosition((data) => {
            console.log(data);
            this.props.store.updateLocation({
                lat: data.coords.latitude,
                lon: data.coords.longitude
            })
        });
    }

    render() {
        return (<></>);
    }
}

export default Geolocation;