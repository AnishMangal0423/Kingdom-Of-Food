import { useDispatch, useSelector } from "react-redux";
import Rupee_logo from "./Images/Rupee_logo.png";
import { Shimar } from "./Shimar";
import Store from "./Store";
import Cartcard from "./Cartcard.js";
import { useState } from "react";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment.js"
import { Link } from "react-router-dom";
import { clearCart } from "./CartSlice";


function Cart(){
let cartitems=useSelector(store=>store?.cart?.items)
// console.log(cartitems)
let sum=0;

// function Payment(){
//        console.log("pay fee");
//      return (<Payment />);
    // }

let dispatch=useDispatch();

function Clear(){

    dispatch(clearCart());
// }

}

return(

    <>

    <div className="bg-pink-50 mt-2 mb-4">
    <h1 className="font-bold text-xl ml-[50px]">cart items</h1>
    
    </div>


<div className="ml-10 bg-green-300 w-20 px-1 rounded-sm mb-4" >

  <button onClick={()=>Clear()}>Clear Cart</button>
</div>

    <div className="flex gap-y-10 flex-wrap ml-20">

  {cartitems.length==0? <EmptyCart /> :cartitems.map((obj,index)=>{
     {/* console.log(index)
     console.log(obj);
     console.log("ani") */}
   
           sum+=obj?.price
     return <Cartcard {...obj} key={index}/>
  })
  }

  {/* {

         cartitems.forEach((items)=>{
                sum+={items}.price
                console.log(sum);
         })


        
    } */}

  

  </div>


 <Link to="/payment"><button className="ml-[450px] mt-14 border-2 border-yellow-100 bg-yellow-200 w-24 pl-2 flex">

       {/* <button>Pay {sum/100}</button> */}
       <div className="ml-1">Pay</div>
       <div className="ml-1">  <img src={Rupee_logo} className="logo-css w-4 l-4 mt-[5px]" /></div>
       <div className="ml-1">{sum/100}</div>
  </button>
</Link> 
  
</>
)
}



export default Cart;