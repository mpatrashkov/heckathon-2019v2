import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Geolocation extends Component {
    constructor(props) {
        super(props);
        navigator.geolocation.getCurrentPosition((data) => {
            
            this.props.store.updateLocation({
                lat: data.coords.latitude,
                lon: data.coords.longitude
            })

            this.props.store.updateUserLocation({
                lat: data.coords.latitude,
                lon: data.coords.longitude
            })
        });

        setInterval(() => {
            navigator.geolocation.getCurrentPosition((data) => {
                this.props.store.updateUserLocation({
                    lat: data.coords.latitude,
                    lon: data.coords.longitude
                })
            });
        }, 1500);
    }

    render() {
        return (<></>);
    }
}

export default Geolocation;