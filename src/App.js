import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Character from "./components/Character";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/character/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
