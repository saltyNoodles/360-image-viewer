import React, { Component } from 'react';
import './App.css';

import { Route, Link, Router } from 'react-router-dom';
import Image360 from './components/Image360';
import ImageForm from './components/ImageForm';
class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={ImageForm} />
        <Route path="/360/:src" component={Image360} />
      </>
    );
  }
}

export default App;
