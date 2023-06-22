import logo from "./logo.svg";
import "./App.css";
import RoutePage from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
