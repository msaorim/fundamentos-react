import React from "react";

export default function Aleatorio(props) {
    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
            <>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong>{min}<br />
                <strong>Valor Máximo: </strong>{max}<br />
                <strong>Valor Escolhido: </strong>{aleatorio}</p>
        </>

    )
}
