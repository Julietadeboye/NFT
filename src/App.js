import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Roadmap } from "./components/Roadmap";
import { Traits } from "./components/Traits";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Roadmap />
      <Traits />
    </div>
  );
}

export default App;
