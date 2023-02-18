import { useSelector } from "react-redux";
import { Shimar } from "./Shimar";
import Store from "./Store";
import Cartcard from "./Cartcard.js";

function Cart(){
let cartitems=useSelector(store=>store?.cart?.items)
// console.log(cartitems)

return(

    <>
    <h1>cart items</h1>

    <div className="flex gap-6 flex-wrap ml-20">
  {cartitems.map((obj,index)=>{
     {/* console.log(index)
     console.log(obj);
     console.log("ani") */}
    
     return <Cartcard {...obj} key={index}/>
  })
  }

  </div>

  
</>
)
}

export default Cart;