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

    @observable passageOverlay = {
        isOpened: false,
        message: ''
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

    @action updatePassageOverlay(newOverlay) {
        this.passageOverlay = {
            ...newOverlay
        }
    }
}

export default Store;