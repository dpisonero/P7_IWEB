import React from 'react';

export default class Tips extends React.Component {

    aux() {
        return this.props.question.tips.map((tip) => {
            return (
                <li style={{fontStyle: 'italic', fontWeight: 'bold'}} key={tip}>{tip}</li>
            )
        });
    }

    render() {

        let tips = this.props.question.tips;
        let showTips = "";
        if (tips.length === 0) {
            showTips = "No hay pistas";
        }

        if (tips.length === 0) {
            return (
                <div>
                    <div style={{height: '20px'}} />
                    <div style={{textAlign: 'center', color: '#800000', fontSize: '15px',
                        borderStyle: 'solid', marginLeft: '10em', marginRight: '10em', backgroundColor: '#F0F0F0'}} className= "No pistas">
                        <h3>Pistas</h3>
                        <h5 style={{fontStyle: 'italic', fontSize:'15px'}}>{showTips}</h5>
                    </div>
                    <div style={{height: '20px'}} />
                </div>
            )
        } else {
                return (
                    <div>
                        <div style={{height: '20px'}} />
                        <div style={{textAlign: 'center', color: '#800000', fontSize: '15px',
                            borderStyle: 'solid', marginLeft: '10em', marginRight: '10em', backgroundColor: '#F0F0F0'}} className="Pistas">
                            <h3>Pistas</h3>
                            <p>{this.aux()}</p>
                        </div>
                        <div style={{height: '20px'}} />
                    </div>
                )
        }
    }
}
