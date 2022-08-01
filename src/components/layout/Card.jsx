import React from "react";
import "./Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="title">Título: {props.title}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}
