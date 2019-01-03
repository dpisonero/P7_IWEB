import React from 'react';
import {View, TextInput} from 'react-native';

export default class Answer extends React.Component {

    render() {
        return(
            <View style={{textAlign: 'center'}}>
                <TextInput style={{borderStyle: 'solid', borderColor: 'blue', borderWidth: 4, width: 'auto',
                    height: 'auto', textAlign: 'center', backgroundColor: 'white'}} placeholder = 'Introduce la respuesta'
                    className = "Respuesta" type = "text" value = {this.props.question.userAnswer || ''} onChangeText = {(e) => {
                    this.props.onQuestionAnswer(e);
                }}/>
            </View>
        )
    }
}
