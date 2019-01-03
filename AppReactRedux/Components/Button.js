import React from 'react';
/*import { questions } from "../assets/mock-data";*/ // Ya no lo necesito porque descargo del servidor.

export default class Button extends React.Component {

    render() {

        switch (this.props.question.question) {
            case this.props.questions[0].question:
                return(
                    <div style={{textAlign: 'center'}}>
                        <button style={{backgroundColor:'#ADFF2F', fontSize:'20px',
                            fontWeight:'bold'}} id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                        <div style={{width: '100px', height: 'auto', display: 'inline-block'}} />
                        <button style={{backgroundColor:'#FFB6C1', fontSize:'20px',
                            fontWeight:'bold'}} id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                        <div style={{height: '40px'}} />
                        <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto',
                            width: '40%', height: '40%'}} src={this.props.question.attachment.url} alt={'Imagen no disponible'} />
                        <div style={{height: '15px'}} />
                    </div>
                );
            case this.props.questions[this.props.questions.length - 1].question:
                return(
                    <div style={{textAlign: 'center'}}>
                        <button style={{backgroundColor:'#ADFF2F', fontSize:'20px',
                            fontWeight:'bold'}} id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                        <div style={{width: '100px', height: 'auto', display: 'inline-block'}} />
                        <button style={{backgroundColor:'#FFB6C1', fontSize:'20px',
                            fontWeight:'bold'}} id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                        <div style={{height: '40px'}} />
                        <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto',
                            width: '40%', height: '40%'}} src={this.props.question.attachment.url} alt={'Imagen no disponible'} />
                        <div style={{height: '15px'}} />
                    </div>
                );
            default:
               return(
                   <div style={{textAlign: 'center'}}>
                       <button style={{backgroundColor:'#ADFF2F', fontSize:'20px', display: 'inline-block',
                           fontWeight:'bold'}} id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                       <div style={{width: '100px', height: 'auto', display: 'inline-block'}} />
                       <button style={{backgroundColor:'#ADFF2F', fontSize:'20px',
                           fontWeight:'bold'}} id="previous" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                       <div style={{width: '100px', height: 'auto', display: 'inline-block'}} />
                       <button style={{backgroundColor:'#FFB6C1', fontSize:'20px',
                           fontWeight:'bold'}} id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                       <div style={{height: '40px'}} />
                       <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto',
                           width: '40%', height: '40%'}} src={this.props.question.attachment.url} alt={'Imagen no disponible'} />
                       <div style={{height: '15px'}} />
                   </div>
               )
        }
    }
}
