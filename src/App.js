import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Randfontein"/>
      <footer>
        This project was coded by <a href="https://github.com/KarabooMjiyako" target="_blank"> Karabo Mjiyako</a> and is <a href="https://github.com/KarabooMjiyako/skycast" target='_blank' >open-sourced</a> on GitHub and hosted on <a href="#">Netlify</a> .
      </footer>
    </div>
  );
}


