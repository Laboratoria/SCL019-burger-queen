import Menus from '../componentesMesero/Menus';
import DataDesayuno from "../componentesMesero/Desayuno";
import { useState } from 'react';

function WaiterView() {
  const [dataProduct, setDataProduct] = useState([]);
  return (
    <div className="waiter">
     <Menus 
     dataMenu = {dataProduct}
     showProducts= {setDataProduct}
     />
     < DataDesayuno/>
    </div>
  );
}

export default WaiterView;
