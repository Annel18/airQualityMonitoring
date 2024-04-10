// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//! Components
import App from './App.jsx'

//! Loaders
import { getCityFeed } from './utils/loaders/getCityFeed.js'

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
              element: <App />,
              // loader: getTvIndex,
          },
          {
              path: '/forecast',
              element: <App />,
              // loader: getTvIndex,
          }
      ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
