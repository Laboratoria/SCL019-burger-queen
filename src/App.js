import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import WaiterView from "./views/WaiterView";
import StartView from "./views/StartView";
import ChefView from "./views/ChefView";



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<StartView/>}/>
        <Route path='/tables' element={<WaiterView/>} />
        <Route path='/kitchen' element={<ChefView />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
