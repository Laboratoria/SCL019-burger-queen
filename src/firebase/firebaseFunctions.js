import { db }  from "./firebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";


export const traerMenu = async () => {
    const pedidos = await getDocs(collection(db, "menu"));
    return pedidos.docs[0].data();
}; 