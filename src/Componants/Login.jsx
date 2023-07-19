import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Card, Container,Button} from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [apidata,setapidata]= useState([]);
    
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setapidata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


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