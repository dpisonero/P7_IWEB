import React from 'react';
import {Text} from 'react-native';

export default class Question extends React.Component {

    render() {
        if (this.props.question.question === undefined) {
            return(
                <Text style={{color: 'red'}}>No hay preguntas para mostrar</Text>
            )
        } else {

        }
        return(
            <Text style={{color: 'black', textAlign: 'center', fontSize:  20,
                borderStyle: 'solid', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#F0F0F0'}}>{this.props.question.question}</Text>
        )
    }
}
