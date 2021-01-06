import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
    form:formReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render( 

<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')

);

