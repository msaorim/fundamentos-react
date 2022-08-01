/* eslint-disable import/no-anonymous-default-export */
import './App.css';
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';

export default () => (
    <div className='app'>
        <h1>Fundamentos React</h1>
        <div className="cards">

            <Card title="#05 - Componente com Filhos" color="#003">
                <Familia sobrenome="Rocha Saorim"/>
            </Card>

            <Card title="#04 - Desafio Aleatório" color="#0b0">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card title="#03 - Fragmento" color="#f00">
                <Fragmento />
            </Card>

            <Card title="#02 - Com Parâmetro 1" color="#00b">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card title="#02 - Com Parâmetro 2">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Maria"
                    nota={6.3} />
            </Card>

            <Card title="#01 - Primeiro">
                <Primeiro />
            </Card>
        </div>
    </div>
);