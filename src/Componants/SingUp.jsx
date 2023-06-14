import React, { useState } from 'react'
import {Form, Card, Container,Button} from 'react-bootstrap';

const SignUp = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [data, setdata] = useState([]);


  function sumitHandler(e){
    e.preventDefault();
  
    let maindata = [...data,{user,password}]
    setdata(maindata)

    console.log(data)
    setUser('')
    setPassword('')
    
  }

  return (
    <>
    <Container>
        <div className='centerclass'>
          <Card className='p-3'>
            <Card.Title className='mb-3 text-center'>Sign Up</Card.Title>
            <Form onSubmit={(e)=>sumitHandler(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>User</Form.Label>
                  <Form.Control type="text" value={user} placeholder="User" onChange={(e)=>setUser(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password} type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit' variant="warning" className='w-100'>Bubmit</Button>
            </Form>
          </Card>
        </div>
        </Container>
        {data.map((e,i)=>{
          return (<div key={i} > 
            <p>{e.user}</p>
            <p>{e.password}</p>
            </div>
          )
        })}
    </>
  )
}

export default SignUp;