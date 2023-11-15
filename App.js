import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Home from './UserDB/Home'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
