import React, { Component } from 'react'
import { Alert } from 'antd';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  
  state = {
    visible: false
  }

  handleClose = () => {
    this.setState({visible: false})
  };
  
  render() {
    const visible = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {visible ? (
          <Alert
            message="This is an Info Alert from Ant Design"
            description="Just a test"
            type="info"
            showIcon
            closable
            afterClose={this.handleClose}
          />
        ) : null}
      </div>
    );
  }
}

