import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Country from './components/country';
class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
         
        </header>
        <Country />
      </div>
     );
  }
}
export default App;
