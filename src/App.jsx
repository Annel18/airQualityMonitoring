//! Imports
import { Spinner } from 'react-bootstrap'
import { Outlet, useNavigation } from 'react-router-dom'

import Navbar from './components/Navbar'


export default function App() {
  //! States
  const navigation = useNavigation()
  //! Effects

  //! Functions

  //! JSX
  return (
    <>
      <Navbar />
      <main>
        {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className='spinner'>
              <Spinner />
            </div>
        }
      </main>

    </>
  )
}
