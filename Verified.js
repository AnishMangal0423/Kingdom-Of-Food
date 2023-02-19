import back from "./Images/back.gif"
import PaymentDone from "./Images/PaymentDone.gif"


function Verified(){


  return(

     <>

          <img src={back} className=" h-[300px] ml-[200px] mt-4" />

          <div classname="flex flex-row hii">
               <div className="ml-[240px]">
                    <img src={PaymentDone} className="h-16" />
               </div>


               <div className="-mt-10 ml-[350px]">
                         <h1 className="font-light text-xl">Payment Done Order is Coming in Few Minutes.....</h1>

               </div>
          </div>
     </>

  )

}

export default Verified