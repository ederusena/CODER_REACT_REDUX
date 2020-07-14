import React from 'react'
import "./Card.css"
import api from '../../api'

export default class Card extends React.Component {
    state = {
        color: [],
    }

    async componentDidMount() {
        const response = await api.get('');
        this.setState({color: response.data.schemes[0].colors})
    }

    render(){
    console.log(this.state.color)
    const cardStyle = {
        backgroundColor: `#${this.state.color[0]}` || '#F00',
        borderColor: `#${this.state.color[0]}` || '#F00',
    }
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{this.props.titulo}</div>
            <div className='Content'>{this.props.children}</div>
        </div>
    )
}
}