import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Routes/Home";
import ContactChannel from "./Routes/ContactChannel";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <h3>Error</h3>,
    },
    {
        path: '/contact',
        element: <ContactChannel/>,
        errorElement: <h3>Error</h3>,
    },

])


const App = () => {
  return (
      <>
          <RouterProvider router={router}/>
      </>
  )
}

export default App;
