import React from 'react';
import {View, Text} from 'react-native';

export default class Tips extends React.Component {

    aux() {
        return this.props.question.tips.map((tip) => {
            return (
                <Text style={{fontStyle: 'italic', fontWeight: 'bold'}} key={tip}>{tip+'\n'}</Text>
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
                <View>
                    <View style={{height: 20}} />
                    <View style={{textAlign: 'center', color: '#800000', fontSize:  15,
                        borderStyle: 'solid', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#F0F0F0'}} className= "No pistas">
                        <Text>Pistas</Text>
                        <Text style={{fontStyle: 'italic', fontSize: 10, fontWeight: 'bold'}}>{showTips}</Text>
                    </View>
                    <View style={{height: 20}} />
                </View>
            )
        } else {
                return (
                    <View>
                        <View style={{height: 20}} />
                        <View style={{textAlign: 'center', color: '#800000', fontSize:  15,
                            borderStyle: 'solid', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#F0F0F0'}} className="Pistas">
                            <Text>Pistas</Text>
                            <Text>{this.aux()}</Text>
                        </View>
                        <View style={{height: 20}} />
                    </View>
                )
        }
    }
}
