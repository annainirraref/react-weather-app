import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="subtitle">Weather App</p>
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}

export default App;
