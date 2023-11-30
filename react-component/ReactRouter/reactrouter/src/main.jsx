import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github from './component/Github/Github.jsx'
import User from './component/User/User.jsx'

// const router = createBrowserRouter([{
//   path :"/",
//   element:<App/>,
//   children :[
//     {path:"",
//     element:<Home/>
//   },
//   {path:"about",
//   element:<About/>
// },
// {path:"contact",
// element:<Contact/>
// },
// {path:"github",
// element:<Github/>
// }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="github" element={<Github/>}/>
      <Route path="user/:userid" element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
