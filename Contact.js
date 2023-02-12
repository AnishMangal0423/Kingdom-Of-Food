// import phone from "./Images/telephone.png";
import heart1 from "./Images/Heart-2.png"
import React from "react";
// import { useState } from "react";


function Contact({cloudinaryImageId,name,lastMileTravelString,area}) {

  /**
   * U know we guys can also destructure the objects as prop and can use simple words ,, rather then these long-long definations
   * **/

let[love,setlove]=React.useState(heart1);



  return (
    <div className="contact-card border-2 border-yellow-500  w-48 h-52 drop-shadow-xl hover:drop-shadow-2xl rounded-lg bg-yellow-50">

   
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}  className="ml-4 mt-2 h-22 w-36"/>

      <h3 className="ml-4 font-semibold">{name}</h3>


      <div className="info flex flex-col ml-4">


      
      <div className="">
        {/* <i class="fa-solid fa-envelope"></i> */}

        {/* <img
          src="https://icons.veryicon.com/png/o/miscellaneous/icon-library-of-grey-sun/mail-300.png"
          width="16px"
          height="18px"
        /> */}
        <span>{area}</span>
      </div>
       
       
        {/* <img
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
            className="w- h-5"
        />   */}

        <span> {lastMileTravelString} </span>


        <div className="">
        <button><img src={love} className="h-3 w-3"/></button>
        </div>
      </div>

    </div>
  );
}

export default Contact;
