import React from 'react';
import Question from "./Question";
import Tips from "./Tips"
import Answer from "./Answer";
import {View} from 'react-native';

export default class Content extends React.Component {
    render() {
        return (
            <View style={{justifyContent: 'space-between'}}>
                <Question question={this.props.question}/>

                <View style={{height: 40}}/>

                <Answer question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>

                <Tips question={this.props.question} />
            </View>
        )
    }
}
