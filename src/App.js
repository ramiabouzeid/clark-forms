import { useEffect } from 'react';
import React from "react";
// import './App.css';
import './App.scss';
import { get } from "./utils/api";
import { useDispatch } from "react-redux";
import {
  setForm,
} from "./store/storeSlice";
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import { Routes, Route } from "react-router";

function App() {
  const dispatch = useDispatch();

  const get_json_file = function(){
    get('json/questionnaire.json').then((response) => {
      dispatch(
        setForm(response.questionnaire)
      );
    });
  }
  useEffect(() => {
    get_json_file();
  })

  return (
    <div className="App">
      <header><a href="#" className="logo"></a></header>
      <Routes>
        <Route exact path="/" element={<Questionnaire />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
