import Shimar_Body_card from "./Shimar_Body_Card.js";
function Shimar_Body_Box(){

    return(

        <>

   <h1 className=""></h1>

<div className="Shimar_Menu_body_container">

     
  
    <div className="flex flex-col  h-[400px] w-[700px]">
 
   {
     Array(40).fill("").map((ele)=>{

    
     return <Shimar_Body_card />
   })}

   </div>



  </div>

        </>
    )

}

export default Shimar_Body_Box;