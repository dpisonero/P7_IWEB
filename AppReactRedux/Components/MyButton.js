import React from 'react';
/*import { questions } from "../assets/mock-data";*/ // Ya no lo necesito porque descargo del servidor.
import {View, Button, Image} from 'react-native';

export default class MyButton extends React.Component {

    render() {

        switch (this.props.question.question) {
            case this.props.questions[0].question:
                return(
                    <View style={{textAlign: 'center'}}>
                        <Button style={{backgroundColor:'#ADFF2F', fontSize: 20,
                            fontWeight:'bold'}} onPress = {() => {this.props.onNextQuestion()}} title ='Siguiente pregunta' />
                        <View style={{width: 100, height: 'auto', display: 'flex'}} />
                        <Button style={{backgroundColor:'#FFB6C1', fontSize: 20,
                            fontWeight:'bold'}} title='Evaluar las respuestas' onPress={() => {this.props.onSubmitQuestion(this.props.questions)}} />
                        <View style={{height: 40}} />
                        <Image style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto',
                            width: 40, height: 40}} source={{uri: this.props.question.attachment.url}} alt={'Imagen no disponible'} />
                        <View style={{height: 15}} />
                    </View>
                );
            case this.props.questions[this.props.questions.length - 1].question:
                return(
                    <View style={{textAlign: 'center'}}>
                        <Button style={{backgroundColor:'#ADFF2F', fontSize: 20,
                            fontWeight:'bold'}} title='Pregunta anterior' onPress = {() => {this.props.onPreviousQuestion()}}/>
                        <View style={{width: 100, height: 'auto', display: 'flex'}} />
                        <Button style={{backgroundColor:'#FFB6C1', fontSize: 20,
                            fontWeight:'bold'}} title='Evaluar las respuestas' onPress={() => {this.props.onSubmitQuestion(this.props.questions)}}/>
                        <View style={{height: 40}} />
                        <Image style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto',
                            width: 40, height: 40}} source={{uri: this.props.question.attachment.url}} alt={'Imagen no disponible'} />
                        <View style={{height: 15}} />
                    </View>
                );
            default:
               return(
                   <View style={{textAlign: 'center'}}>
                       <Button style={{backgroundColor:'#ADFF2F', fontSize: 20, display: 'flex',
                           fontWeight:'bold'}} title='Siguiente pregunta' onPress = {() => {this.props.onNextQuestion()}}/>
                       <View style={{width: 100, height: 'auto', display: 'flex'}} />
                       <Button style={{backgroundColor:'#ADFF2F', fontSize: 20,
                           fontWeight:'bold'}} title='Pregunta anterior' onPress = {() => {this.props.onPreviousQuestion()}}/>
                       <View style={{width: 100, height: 'auto', display: 'flex'}} />
                       <Button style={{backgroundColor:'#FFB6C1', fontSize: 20,
                           fontWeight:'bold'}} title='Evaluar las respuestas' onPress={() => {this.props.onSubmitQuestion(this.props.questions)}}/>
                       <View style={{height: 40}} />
                       <Image style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto',
                           width: 40, height: 40}} source={{uri: this.props.question.attachment.url}} alt={'Imagen no disponible'} />
                       <View style={{height: 15}} />
                   </View>
               )
        }
    }
}
