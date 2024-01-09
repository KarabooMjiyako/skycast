import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Randfontein"/>
      <footer>
        This project was coded by <a href="#" target="_blank" >Karabo Mjiyako</a> and is <a href="https://github.com/KarabooMjiyako/skycast" target='_blank' >open-sourced</a> on GitHub.
      </footer>
    </div>
  );
}


