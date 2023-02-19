import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main_files from "./Main_files";
import Menu from "./Restaurant_menu_Header";
import { Shimar } from "./Shimar";
import Dishes_box from "./Dishes_Box";
import {Shimar_Menu} from "./Shimar";
import heart1 from "./Images/Heart-3.png";
import RedHeart from "./Images/RedHeart-1.png"
import No_dishes from "./No_dishes.js";
import { additem } from "./CartSlice";
import { useDispatch } from "react-redux";


function Menu_Body(){


    let[dishes,setdishes]=useState(null);

    let[duplicatedishes,setduplicatedishes]=useState(null);
    let[searchingtext,setsearchingtext]=useState("")
    let {resId,name}=useParams();
    // console.log(resId)
    let dispatch=useDispatch();


    let[love,setlove]=useState();


   


    function Additem(item){

      dispatch(additem(item))
    }


    useEffect(()=>{

         callthedishes();
        //  console.log(dishes[0].name);
    },[])


    async function callthedishes(){

     let gandidishesdata=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.9124336&lng=75.7872709&menuId="+resId);
       let aachadata=await gandidishesdata.json();

          console.log(aachadata)
       setdishes(Object.values(aachadata?.data?.menu?.items));
       setduplicatedishes(Object.values(aachadata?.data?.menu?.items));
      

    }

    function lovefn(){

      if(love==heart1){
        setlove(RedHeart);
      }

      if(love==RedHeart){
        setlove(heart1);
      }
    }


    function check(tosearch) {
        // setnewData(newData);
        return duplicatedishes.filter((member) => {
          return member?.name
            ?.toLowerCase()
            .includes(tosearch.toLowerCase());
        });
      }


     

      function f1(e){
        setsearchingtext(e.target.value)
      }
  

      function f2(e){
        let newarray=check(e.target.value);
        setdishes(newarray);
      }


     



    return dishes==null ?<Shimar_Menu /> :
    (
        <div className="relative">
        <div className="sticky top-0 left-0 right-0">
      <Menu />
      </div>

      {/* now mapping our dishes array in the body */}
      <div className="search-dishes border-2 border-black w-[244px] hover:bg-pink-50 ml-80 -mt-3 mt-[10px]">
        <input
          type="text"
          placeholder="Search Dishes..."
          className="search-cont bg-white  hover:bg-pink-50 placeholder-pink-800  shadow-xl w-60 px-1"
          value={searchingtext}

          onChange={(e)=>{

           f1(e);
          
           f2(e);
          }}
         
        />
      </div>


     <div className="flex">

    
      <div className="Menu_body_container ">

     

 
    {/* <bitton className="bg-green-50   cursor-pointer " onClick={()=>handleclick()}>Add</bitton> */}
       <div className="dishes-list flex-col border-r-[1.2px]  border-black w-[650px]">
    
       <h1 className="ml-6 font-bold mt">{dishes.length} dishes For u....</h1>
      {
       dishes.length==0 ? <No_dishes /> :dishes.map((box1,index)=>{

         {/* console.log(box1) */}
        return <Dishes_box {...box1} key={index} />
      })}

      </div>
      {/* <button  onClick={()=>Additem(box1)} */}


     </div>

     <div className="Box1-cont">

<h1 className="ml-40 font-bold">Offers</h1>
</div>

   </div>

        </div>
    )

}

export default Menu_Body;