import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <>
            <FamiliaMembro name='Eder' {...props}/>
            <FamiliaMembro name='Damaris' {...props}/>
            <FamiliaMembro name='Pixel' {...props}/>
            <FamiliaMembro name='Delta' {...props}/>
        </>
    )
}