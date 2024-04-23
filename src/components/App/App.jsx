//! Imports

import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/index'
import Footer from '../Footer/index'


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
      <Footer />
    </>
  )
}
