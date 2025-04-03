import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Routes/ErrorPage';
import Root from './Routes/Root';
import './index.css'
import Contact from './Routes/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world</div>,
     element: <Root/>,
    errorElement: <ErrorPage/>,
    //  element: <Contact/>,
    children: [
      {
        path: "contacts/:contactId", // This will be a dynamic route nested under "/"
        element: <Contact />,
      },
    ],


  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
