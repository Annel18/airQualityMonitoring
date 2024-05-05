import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//! Components
import App from './components/App/index.ts'
import PageRealTime from './components/PageRealTime/index.ts'
import PageForecast from './components/PageForecast/index.ts'

//! Loaders
import { getCityFeed } from './utils/loaders/getCityFeed.ts'

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
              loader: getCityFeed
              // loader: async ({ params }) => getCityFeed(process.env.API_URL_LOCAL),
          },
          {
              path: '/forecast',
              element: <PageForecast />,
              // loader: getCityFeed,
          }
      ]
  }
],
{
  basename: '/air-quality-monitoring/'
}
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
) as HTMLElement
