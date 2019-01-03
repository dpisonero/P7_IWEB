import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
/*import { questions } from "../assets/mock-data";*/ //Las descargo del servidor

import React from 'react';
import GameScreen from '../Components/GameScreen';

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
                <div style={{height: '100%', backgroundColor: '#D3D3D3'}} >
                    <GameScreen/>
                </div>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
