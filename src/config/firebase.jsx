import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAzXuSD0_PU1QF2Ahh_62YTZzDRr2gZshA",
  authDomain: "united-monks-92fe3.firebaseapp.com",
  projectId: "united-monks-92fe3",
  storageBucket: "united-monks-92fe3.appspot.com",
  messagingSenderId: "931188944833",
  appId: "1:931188944833:web:b465eed6484d7d28adc940"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);