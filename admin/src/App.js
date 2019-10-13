import React, { Component } from "react";
import BotList from "./components/BotList";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "42.5",
            lon: "27.5",
            bots: []
        }
    }

    async componentDidMount() {
        let data = await fetch("http://192.168.43.27:9999/node/get/nodes");
        let result = await data.json();

        let nodes = result.nodes;
        this.setState(prev => ({
            bots: [...prev.bots, ...nodes]
        }));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let data = await fetch("http://192.168.43.27:9999/node/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lat: this.state.lat,
                lon: this.state.lon
            })
        })

        let result = await data.json()
        if (!result.node) {
            return null;
        } else {
            this.setState(prev => ({
                bots: [...prev.bots, result.node]
            }));

            return result.node;
        }
    }

    handleActivate = async () => {
        let data = await fetch("http://192.168.43.27:9999/node/create/record", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nodeId: "5da2d327ed7d8d65f49f2980",
                fish: true,
                temp: 20
            })
        })

    }

    handleDeactivate = async () => {
        let data = await fetch("http://192.168.43.27:9999/node/create/record", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nodeId: "5da2d327ed7d8d65f49f2980",
                fish: false,
                temp: 22
            })
        })
    }

    render() {
        let pathname = window.location.pathname;
        if (pathname == "/") {
            return (
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="lat-input">Lat</label>
                            <input name="lat" onChange={this.handleChange} type="text" className="form-control" id="lat-input" placeholder="Lat" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Lon</label>
                            <input name="lon" onChange={this.handleChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Lon" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>

                    <div className="mt-5">
                        <BotList bots={this.state.bots} />
                    </div>
                </div>
            );
        } else if (pathname == "/start") {
            return (
                <div className="btnGroup">
                    <button onClick={this.handleActivate}>Activate</button>
                    <button onClick={this.handleDeactivate}>Deactivate</button>
                </div>
            )
        }


    }
}

export default App;