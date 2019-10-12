import React, { Component } from "react";
import Header from "./components/Header";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Maps from "./pages/Maps";

import { Provider } from "mobx-react";
import Store from "./store/store";
import Geolocation from "./components/Geolocation";
import Login from "./pages/Login";
  

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Provider store={new Store()}>
                    {/* <DevTools/> */}
                    <Geolocation/>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/maps">
                                <Maps />
                            </Route>
                            <Route exact path="/users">
                                <Header />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;