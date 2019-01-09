import React from "react";
import "./MemoryGame.css";

const card = ({ color, onClick }) => {
    return (
        <div
            className="card"
            style={{ background: `${color}` }}
            onClick={onClick}
        >
        </div>
    );
};

export default card;
