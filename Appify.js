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
import Person from "./Usercontext.js";
import { useState } from "react";
import { Provider } from "react-redux";
import Store from "./Store.js";
import Cart from "./Cart.js";
import Payment from "./Payment.js";
import LoginForm from "./LoginForm.js";
import Verified from "./Verified.js"
function Appify(){


  let[user,setuser]=useState({

    name:"",
    Email:"anishm0423@gmail.com",
  })

     return(
        <>
        
<Provider store={Store}>
<Person.Provider

     value={{

         user:user,
         setuser:setuser,

     }}
>
       <Navbar />
     
     <Outlet />
     <Footer />
     </Person.Provider>
</Provider>
   
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

,
       {
          path:"/cart",
          element:<Cart />
       }
  
,
      {
           path:"/payment",
           element:<Payment />        
      },


     {
          path:"/login",
          element:<LoginForm />

     },

    {

      path:"/varified",
      element:<Verified />
    }



      ]
    }
  ])

  
let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={routes} />);

  

export default Appify;