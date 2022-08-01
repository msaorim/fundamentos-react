import React from "react";
import "./Card.css";

export default function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || "#f0f",
        borderColor: props.color || "#59f"
    };

    return (
        <div className="card" style = {cardStyle}>
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
