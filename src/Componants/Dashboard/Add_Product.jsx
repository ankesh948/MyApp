import React from 'react'
import Sidebar from './Sidebar'


const Add_Product = () => {
  return (
    <div className='section'>
        <div className="container-fluid p-0">
          <div className='row g-0'>
              <Sidebar />
              <div className="col-lg-9">
                <div className="content-area">
                    <h1 className="title">Dashboard</h1>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Add_Product