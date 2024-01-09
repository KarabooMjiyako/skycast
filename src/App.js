import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Randfontein"/>
      <footer>
        This project was coded by <a href="https://github.com/KarabooMjiyako" target="_blank" rel="noopener noreferrer"> Karabo Mjiyako</a> and is <a href="https://github.com/KarabooMjiyako/skycast" target='_blank' rel="noopener noreferrer">open-sourced</a> on GitHub and hosted on <a href="https://app.netlify.com/sites/celebrated-cassata-19963b/deploys/659c9262b7ff7f00088ac494" target='_blank' rel="noopener noreferrer">Netlify</a> .
      </footer>
    </div>
  );
}


