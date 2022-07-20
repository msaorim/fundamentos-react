import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')
const linha = <h2>Olá gente!!!</h2>

ReactDom.render(
<div>
    <Primeiro />
    <ComParametro 
        titulo = "Situação do Aluno"
        aluno = "Pedro"
        nota = {9.3} />
    <ComParametro 
        titulo = "Situação do Aluno"
        aluno = "Maria"
        nota = {6.3} />
</div>, 
el)
