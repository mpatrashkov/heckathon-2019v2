import React, { Component } from "react";
import BotItem from "./BotItem";

class BotList extends Component {
    onRandomClick = () => {
        let promises = [];
        
        for(let bot of this.props.bots) {
            let fish = Math.round(Math.random()) == 1;
            let temp = Math.random() * (30 - 20) + 20;
            console.log(temp, fish);

            promises.push(
                fetch("http://192.168.1.129:9999/node/create/record", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nodeId: bot._id,
                        fish: fish,
                        temp: temp
                    })
                })
            );
        }

        Promise.all(promises).then(() => {
            setTimeout(this.onRandomClick, 3000);
        })
    }

    render() {
        return (
            <>
                <a onClick={this.onRandomClick} className="btn w-100 btn-primary mb-2 text-white">Simulate</a>
                <ul className="list-group">
                    {this.props.bots.map(bot => 
                        <BotItem key={bot._id} bot={bot}/>
                    )}
                </ul>
            </>
        );
    }
}

export default BotList;