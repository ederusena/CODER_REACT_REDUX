import React from 'react';
import './App.css';
import Intervalo from '../src/components/Intervalo'
import Soma from '../src/components/Soma'
import Media from '../src/components/Media'
import Sorteio from '../src/components/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
