import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props.num;
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
        num: state.numeros
    }
}

export default connect(mapStatetoProps)(Soma)