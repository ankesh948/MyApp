import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="col-lg-3">
    <div className='sidebar'>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/addproduct">Add Product</Link></li>
            <li><Link to="">Add Categories</Link></li>
        </ul>
    </div>
    </div>
    </>
  )
}



export default Sidebar