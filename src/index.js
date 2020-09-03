import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import {Provider} from 'react-redux' ; 
import {createStore,applyMiddleware, compose} from 'redux';
import reducer from './redux/reducers/reducer';
import thunk from 'redux-thunk' ; 


const rootElement = document.getElementById("root");

const store = createStore(reducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f 
));

ReactDOM.render(

<Provider store={store}>
<App />
</Provider>
, rootElement);
