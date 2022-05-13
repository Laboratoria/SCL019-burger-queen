import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CustomerOrder from './componentes/customerOrder.js';
import Home from './pages/home.js';
import MenuOne from './pages/menuOne.js';
import Salon from './pages/salon.js';
import Kitchen from './pages/kitchen.js';
// import Footer from "./componentes/footer.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Salon' element={<Salon />} />
              <Route path='/Kitchen' element={<Kitchen />} />

              <Route path='/MenuOne' element={<MenuOne />} />
              {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
      </BrowserRouter>  
      
      );
}

export default App;
