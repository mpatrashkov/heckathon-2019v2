import React, { Component } from "react";

class BotItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="container-fluid p-0 m-0">
                    <div className="d-flex justify-content-between">
                        <div>({this.props.bot.lat};{this.props.bot.lon})</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default BotItem;