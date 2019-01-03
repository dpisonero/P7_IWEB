import React from 'react';
import Content from "./Content";
import MyButton from "./MyButton"
import Navbar from "./Navbar";
import {View, Button, Text} from 'react-native';

export default class Game extends React.Component {

    render() {

        console.log(this.props.question);

        if (this.props.question === undefined) {
            return(
                <View>
                    <Navbar/>
                    <Text style={{color: 'blue', textAlign: 'center'}}>Cargando preguntas</Text>
                </View>
            )
        } else if (this.props.finished) {
            return(
                <View style={{textAlign: 'center'}}>
                    <Navbar/>
                    <Text style={{fontStyle: 'italic', textAlign:'center', color:'blue',
                        fontSize: 50}}>Su puntuación es: {this.props.score} ({this.props.score * 100 / this.props.questions.length}% de aciertos)</Text>
                    <Button style={{backgroundColor:'#ADFF2F', fontSize: 20, fontWeight:'bold',
                        alignContent: 'center'}} title='Volver a jugar con nuevas preguntas' onPress={() => {location.reload()}}/>
                    <View style={{width: 100, height: 'auto', display: 'flex'}} />
                    <Button style={{backgroundColor:'#FFFF66', fontSize: 20, fontWeight:'bold',
                        alignContent: 'center'}} title='Revisar respuestas' onPress={() => {this.props.onResetQuestions(this.props.questions)}}/>
                </View>
            )
        } else {
            return (
                <View>
                    <Navbar/>

                    <Content question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>

                    <MyButton question={this.props.question} questions={this.props.questions}
                            onNextQuestion={this.props.onNextQuestion} onPreviousQuestion={this.props.onPreviousQuestion}
                            onSubmitQuestion={this.props.onSubmitQuestion}/>

                </View>
            );
        }

    }
}
