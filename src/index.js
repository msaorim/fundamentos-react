import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const el = document.getElementById('root')
const linha = <h2>Olá gente!!!</h2>

ReactDom.render(<div>{linha}</div>, el)
