import React, { Component } from "react";
import Map from "../components/here-maps/Map";
import { geolocated } from "react-geolocated";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Maps extends Component {
    render() {
        return (
            <div>
                <Map lat={this.props.store.location.lat} lon={this.props.store.location.lon} zoom={11}/>
            </div>
        );
    }
}

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(Maps);

export default Maps;