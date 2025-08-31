import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from "react-router";



const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
     <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout
