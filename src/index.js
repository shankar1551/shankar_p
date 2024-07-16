import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Event from './eventHandler/Event';
import Conditional from './conditional/Conditional';
import Iteration from './iteration/Iteration';
import LoginForm from './formhandling/LoginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Layout from './Layout';



const message = {id:1,time:'morning',message:"hello world"};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
 <>
   <p>HELOOOOOOOOOOOOO</p>
   < LoginForm/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>} >
            <Route index element={<Event message={message} />} />
            <Route path="/iteration" element={ <Iteration/>} />
            <Route path="/conditional" element={ < Conditional />} />
            <Route path="/loginform" element={<LoginForm/>} />
          </Route>
        </Routes>
    </BrowserRouter>
</>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
