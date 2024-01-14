import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/About/about'
import Error from './Pages/Error/error'
import Accomodations from './Pages/Accomodations/accomodation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
            <Router>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/*" element={<Error />} />
                        <Route path="/accomodation/:id" element={<Accomodations />} />
                  </Routes>
            </Router>
,
)
