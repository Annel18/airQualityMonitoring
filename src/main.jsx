import React from 'react'
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

//! Router
const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/',
              element: <PageRealTime />,
              loader: async ({ params }) => getCityFeed(process.env.API_URL_LOCAL),
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

console.log(process.env.API_URL_LOCAL)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)
