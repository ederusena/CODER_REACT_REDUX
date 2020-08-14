import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props;
    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStatetoProps = state => {
    return {
        min: state.numerosReducer.min,
        max: state.numerosReducer.max,
    };
}

export default connect(mapStatetoProps)(Soma)