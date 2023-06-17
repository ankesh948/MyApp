import React from 'react';
import { useContext } from 'react'
import { User } from '../../merage'
import { useState } from 'react';
import Sidebar from './Sidebar'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';


const Add_Product = () => {

  const {users} = useContext(User)
  console.log(users)

  const [Title, setTitle]= useState('')
  const [Description, setDescription]= useState('')
  const [Price, setPrice]= useState('')
  const [Thumbnail, setThumbnail]= useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
        Title,
        Description,
        Price,
        Thumbnail
      }
      try {
        const response = await axios.post('http://localhost:3004/users', data);
        console.log(response.data); // Check the response data in the browser console
      } catch (error) {
        console.error(error);
      }
  }


  return (
    <div className='section'>
        <div className="container-fluid p-0">
          <div className='row g-0'>
              <Sidebar />
              <div className="col-lg-9">
                <div className="content-area">
                    <h1 className="title">Add Product</h1>
                    <div className="card p-4 w-100">
                      <Form onSubmit={(event)=>handleSubmit(event)}>
                        <div className='row'>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Title</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                            </Form.Group>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
                            </Form.Group>
                            <Form.Group className="col-1 mb-3">
                              <Form.Label>Price</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Price" />
                            </Form.Group>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Thumbnail</Form.Label>
                              <Form.Control type="file" onChange={(e)=>setThumbnail(e.target.value)} placeholder="Thumbnail" />
                            </Form.Group>
                            <Form.Group className="col-2 ">
                              <Form.Control type="submit" className="btn btn-info mt-4" value="Submit" />
                            </Form.Group>
                        </div>
                      
                      </Form>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Add_Product