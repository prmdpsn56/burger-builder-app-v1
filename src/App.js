import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/layout'
import Burger from './components/Burgerbuilder/burgerbuilder';

function App() {
  return (
    <div className="App"> 
      <Layout />
      <Burger />
    </div>
  );
}

export default App;
