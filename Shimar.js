import BlankCards from "./Blankcards.js"
import Shimar_Navcard from "./Shimar_Navcard.js";
import Shimar_Body_Box from "./Shimar_Body_Box.js";
import Blank_Crousals from "./Blank_Crousals.js";



export function Shimar(){

    

    return(

        <div>

        <h1 className="font-bold text-2xl  animate-bounce "> Wait,Wait !! Wait , Anish Is Searching Restaurants For u .............</h1>



        <div className="h-[200px] bg-black mt-2">
        <div className="flex gap-10 ml-[80px] mr-10 ">
        
         {Array(5).fill("").map((item,index)=>{


            return <Blank_Crousals />
         })}

      </div>


      </div>
    






{/* 
    <div className="mt-2 h-4 ml-20 -mb-4 w-40  bg-gray-100 animate-pulse">


    </div> */}


        <div className="shimar-cont flex flex-wrap mt-10 ml-10">


      
     {Array(15).fill("").map((e,index)=>(

        <BlankCards />
     ))}

     </div>

     </div>
        
    )
         
         
     }



export function Shimar_Menu(){

    return(

        <div className="shimar-menu-cont">

{/* <h1 className="font-bold animate-bounce text-xl">Wait,Wait !! Anish is Searching Dishes for u......</h1> */}
        <Shimar_Navcard />
        
     
        <Shimar_Body_Box />

        </div>
    )
}

              
