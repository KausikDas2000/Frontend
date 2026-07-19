import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import { Route , RouterProvider , createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Projects from './component/Project.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children :[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]

  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
