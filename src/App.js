// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Home from "./views/Home";
import Mesa from "./views/Mesa";
import Cocina from "./views/Cocina";
import NotFound from "./componentes/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UseStates } from "./componentes/useContext/UserContent";

function App() {
  return (
    <UseStates>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/views/Mesa" element={<Mesa />} />
          <Route path="/views/Cocina" element={<Cocina />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UseStates>
  );
}

export default App;
