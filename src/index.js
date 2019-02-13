import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './redux/reducers/reducers';
import './configs/statusbar';

const store = createStore(Reducers)

const App = () => (
    <Provider store = {store}>
        <Routes/>
    </Provider>
    )

export default App
