import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

ReactDOM.render(
    
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo='#05 - Familia' color='#6235F3'>
                <Familia />
            </Card>

            <Card titulo='#01 - Primeiro Componente' color='#6246E3'>
                <Primeiro />
            </Card>

            <Card titulo='#02 - Com Parametro' color='#46C4E3'>
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Eder" nota={9.3} />
            </Card>

            <Card titulo='#03 - Aleatorio' color='#46E381'>
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo='#04 - Aleatorio' color='#89C91A'>
                <Aleatorio min={5} max={60} />
            </Card>
        </div>
    </div>,
    document.getElementById('root')
)