import React from "react";
import Card from "./card";
import "./StartingPage.css";

const StartingPage = () => {
    return (
        <Card>
            <h1 className="header">Starting Page</h1>
            <h3 className="primary text">Enter username</h3>
            <input type="text" className="username_input" placeholder="username"/>
            <button className="start_btn">Comenzar test</button>
            <p className="Puntuacion">Puntuacion<span>0</span></p>
        </Card>
    )
}

export default StartingPage;