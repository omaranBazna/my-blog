
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
  const [postData,setPostData]=useState("");
  const [click,setClick]=useState(false);
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
,[click])
 
  return (
    <div className="App">
    <div className='left'>
    {postsL.map((post,i)=>{
     return (<div key={i} className="postDiv">
       <h1>{post.title}</h1>

       <p>{post.post}</p>
      <h2>@{post.author}</h2>
      <button >delete post</button>
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
