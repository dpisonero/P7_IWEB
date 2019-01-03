import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
/*import { questions } from "../assets/mock-data";*/ //Las descargo del servidor
import {View} from 'react-native';

import React from 'react';
import GameScreen from '../Components/GameScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import InitialScreen from '../Components/InitialScreen';

const AppNavigator = createStackNavigator({
    InitialScreen: {screen: InitialScreen},
    GameScreen: {screen: GameScreen}
}, {
    initialRouteName: "InitialScreen",
    headerMode:'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: []
        };
        this.store = this.configureStore();
    }

    render() {

        return (
            <Provider store={this.store}>
                <View style={{height: '100%', backgroundColor: '#D3D3D3'}} >
                    <AppContainer/>
                </View>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
