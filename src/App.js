
import './App.css';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection, getDocs, onSnapshot,
  addDoc
} from 'firebase/firestore';
import { useState,useEffect } from 'react';


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



function App() {
  const [postsL,setPost] =useState([]);
 let postsA=[]
useEffect(()=>{

  setPost([]);
 
  getDocs(colRef).then((snpashot)=>{
    snpashot.docs.map((doc)=>{
    setPost(old=>[...old,{...doc.data(),id:doc.id}]);
    })
  }).catch(err=>{
    console.log(err);
  })

}
,[])
 
  return (
    
    <div className="App">
    <div className='left'>

    {postsL.map((post,i)=>{
   
     return (<div key={i} className="postDiv">
       <h1>{post.title}</h1>

       <p>{post.post}</p>
      <h2>@{post.author}</h2>
       </div>)
  
    })}
    </div>
    <div className='right'>
     hello
    </div>
    </div>
  );

}

export default App;
