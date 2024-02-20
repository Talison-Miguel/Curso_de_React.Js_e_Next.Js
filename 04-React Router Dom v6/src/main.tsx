import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home/index.tsx'
import { About } from './components/About/index.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/global.css'
import { Menu } from './components/Menu/index.tsx'
import { Posts } from './components/Posts/index.tsx'
import { Redirect } from './components/Redirect/index.tsx'
import { NotFound } from './components/NotFound/index.tsx'
import { PostItem } from './components/PostItem/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/about'  element={<About/>}/>
                {/* <Route path='/posts/:id'  element={<Posts/>}/> */}
                <Route path='/posts'  element={<Posts/>}>
                    <Route path=':id' element={<PostItem />}/>
                </Route>
                <Route path='/posts'  element={<Posts/>}/>
                <Route path='/redirect'  element={<Redirect/>}/>
                <Route path='*'  element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
