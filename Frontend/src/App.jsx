import { useState } from 'react'
import { createBrowserRouter,Route ,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import WelcomePage from './Components/Home/WelcomePage'
import Login from './Components/AuthPages/Login'
import Signup from './Components/AuthPages/Signup'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
