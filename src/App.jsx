//! Imports
import { Spinner } from 'react-bootstrap'
import { Outlet, useNavigation } from 'react-router-dom'

import Navbar from './components/Navbar'


export default function App() {
  //! States
  // const navigation = useNavigation()
  //! Effects

  //! Functions

  //! JSX
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello World!</h1>
        {/* {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <section className='spinner'>
              <Spinner />
            </section>
        } */}
      </main>

    </>
  );
}
