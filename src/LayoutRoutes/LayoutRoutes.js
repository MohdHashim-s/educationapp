import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../pages/Plans/Plans'
import Courses from '../pages/Courses/Courses'
import Aboutus from '../components/AboutUs/Aboutus'
import Contact from '../pages/Contactus/Contact'
import Support from '../pages/support/support'
function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/educationapp' element={<Home/>}/>
        <Route path='/services' element={<Plans/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        
        
        
        
        

       
        




        </Routes>



        <Footer/>
    </Router>
  )
}

export default LayoutRoutes