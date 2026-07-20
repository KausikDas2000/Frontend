import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Projects from './component/Project.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import PostHog
import posthog from 'posthog-js';
import { PostHogProvider } from '@posthog/react';

// Initialize with the API key you copied from Step 1
posthog.init('phc_kqUDcxs9LL8zot8v9riJon9mbRLCvPzHgpSHbq9ih5du', {
  api_host: 'https://posthog.com',
  capture_pageview: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    <RouterProvider router={router} />
  </StrictMode>,
)
