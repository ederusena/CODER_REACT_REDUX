import React from 'react'

function ComParametro(props){
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota
                <strong> { props.nota }</strong>
            </p>
        </div>
    )
}

export default ComParametro