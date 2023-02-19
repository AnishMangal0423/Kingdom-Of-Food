import React from "react";
import logo from "./Images/nit_logo.png";
import Data  from "./Data.js";
import About  from "./About.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import userlogo from "./Images/user11.png";
import king from "./Images/king.jpg"
import Person from "./Usercontext.js";
import { useContext } from "react"
import Store from "./Store";
import CartSlice from "./CartSlice";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";


function Navbar(props) {

  let[log,setlog]=useState("Login")
  let {user}=useContext(Person);
   
  let cartitem=useSelector(Store =>Store?.cart?.items);  
  // console.log(cartitem);





  function changelogin(){

       if(log=="Login"){


           












        setlog("Logout")
       }

       else{
        setlog("Login")
       }
  }

  return (

// now adding state in search text rather then adding variables locally  

<div>
    <div className="navbar-container bg-yellow-200 flex h-24  drop-shadow-md">
  
    <a href="/"><img src={king} className="h-20 mt-2 ml-2 rounded-xl" /></a>

      <div className="title">
       
        <h4 className="mt-8 ml-5 font-bold text-black-500 text-2xl tracking-wide">Kingdom of Food</h4>
      </div>

    {/* now adding search tag */}

  

   <ul className="btn-list flex mt-9 ml-24">

    <li ><a href="/">Home</a></li>
   <Link to="/about" className="ml-8"><li>About</li></Link>
   <Link to="/ContactUs" className="ml-8"><li> Contact</li></Link>

   <Link to="/cart" ><li className="ml-8">Cart-{cartitem?.length}</li> </Link>
   <Link to="/login"><li className="ml-44" ><button onClick={changelogin}>{log}</button></li></Link>
          
      
   <li className="ml-2"><img src={userlogo} className="h-6 w-6"></img></li>
   <li><h1 className="font-bold ml-4 w-20 -mt-2">Welcome {user?.name}😋</h1></li>
   

   
   </ul>

    </div>

    </div>
  );
}

export default Navbar;

