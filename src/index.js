import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={storeInstance}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );
  registerServiceWorker();

//reducer for feeling input **unsure about correct use of objects??
//how to make it so that the user must input something before moving on?
const feelingReducer = (state = {}, action) => {
    //if-else statements for different actions
    //action for adding feeling input
    if (action.type === "ADD_FEELING") {
        return { ...state, ...action.payload };
        // return { ...action.payload };
    } 
    //else return state is required for initial page load, even if user will be required to
    //fill in inputs
    return state; //default return in the case nothing is triggered
    //return alert("You must complete the form before navigating to the next page!");
    };

//reducer for understanding input
const understandingReducer = (state = {}, action) => {
    //if-else statements for different actions
    //action for adding understanding input
    if (action.type === "ADD_UNDERSTANDING") {
        return { ...state, ...action.payload }; 
    } 
    return state; //default return in the case nothing is triggered
    //return alert("You must complete the form before navigating to the next page!");
    };

//reducer for support input
const supportReducer = (state = {}, action) => {
    //if-else statements for different actions
    //action for adding support input
    if (action.type === "ADD_SUPPORT") {
        return { ...state, ...action.payload }; 
    } 
    return state; //default return in the case nothing is triggered
    //return alert("You must complete the form before navigating to the next page!");
    };

//reducer for comment input
const commentReducer = (state = {}, action) => {
    //if-else statements for different actions
    //action for adding comment input
    if (action.type === "ADD_COMMENT") {
        return { ...state, ...action.payload };
    } 

    //alert("Comments are appreciated, but you may navigate to the next page without leaving one.");
    return state; //default return in the case nothing is triggered
}  

const storeInstance = createStore(
    combineReducers({
      feelingReducer,
      understandingReducer,
      supportReducer,
      commentReducer
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(
    <Provider store={storeInstance}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

