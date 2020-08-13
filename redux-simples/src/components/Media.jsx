import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media = props => {
    const { min, max } = props.num;
    return (
        <Card title='Média dos Números' green>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{(min + max) / 2}</strong>
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

export default connect(mapStatetoProps)(Media);