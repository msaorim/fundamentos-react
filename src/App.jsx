/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/Aleatorio";

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Fragmento />

        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3} />

        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={6.3} />
        <Primeiro />

        <Aleatorio min={1} max={100}/>
    </div>
);