import React, { Component } from "react";
import Header from "./components/Header";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Maps from "./pages/Maps";
  

class App extends Component {
    render() {
        return (
            <div class="app-container">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/maps">
                            <Maps />
                        </Route>
                        <Route exact path="/users">
                            <Header />
                        </Route>
                        <Route exact path="/">
                            <Header />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;