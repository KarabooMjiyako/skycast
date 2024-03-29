import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1 className='text-center '>Skycast Weather App</h1>
      <Weather defaultCity="Randfontein"/>
      <footer>
        This project was coded by <a href="https://github.com/KarabooMjiyako" target="_blank" rel="noopener noreferrer"> Karabo Mjiyako</a> and is <a href="https://github.com/KarabooMjiyako/skycast" target='_blank' rel="noopener noreferrer">open-sourced</a> on GitHub and hosted on <a href="https://celebrated-cassata-19963b.netlify.app" target='_blank' rel="noopener noreferrer">Netlify</a> .
      </footer>
    </div>
  );
}


