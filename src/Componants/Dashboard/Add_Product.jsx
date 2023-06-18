import { React, useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

const Add_Product = () => {

  const [Title, setTitle]= useState('')
  const [Description, setDescription]= useState('')
  const [Price, setPrice]= useState('')
  const [Thumbnail, setThumbnail]= useState('')
  const [formData, setformData] = useState('')



  useEffect(() => {
    const sendData = async () => {
      try {
          await axios.post('http://localhost:8000/productlist', formData)
          .then((response)=>{console.log('Form data sent successfully')});
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    sendData(); 
  }, []);

  function handleSubmit(event){ 
    event.preventDefault();
    const Data = {
        Title,
        Description,
        Price,
        Thumbnail
    }
    setformData(Data)
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
                      <Form>
                        <div className='row'>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Title</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" required />
                            </Form.Group>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" required />
                            </Form.Group>
                            <Form.Group className="col-1 mb-3">
                              <Form.Label>Price</Form.Label>
                              <Form.Control type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Price" required />
                            </Form.Group>
                            <Form.Group className="col-3 mb-3">
                              <Form.Label>Thumbnail</Form.Label>
                              <Form.Control type="file" onChange={(e)=>setThumbnail(e.target.value)} placeholder="Thumbnail" required />
                            </Form.Group>
                            <Form.Group className="col-2 ">
                              <Form.Control type="submit" className="btn btn-info mt-4" value="Submit" onSubmit={(event)=>handleSubmit(event)} />
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