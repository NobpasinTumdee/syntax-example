import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      {/* <div className='layout-overlap'></div> */}
      <Outlet />
    </>
  )
}

export default Rootlayout
