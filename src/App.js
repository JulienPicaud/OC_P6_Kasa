import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/About/about'
import Error from './Pages/Error/error'
import Accomodations from './Pages/Accomodations/accomodation'


export default function App (){
    return(
            <Router>
                  <Routes>
                        <Route path="/OC_P6_Kasa" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/*" element={<Error />} />
                        <Route path="/accomodation/:id" element={<Accomodations />} />
                  </Routes>
            </Router>
)}
