import { useState } from 'react'
import { createBrowserRouter,Route ,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import WelcomePage from './Components/Home/WelcomePage'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
