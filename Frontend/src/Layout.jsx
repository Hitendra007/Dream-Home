import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function Layout() {
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Layout
