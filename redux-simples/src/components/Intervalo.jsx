import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from 'react-redux';

import changeNumMin from './actions/changeNumMin'
import changeNumMax from './actions/changeNumMax'

const Intervalo = props => {
    const { min, max } = props.num;
    return (
        <Card title='Intervalo de Numeros' red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    <input type='number' value={min} onChange={e => props.alterarMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' value={max} onChange={e => props.alterarMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStatetoProps = state => {
    return {
        num: state.numerosReducer
    }
}

const mapDispatchToProps = dispatch => ({
    alterarMin(novoNumero){
        const action = changeNumMin(novoNumero)
        dispatch(action)
    },
    alterarMax(novoNumero){
        const action = changeNumMax(novoNumero)
        dispatch(action)
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(Intervalo)