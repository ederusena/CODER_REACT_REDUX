import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';

ReactDOM.render(
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#08 - Par ou impar" id='6'>
                <ParOuImpar numero={2}></ParOuImpar>
            </Card>

            <Card titulo="#07 - Desafio Repetição" id='6'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' id='5'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#05 - Componente com Filhos' id='1'>
            <Familia sobrenome='Monteiro Sena'>
                <FamiliaMembro name='Eder'/>
                <FamiliaMembro name='Damaris'/>
                <FamiliaMembro name='Pixel'/>
                <FamiliaMembro name='Delta'/>
            </Familia>
            </Card>

            <Card titulo='#01 - Primeiro Componente' id='2'>
                <Primeiro />
            </Card>

            <Card titulo='#02 - Com Parametro' id='3'>
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Eder" nota={9.3} />
            </Card>

            <Card titulo='#03 - Aleatorio' id='4'>
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo='#04 - Aleatorio' id='0'>
                <Aleatorio min={5} max={60} />
            </Card>
        </div>
    </div>,
    document.getElementById('root')
)