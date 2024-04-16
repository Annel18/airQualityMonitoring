// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//! Components
import App from './App.jsx'
import PageRealTime from './components/PageRealTime.jsx'
import PageForecast from './components/PageForecast.jsx'

//! Loaders
// import { getCityFeed } from './utils/loaders/getCityFeed.js'

//! Styles
import 'bootstrap/dist/css/bootstrap.min.css';
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
              // loader: getCityFeed,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
