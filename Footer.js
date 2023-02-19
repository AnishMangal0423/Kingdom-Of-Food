import { useEffect, useState } from "react";


function Footer(){

//    let{user1}=useContext(Person);

let[footer,setfooter]=useState([]);


useEffect(()=>{

    console.log("Useeffect 3")

       call_footer();
});


   async function call_footer(){

    let data=await fetch(

        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    )


    let padnewala=await data.json();

             setfooter(padnewala?.data?.filters[0]?.options)
   }


    return(
<div className="  bg-black text-white mt-5">
       <div className="ml-[450px] py-3"> <h3 classname="mt-2">We ❤️ Kingdom Of Food </h3></div>

    
     <div className="flex flex-wrap ml-10 mr-10 border-b-[1.1px] border-gray-200 py-3">
   {footer.map((item,index)=>{

            return <h1 className="ml-5">{item.option}</h1>

   })}
  </div>
    <div className=" ml-[70px] mt-4 flex">

      <div><h1 className="tracking-wide">All Rights Reserved Under-@2023 </h1></div> 
       
    <div className="tracking-wider ml-[400px]">Made By Anish With ❤️</div>
    </div>

  <div className="h-10"></div>
 
</div>

      
       
    )
}

export default Footer;