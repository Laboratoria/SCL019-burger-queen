import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase-config';


// Función para acceder a la data
export const dataMenu = async() => { 
    const querySnapshot = await getDocs(collection(db, "menus-bq")); //getDocs (traer coleccion "menus" de database (Firestore) )
    console.log(querySnapshot.docs[0].data());
    console.log("hola");
    return querySnapshot.docs[0].data();

}

