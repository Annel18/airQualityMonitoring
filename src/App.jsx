//! Imports

import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'


export default function App() {
  //! States

  //! Effects

  //! Functions

  //! JSX
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

    </>
  )
}
