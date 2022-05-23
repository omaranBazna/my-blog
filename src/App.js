
import './App.css';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,DocumentChange, getDocs, onSnapshot,
  addDoc,deleteDoc,doc
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
  const [postData,setPostData]=useState("");
  const [click,setClick]=useState(false);
 let postsA=[]


useEffect( () => {
  let newData=[]
  onSnapshot(colRef,(snapshot)=>{
   
    snapshot.docs.map((doc)=>{
   
       newData.push({...doc.data(),id:doc.id})
      
 
      })
      setPost(newData);
    }
   
  )
 
 
  },  [click])
 
  return (
    <div className="App">
    <div className='left'>
    {postsL.map((post,i)=>{
     return (<div key={i} className="postDiv">
       <h1>{post.title}</h1>

       <p>{post.post}</p>
       <h2>@{post.author}</h2>
       <button onClick={()=>{let ref=doc(db,"books",post.id);deleteDoc(ref);setClick(old=>!old)}}>delete post</button>
       </div>)
  
    })}
    </div>
    <div className='right'>
     <input name="post"  onChange={(e)=>{setPostData(e.target.value)}} >

     </input>
     <button onClick={()=>{addDoc(colRef,{title:"omaran2",author:"omaran2",post:postData});setClick(old=>!old)}}>add</button>
    </div>
    </div>
  );

}

export default App;
