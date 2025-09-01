import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from "react-router-dom";



const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className='mx-64 my-16'>
    <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default Rootlayout
