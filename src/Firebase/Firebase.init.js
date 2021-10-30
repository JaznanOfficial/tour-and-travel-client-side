import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";



const initializeConfig = () => {
    initializeApp(firebaseConfig);
}

export default initializeConfig;