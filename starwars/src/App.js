import React from "react";
import "./App.css";
import CharacterInfoPro from './components/CharacterInfoPro'
import { Header } from 'semantic-ui-react'


const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterInfoPro />

    </div>
  );
};

export default App;
