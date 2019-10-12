import React, { Component } from "react";
import { FormGroup, InputGroup, Button, Text } from "@blueprintjs/core";

class Home extends Component {

    render() {
        return (
            <div className="body-padding center-container">
                <Text ellipsize={true} tagName="h1">
                    FishTracker Beta
                </Text>
            </div>            
        );
    }
}

export default Home;