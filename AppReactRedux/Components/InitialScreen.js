import React from 'react';
import {View, Button} from 'react-native';
import Navbar from "./Navbar";

export default class InitialScreen extends React.Component {
    render() {
        return(
            <View style={{ flex:1, justifyContent:'flex-start' }}>
                <Navbar/>
                <View style={{height: 200}}/>
                <Button
                    onPress={() => this.props.navigation.navigate('GameScreen')}
                    title={"Cargar preguntas"}/>
            </View>
        )
    }
}
