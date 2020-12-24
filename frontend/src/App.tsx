import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import './App.module.scss';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
