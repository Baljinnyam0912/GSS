import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Home from './Views/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';



const root = createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
  
     <Routes>
       <Route path='/' exact element={<Home/>}/>
     </Routes>

  </BrowserRouter>
)