import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Eder" nota={9.3} />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro" nota={5.3} />
    </div>,
    document.getElementById('root')
)