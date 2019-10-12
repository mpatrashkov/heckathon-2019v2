import { observable, action } from "mobx";

class Store {
    @observable location = {
        loaded: false,
        lat: 42,
        lon: 27
    };

    @action updateLocation(newLocation) {
        console.log(1);
        this.location = {
            loaded: true,
            ...newLocation
        }
        console.log(this);
    }
}

export default Store;