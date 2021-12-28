import './App.css';
import React from 'react';
import Step1 from './components/Steps/Step1';
import Step2 from './components/Steps/Step2';
import Step3 from './components/Steps/Step3';

class App extends React.Component {

  state = {
    step1Visible: true,
    step2Visible: true,
    step3Visible: true,
  }


  render() {
    return (
      <div className="App" >
        <h1>Summary constructior</h1>
        {this.state.step1Visible && <Step1 />}
        {this.state.step2Visible && <Step2 />}
        {this.state.step3Visible && <Step3 />}
      </div>
    );
  }

}

export default App;
