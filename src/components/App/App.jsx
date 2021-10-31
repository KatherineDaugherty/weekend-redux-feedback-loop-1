import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import { createStore, combineReducers, applyMiddleware } from "redux";
import FeedbackSuccess from '../FeedbackSuccess/FeedbackSuccess';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';


function App() {

 


  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      </div>

      <Route path="/" exact>
      {/* <FeedbackForm /> */}
      <FeelingForm />
      </Route>

      <Route path="/understanding" exact>
      <UnderstandingForm />
      </Route>

      <Route path="/support" exact>
      <SupportForm />
      </Route>

      <Route path="/comments" exact>
      <CommentsForm />
      </Route>

      <Route path="/review" exact>
      <FeedbackReview />
      </Route>

      <Route path="/success" exact>
      <FeedbackSuccess />
      </Route>
      
    </Router>
  );
}

export default App;
