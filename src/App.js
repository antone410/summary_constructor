import './App.css';
import React from 'react';
import Step1 from './components/Steps/Step1';
import Step2 from './components/Steps/Step2';


class App extends React.Component {

  state = {
    step1Visible: true,
    step2Visible: true,
  }


  render() {
    return (
      <div className="App" >
        <h1>Summary constructior</h1>
        {this.state.step1Visible && <Step1 />}
        {this.state.step2Visible && <Step2 />}
      </div>
    );
  }

}

export default App;
