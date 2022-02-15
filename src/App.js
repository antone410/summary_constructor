import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Step1 from './components/Steps/Step1';
import Step2 from './components/Steps/Step2';
import Step3 from './components/Steps/Step3';

const App = () => {


  return (
    <div className="App" >
      <h1>Summary constructior</h1>
      {useSelector(state => state.appReducer.step1Visible) && <Step1 />}
      {useSelector(state => state.appReducer.step2Visible) && <Step2 />}
      {useSelector(state => state.appReducer.step3Visible) && <Step3 />}
    </div>
  );
}



export default App;
