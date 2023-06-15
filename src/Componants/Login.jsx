import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Card, Container,Button} from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [apidata,setapidata]= useState([]);
    
  useEffect(()=>{

  const getapi = async()=>{
    try {
      const responce = await fetch('http://localhost:3004/users');
      const data = await responce.json();
      setapidata(data);
    } catch (error) {
      console.log('Api not working')
    }
     
  }
  getapi();
},[])

const handelsubmit  =(e)=>{
    apidata.filter((m)=>{
        if(name === m.username && password === m.password){
          navigate('/dashboard')
        }
    })
    e.preventDefault()
}
    

  return (
    <>
        <Container>
        <div className='centerclass'>
          <Card className='p-3'>
            <Card.Title className='mb-3 text-center'>Login</Card.Title>
            <Form onSubmit={(e)=>handelsubmit(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>User</Form.Label>
                  <Form.Control type="text" placeholder="User" onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit' variant="warning" className='w-100'>Submit</Button>
            </Form>
          </Card>
        </div>
        </Container>
    </>
  )
}

export default Login