import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Rootlayout from './Layouts/Rootlayout/Rootlayout';
import Dashboard from './Pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children : [
      {
        path: "dashboard",
       element: <Dashboard/>,
      },
    ]
  },

]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
