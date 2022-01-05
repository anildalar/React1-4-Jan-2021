//1. Import Area

import React, { useState } from 'react'
import {
        BrowserRouter as Router,
        Route,
        Routes,
        Link
    } from 'react-router-dom'

import '../App.css'


import Contact from './Contact'
import Home from './Home'


export default function App() {
    //1. State/Variable

    //2. Functions


    //3. Return Statement
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                
                </Routes>
            </div>
        </Router>
    )
}
