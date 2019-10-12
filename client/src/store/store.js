import { observable, action } from "mobx";

class Store {
    @observable location = {
        loaded: false,
        lat: 42,
        lon: 27
    };

    @observable userLocation = {
        loaded: false,
        lat: 42,
        lon: 27
    }

    @action updateLocation(newLocation) {
        this.location = {
            loaded: true,
            ...newLocation
        }
    }

    @action updateUserLocation(newLocation) {
        this.userLocation = {
            loaded: true,
            ...newLocation
        }
    }
}

export default Store;