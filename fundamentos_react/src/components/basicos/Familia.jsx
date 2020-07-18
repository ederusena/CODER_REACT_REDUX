import React, { cloneElement } from 'react'

export default props => {
    return (
        <>
        {
            props.children.map((child, i) => cloneElement(child, {...props, key: i}))
        }
        </>        
    )
}