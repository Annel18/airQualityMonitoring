//! Imports
import { Spinner } from 'react-bootstrap'
import { Outlet, useNavigation } from 'react-router-dom'

import Header from './components/header'


export default function App() {
  //! States
  const navigation = useNavigation()
  //! Effects

  //! Functions

  //! JSX
  return (
    <>
      <Header />
      <main>
        {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <section className='spinner'>
              <Spinner />
            </section>
        }
      </main>

    </>
  );
}
