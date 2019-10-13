import React, { Component } from "react";
import { Text, Card } from "@blueprintjs/core";

class Home extends Component {

    render() {
        return (
            <div className="body-padding center-container">
                <Card className="w-100 custom-card">
                    <h3 className="my-0 mb-1">
                        <a href="#">FishTracker Alpha released!</a>
                    </h3>
                    <div className="card-body">Today we are excited to announce the first publicly available version of FishTracker (Alpha 0.1.0).</div>
                </Card>
                <Card className="w-100 custom-card">
                    <h3 className="my-0 mb-1">
                        <a href="#">Рибар късметлия</a>
                    </h3>
                    <div className="card-body">Рибар, който явно не му липсва късмет, хвана 69 кита за 1 час като така подобри световния рекорд в тази категория. Ние, рибарската общонст в Бургас, поздравяваме лично Генчо Иванов и му пожелаваме още дълги години да е рекордьор.</div>
                </Card>
                <Card className="w-100 custom-card">
                    <h3 className="my-0 mb-1">
                        <a href="#">Рибар се кандитира за общински съветник</a>
                    </h3>
                    <div className="card-body">Днес Мартин Христов(дирекция полиция) се кандидатира за общински съветник. Той е много популярен рибар и му пожелаваме много успех в политическите му начинания.</div>
                </Card>
            </div>            
        );
    }
}

export default Home;