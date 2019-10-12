import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

class Home extends Component {

    render() {
        return (
            <div className="body-padding center-container">
                <h1 style={{marginBottom: "0"}}>FishTracker Beta</h1>
                <h3 style={{marginTop: "0"}}>This is the first beta.</h3>
            </div>            
        );
    }
}

export default Home;