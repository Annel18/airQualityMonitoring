//! Imports
import { Outlet, useNavigation } from 'react-router-dom'
import { Spin } from 'antd';

import Navbar from '../Navbar/index'
import Footer from '../Footer/index'


export default function App() {
  //! States
  const navigation = useNavigation()
  
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
                <Spin />
              </div>
        }
      </main>
      <Footer />
    </>
  )
}
