import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";
import { questionAnswer } from "../redux/actions";
import { changeQuestion } from "../redux/actions";
import { submit } from "../redux/actions";
import { initQuestions } from "../redux/actions";
import {View} from 'react-native';

class GameScreen extends Component {

    componentDidMount() {
        fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=c5b1bc6f39dadb0bd675')
            .then((response) => {
                return response.json();
            })
            .then((response2) => {
                this.props.dispatch(initQuestions(response2))
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        console.log(this.props.questions);
        console.log(this.props.questions[this.props.currentQuestion]);
        return (
            <View>
                <Game question={this.props.questions[this.props.currentQuestion]}

                      finished={this.props.finished}

                      questions={this.props.questions}

                      onQuestionAnswer={(answer) => {
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}

                      score={this.props.score}

                      onNextQuestion={() => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion + 1))
                      }}

                      onPreviousQuestion={() => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion - 1))
                      }}

                      onSubmitQuestion = {(questions) => {
                          this.props.dispatch(submit(questions))
                      }}

                      onResetQuestions = {(questions) => {
                          this.props.dispatch(initQuestions(questions))
                      }}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(GameScreen);
