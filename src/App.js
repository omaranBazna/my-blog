
import './App.css';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection, getDocs, onSnapshot
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBHRyuOeJenmiEstwz8O2AyQloxkMVg1ck",
  authDomain: "myblog-8547c.firebaseapp.com",
  projectId: "myblog-8547c",
  storageBucket: "myblog-8547c.appspot.com",
  messagingSenderId: "1056969993052",
  appId: "1:1056969993052:web:c620a5e9d2c5fc2aa6ef99"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const colRef=collection(db,"books");
getDocs(colRef).then((snpashot)=>{
  snpashot.docs.map((doc)=>{
   console.log({...doc.data(),id:doc.id});
  })
}).catch(err=>{
  console.log(err);
})
function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
