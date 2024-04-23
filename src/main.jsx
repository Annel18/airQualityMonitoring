import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//! Components
import App from './components/App/index.js'
import PageRealTime from './components/PageRealTime/index.js'
import PageForecast from './components/PageForecast/index.js'

//! Loaders
import { getCityFeed } from './utils/loaders/getCityFeed.js'

//! Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

//! Access environment variable
const token = import.meta.env.VITE_TOKEN

//! Router
const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/',
              element: <PageRealTime />,
              loader: async ({ params }) => getCityFeed(token),
          },
          {
              path: '/forecast',
              element: <PageForecast />,
              // loader: getCityFeed,
          }
      ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
