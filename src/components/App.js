import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import SubHeader from './SubHeader'
import Main from './Main'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <SubHeader/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
