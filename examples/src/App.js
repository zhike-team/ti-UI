import React, { Component } from 'react';
import { Button } from '@zhike/ti-ui'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>智课题库组 UI 组件</h1>
        </header>
        <content>
          <h2>Button</h2>
          <Button text="ceshi"></Button>
        </content>
      </div>
    );
  }
}

export default App;
