import React from 'react';
import Content from "./Content";
import Button from "./Button"
import Navbar from "./Navbar";

export default class Game extends React.Component {

    render() {

        console.log(this.props.question);

        if (this.props.question === undefined) {
            return(
                <div>
                    <Navbar/>
                    <h1 style={{color: 'blue', textAlign: 'center'}}>Cargando preguntas</h1>
                </div>
            )
        } else if (this.props.finished) {
            return(
                <div style={{textAlign: 'center'}}>
                    <Navbar/>
                    <h3 style={{fontStyle: 'oblique', textAlign:'center', color:'blue',
                        fontSize:'50px'}}>Su puntuación es: {this.props.score} ({this.props.score * 100 / this.props.questions.length}% de aciertos)</h3>
                    <button style={{backgroundColor:'#ADFF2F', fontSize:'20px', fontWeight:'bold',
                        alignContent: 'center'}} onClick={() => {window.location.reload()}}>Volver a jugar con nuevas preguntas</button>
                    <div style={{width: '100px', height: 'auto', display: 'inline-block'}} />
                    <button style={{backgroundColor:'#FFFF66', fontSize:'20px', fontWeight:'bold',
                        alignContent: 'center'}} onClick={() => {this.props.onResetQuestions(this.props.questions)}}>Revisar respuestas</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar/>

                    <Content question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>

                    <Button question={this.props.question} questions={this.props.questions}
                            onNextQuestion={this.props.onNextQuestion} onPreviousQuestion={this.props.onPreviousQuestion}
                            onSubmitQuestion={this.props.onSubmitQuestion}/>

                </div>
            );
        }

    }
}
