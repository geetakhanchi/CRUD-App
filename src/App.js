import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import AllUsers from './components/allusers';
import AddUser from './components/adduser';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='all' element={<AllUsers />} />
          <Route path='add' element={<AddUser />} />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
