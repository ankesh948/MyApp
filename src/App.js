import './App.scss';
import Add_Product from './Componants/Dashboard/Add_Product';
import Dashboard from './Componants/Dashboard/Dashboard';
import Login from './Componants/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addproduct' element={<Add_Product/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
