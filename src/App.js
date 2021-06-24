import porkchop from "./img/kotelett_cutout.png";
import "./App.css";

var day = new Date().getDay();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="Header-title">Er tað kotelettdagur í dag?</h4>
        <img src={porkchop} className="App-logo" alt="logo" />
        <p style={{ paddingTop: 50 }}>
          <b className="Header-title">{day === 4 ? "JA! 😍" : "Nei 😭"}</b>
        </p>
      </header>
    </div>
  );
}

export default App;
