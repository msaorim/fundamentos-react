import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'

const el = document.getElementById('root')
const linha = <h2>Olá gente!!!</h2>

ReactDom.render(
<div>
    <Primeiro></Primeiro>
</div>, 
el)
