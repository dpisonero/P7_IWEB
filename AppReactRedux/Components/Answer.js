import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Answer extends React.Component {

    render() {
        return(
            <View style={{textAlign: 'center'}}>
                <TextInput style={{borderStyle: 'solid', borderColor: 'blue', borderWidth: 4, width: 'auto',
                    height: 'auto', textAlign: 'center'}} placeholder = 'Introduce la respuesta'
                    className = "Respuesta" type = "text" value = {this.props.question.userAnswer || ''} onChange = {(e) => {
                    this.props.onQuestionAnswer(e.target.value);
                }}/>
            </View>
        )
    }
}
