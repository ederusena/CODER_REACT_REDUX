import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    const { min, max } = props.num
    return (
        <Card title='Sorteio de um Número' purple>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{Math.floor(Math.random() * max) + min}</strong>
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

export default connect(mapStatetoProps)(Sorteio)