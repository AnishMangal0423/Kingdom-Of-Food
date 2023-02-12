import No_dish from "./Images/No_dish_found.png"

function No_dishes(){

    return(

     <>
  
        <img src={No_dish} className="h-40 w-40 ml-60 mt-3 "/>

        <h1 className="ml-40 font-bold text-2xl -mt-4 ">Sorry !! Not Any Dishes Found ...</h1>
     </>
    )
}

export default No_dishes;