import './App.css';
import Dashboard from './Componants/Dashboard';
import Login from './Componants/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
