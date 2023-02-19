import Shimar_Body_card from "./Shimar_Body_Card.js";
function Shimar_Body_Box(){

    return(

        <>

   <h1 className=""></h1>

<div className="Shimar_Menu_body_container flex">

     
  
    <div className="flex flex-col  w-[700px]">
 
   {
     Array(40).fill("").map((ele)=>{

    
     return <Shimar_Body_card />
   })}

   </div>


   <div><h1 className="font-bold ml-40 mt-4">Offers</h1></div>



  </div>

        </>
    )

}

export default Shimar_Body_Box;