import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

ReactDOM.render(
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo='#01 - Primeiro Componente'>
                <Primeiro />
            </Card>
            <Card titulo='#02 - Com Parametro'>
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Eder" nota={9.3} />
            </Card>
            <Card titulo='#03 - Aleatorio'>
                <Aleatorio min={1} max={10} />
            </Card>
            <Card titulo='#04 - Aleatorio'>
                <Aleatorio min={5} max={60} />
            </Card>
        </div>
    </div>,
    document.getElementById('root')
)