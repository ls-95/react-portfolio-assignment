import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">{Home}</Route>
          <Route path="/about">{About}</Route>
          <Route path="/portfolio">{Portfolio}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
