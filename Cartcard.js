import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "./CartSlice";
import Store from "./Store";


function Cartcard({name,id,cloudinaryImageId,price ,description}){


  let cartitems=useSelector(store=>store?.cart?.items)

  let dispatch=useDispatch();

     function Remove(ele){

      dispatch(removeitem(ele))
     }



    return(

    <>

     {/* <div className="h-40 w-40 bg-pink-100">

        <h1>{name}</h1>
     <h2>{id}</h2>
     </div> */}


     <div className="contact-card border-2 ml-10 border-yellow-500  w-48  drop-shadow-xl hover:drop-shadow-2xl rounded-lg bg-yellow-50 " >

   
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
  <span>Rupees - {price/100}</span>
</div>
 
 
  {/* <img
    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
      className="w- h-5"
  />   */}
{/* 

  <div className="">
 
  <h4>{description}</h4>
  </div> */}


     <div className="bg-red-400 w-20 px-2 rounded-sm ml-8 -mb-[10px] " onClick={(e)=>Remove()}>

      <button>Remove</button>
     </div>





</div>

</div>

    </>

    )
}

export default Cartcard;