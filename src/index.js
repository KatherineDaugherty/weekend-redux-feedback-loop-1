import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

registerServiceWorker();

//reducer for all input
//how to make it so that the user must input something before moving on?
const inputReducer = (state = {}, action) => {
    //if-else statements for different actions
    
    if (action.type === "ADD_FEELING") {
        console.log(action.payload);
        return { ...state, feeling: action.payload };
    }
    else if (action.type === "ADD_UNDERSTANDING") {
        return { ...state, understanding: action.payload }; 
    }
    else if (action.type === "ADD_SUPPORT") {
        return { ...state, support: action.payload }; 
    }
    else if (action.type === "ADD_COMMENTS") {
        return { ...state, comments: action.payload }; 
    }
    else if (action.type === "CLEAR_FEEDBACK") {
        console.log(action.payload);
        return {};
    }
    //else return state is required for initial page load, even if user will be required to
    //fill in inputs
    return state; //default return in the case nothing is triggered
    };


const storeInstance = createStore(
    combineReducers({
      inputReducer
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(
    <Provider store={storeInstance}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

