import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [apidata,setapidata]= useState([]);
    
  useEffect(()=>{
  const getapi = async()=>{
      const responce = await fetch('http://localhost:3004/users');
      const data = await responce.json();

      console.log('data');
      console.log(data);

      setapidata(data);
  }
  getapi();
},[])

const handelsubmit  =(e)=>{

    console.log(apidata);
    apidata.filter((m)=>{
        if(name === m.username && email === m.password){
          navigate('/')
        }
    })
    e.preventDefault()
    console.log(name,email)
}
    

  return (
    <div>
        
    <form action="" onSubmit={(e)=>handelsubmit(e)}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='User' /><br />
        <input type="password" onChange={(e)=>setEmail(e.target.value)} placeholder='Password' /><br />
        <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Login