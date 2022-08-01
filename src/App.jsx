/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Card title="Desafio Aleatório">
        <Aleatorio min={1} max={100}/>
        <Aleatorio min={1} max={100}/>
        <Aleatorio min={1} max={100}/>
        </Card>

        <Card title="Fragmento">
        <Fragmento />
        </Card>

        <Card title="Com Parâmetro 1">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3} />
        </Card>

        <Card title="Com Parâmetro 2">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={6.3} />
        </Card>

        <Card title="Primeiro">
        <Primeiro />
        </Card>

    </div>
);