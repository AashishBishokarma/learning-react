
import './App.css'
import Home from './components/Home'
import About from './components/About'
import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'

import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'
import Notfound from './components/Notfound'
const router = createBrowserRouter (
  [
    {
      path : "/",
      element:
      <div>
        <Navbar />
        <Home/>
      </div>
      
    },
    {
      path : "about",
      element:
      <div>
        <Navbar />
        <About/>
        
      </div>
    },
    {
      path : "dashboard",
      element:
      <div>
        <Navbar />
        <DashBoard/>
        
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses />
        },
        {
          path:'mock-tests',
          element:<MockTests />
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path : "/student/:id",
      element :
      <div>
        <Navbar/>
        <ParamComp />
      </div>
    },
    {
      path:'*',
      elememt:<Notfound />
    }
  ]
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
