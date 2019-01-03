import React from 'react';

export default class Answer extends React.Component {

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <input style={{borderStyle: 'solid', borderColor: 'blue', borderWidth: '4px', width: '600px',
                    height: '20px', textAlign: 'center'}} placeholder = 'Introduce la respuesta'
                    className = "Respuesta" type = "text" value = {this.props.question.userAnswer || ''} onChange = {(e) => {
                    this.props.onQuestionAnswer(e.target.value);
                }}/>
            </div>
        )
    }
}
