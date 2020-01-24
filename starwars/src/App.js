import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/CardStats";
import Container from "./components/Container"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swCharacter, setSwCharacter] = useState([]);
  

  useEffect(() => {
    //request api response and assign to swCharacters
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        // console.log(res.data.results);
        setSwCharacter(res.data.results)
      })
      .catch(error => {
        console.log(`this is an error in App()`, error);
      }
      )
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container data={swCharacter} />
    </div>
  );
}

export default App;
