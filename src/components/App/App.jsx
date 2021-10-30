import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
