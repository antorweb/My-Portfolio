import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'

const App = () => {


  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<LayoutOne />}>
      <Route index element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/portfolio' element={<Portfolio />} ></Route>
      <Route path='/service' element={<Service />} ></Route>
      </Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={myRoute} />
    </>
  )
}

export default App