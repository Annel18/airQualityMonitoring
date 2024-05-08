import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

//! Components
import App from './components/App/index'
import PageRealTime from './components/PageRealTime/index'
import PageForecast from './components/PageForecast/index'

//! Loaders
import { getCityFeed } from './utils/loaders/getCityFeed'

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

const rootContainer = document.getElementById('root')!

createRoot(rootContainer).render(
  <RouterProvider router={router} />
);
