import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Places from './Components/Places/Places'

const App = () => {
    return(
        <>
        <Router>
       <Navbar/>
        <Routes>
            <Route path="#" element={<Home />}></Route>
            <Route path="/places" element={<Places />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
       </Router>
       <Home/>
        <Main/>
        <Footer/>    
       
        </>
    )
}
export default App