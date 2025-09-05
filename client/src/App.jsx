import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from './Layouts/Rootlayout/Rootlayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Managetasks from './Pages/Managetasks/Managetasks';
import Createtask from './Pages/Createtask/Createtask';
import Analytics from './Pages/Analytics/Analytics';
import Reports from './Pages/Reports/Reports';
import Profile from './Pages/Profile/Profile';
import Notfound from './components/Notfound/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children : [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "managetask",
        element: <Managetasks/>,
      },
      {
        path: "createtask",
        element: <Createtask/>,
      },
      {
        path: "analytics",
        element: <Analytics/>,
      },
      {
        path: "reports",
        element: <Reports/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "*",
        element: <Notfound/>
      }
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
