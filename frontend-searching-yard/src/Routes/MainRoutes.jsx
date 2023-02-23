import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cosmos from "../Pages/Cosmos"
import Home from "../Pages/Home"
import SimpleNav from '../Components/SimpleNav'
// import MainHome from '../Pages/MainHome'
import Index from "../Pages/Index";
import Search from '../Pages/Search'
import Apod from '../Pages/Apod'

const MainRoutes = () => {
  return (<>
 
    <Routes>
    <Route path='/' element={<Apod/>} />
      <Route path='/cos' element={<Cosmos/>} />
      <Route path='/home/:id' element={<Home/>} />
      <Route path='/ind' element={<Index/>} />
      <Route path='/sea' element={<Search/>} />
    </Routes></>
  )
}

export default MainRoutes