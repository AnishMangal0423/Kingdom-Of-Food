

import Emptycart from "./Images/EmptyCart.jpg"
function EmptyCart(){

    return(
              <div className="flex flex-col">
                 
                 <div>
                                  <img src={Emptycart} className="w-60 h-60 ml-80 mt-4"/>  </div>

                    <div className="ml-[320px] mt-3 font-bold "><h1>Empty-Cart ! Please Add Something</h1></div>

                  
              </div>

    )



 }

 export default EmptyCart;