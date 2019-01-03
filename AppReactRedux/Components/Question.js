import React from 'react';

export default class Question extends React.Component {

    render() {
        if (this.props.question.question === undefined) {
            return(
                <h1 style={{color: 'red'}}>No hay preguntas para mostrar</h1>
            )
        } else {

        }
        return(
            <h1 style={{color: 'black', textAlign: 'center', fontSize: '40px',
                borderStyle: 'solid', marginLeft: '8em', marginRight: '8em', backgroundColor: '#F0F0F0'}}>{this.props.question.question}</h1>
        )
    }
}
