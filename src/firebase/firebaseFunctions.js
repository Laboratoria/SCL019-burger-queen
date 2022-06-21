import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, orderBy, Timestamp} from "firebase/firestore";

export const fetchData = async () => {
    const order = await getDocs(collection(db, "menu"), orderBy("datepost", "desc"));
    order.forEach((doc) => {
        console.log(doc.data())
    })

    return order.docs[0].data();
    // console.log(querySnapshot)
};

export const addOrder = async (cartItems) => {
    let user = document.getElementById("inputName");
    let userName = user.value;
    const docRef = await addDoc(collection(db, "menu"), {
        userName,
        cartItems,
        date: Timestamp.fromDate(new Date()),

    });
 console.log("Document written with ID: ", docRef.id)
}