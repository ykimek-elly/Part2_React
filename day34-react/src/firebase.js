// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNiCU1R13AfSRIQ3IVvRq3Ri_cEfhTDDo",
  authDomain: "seohee-fullstack.firebaseapp.com",
  projectId: "seohee-fullstack",
  storageBucket: "seohee-fullstack.firebasestorage.app",
  messagingSenderId: "783737154256",
  appId: "1:783737154256:web:d118cf7bbf5f4c37aeccd5",
  measurementId: "G-2CF0L7HGZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


// Firestore 초기화! 
export const db = getFirestore(app);


// 파이어베이스의 설정을 다른 컴포넌트도 사용할 수있기 때문에
// 기본적으로 파이어베이스의 설정 객체를 우선적으로 내보내기
// 하겠다.
export default app;