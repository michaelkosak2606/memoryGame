import React from "react";
import "./MemoryGame.css";

const card = props => {
    return (
        <div
            className="card"
            style={{ background: `${props.color}` }}
            onClick={props.onClick}
        >
        </div>
    );
};

export default card;
