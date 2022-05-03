import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Breakfast from "./components/breakfast";
import Lunch from "../src/components/lunch"
import VistaMenu from "./vistas/mesero";


function App() {
  return (
    <div className="App">
      <h1>Burger Queen</h1>
      <Routes>
        <Route path="/" element={<VistaMenu/>} />
        <Route path= "breakfast" element={<Breakfast/>} />
        <Route path= "lunch" element={<Lunch/>} />                              
        {/*<Route path="about" element={<About />} />*/}
      </Routes>
    </div>
  );
}

export default App

