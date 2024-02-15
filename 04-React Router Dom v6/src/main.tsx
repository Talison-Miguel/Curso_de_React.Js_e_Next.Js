import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home/index.tsx'
import { About } from './components/About/index.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/about'  element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
