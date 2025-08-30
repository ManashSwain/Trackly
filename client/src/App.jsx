import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Rootlayout from './Layouts/Rootlayout/Rootlayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children : [
      {
        

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
