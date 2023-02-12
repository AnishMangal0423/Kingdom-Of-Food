import React from "react";
import logo from "./Images/nit_logo.png";
import Data  from "./Data.js";
import About  from "./About.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import user from "./Images/user-2.png";
import king from "./Images/king.jpg"
// import Main_files from "./Main_files.js";
// import user from "./Images/user.png";
function Navbar() {

  let[log,setlog]=useState("Login")

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
       
        <h4 className="mt-8 ml-16 font-bold text-black-500 text-2xl tracking-wide">Kingdom of Food</h4>
      </div>

    {/* now adding search tag */}

  

   <ul className="btn-list flex mt-9 ml-60">

    <li ><a href="/">Home</a></li>
   <Link to="/about" className="ml-5"><li>About</li></Link>
   <Link to="/ContactUs" className="ml-5"><li> Contact Us</li></Link>
   <li className="ml-40" ><button onClick={changelogin}>{log}</button></li>

   <li className="ml-4 "><img src={user} className="h-6 w-6"></img></li>
   
   </ul>

    </div>

    </div>
  );
}

export default Navbar;

