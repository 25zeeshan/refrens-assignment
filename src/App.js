import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
