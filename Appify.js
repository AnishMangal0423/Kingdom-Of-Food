import React from "react";
import  ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Outlet} from "react-router-dom";
import About from "./About.js";
import ContactUs from "./ContactUs"
import Main_files from "./Main_files.js";
import Navbar from "./Navbar";
import Footer from "./Footer.js";
import Error from "./Error.js"
import Menu from "./Restaurant_menu_Header";
import Menu_Body from "./Restaurant_menu_Body.js";

function Appify(){

     return(
        <>
     <Navbar />
     <Outlet />
     <Footer />
</>
     )
}
// now doing routing----
let routes= createBrowserRouter([


    {
      path:"/",
      element:<Appify />,
      errorElement:<Error />,
      children:[
  
       {
         path:"/",
         element:<Main_files />
       }
   ,

       {
         path:"/about",
        element:<About />
         
       },
  
       {
         path:"/ContactUs",
          element:<ContactUs />
  
       },

       {
        path:"/restaurant/:resId",
        element:<Menu_Body />
       }
  
      ]
    }
  ])

  
let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={routes} />);

  

export default Appify;