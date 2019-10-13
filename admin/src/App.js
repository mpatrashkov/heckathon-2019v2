import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nodeId: '',
            fish: false,
            temp: 0
        }
    }

    handleSubmit = async () => {
        e.preventDefault()

        let data = await fetch("http://192.168.0.179:9999/node/create/record", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })

        let result = await data.json()
        if(!result.nodeRecord) {
            return null;
        } else {
            return result.nodeRecord;
        }
    }


    render() {
        return (
            <div>
                123
            </div>
        );
    }
}

export default App;