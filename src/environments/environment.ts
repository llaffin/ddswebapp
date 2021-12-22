import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBX89-L4jhAHnPhO35QO1IpPE8yO8NVOS0",
  authDomain: "datadrivenstrengthwebapp.firebaseapp.com",
  projectId: "datadrivenstrengthwebapp",
  storageBucket: "datadrivenstrengthwebapp.appspot.com",
  messagingSenderId: "56278213847",
  appId: "1:56278213847:web:1263fccf7c7b00d3a53c92",
  measurementId: "G-FE0555X6PJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false
};


