import Rupee_logo from "./Images/Rupee_logo.png";
import heart1 from "./Images/Heart-3.png"
import heart2 from "./Images/RedHeart-1.png";
import React from "react";


function Dishes_box({ name, cloudinaryImageId, price, description,fav,fn,key}) {
  // { name, cloudinaryImageId, price, description,fav,fn,key
  // let resId=useParams();
  // let[love,setlove]=React.useState(heart1);

  // function Changelove(){
  //     if(love==heart1){
  //       setlove(heart2);
  //     }

  //     if(love==heart2){
  //       setlove(heart1);
  //     }
  // }


    // function Additem(item){


    //   dispatch(additem(item))
    // }



  return (
    <div className="box flex  border-b-[1.2px] border-black my-4 justify-between mr-10 h-[160px] ml-2">
      <div className="Dish-details flex flex-col ml-4">
        <div className="flex flex-col">
          <div classname="Dish-name">
            <p className="font-bold">{name}</p>
          </div>

          <div className="Price_of_dish flex">
            <div>
              <img src={Rupee_logo} className="logo-css w-4 l-4 mt-1" />
            </div>
            <div>
              <p>{parseInt(price / 100)}</p>
            </div>
          </div>
        </div>

        <div className="Description">
          <p className="font-thin text-sm mt-5 w-72">{description}</p>
        </div>
      </div>

      <div className="Dish-img flex flex-col">
        <div>
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            className="Dish-imgs w-40 h-30"
          />
        </div>
        <div className="add_dish_cont flex border-[1.2px] border-black w-24 bg-green-50 ml-8 -mt-4">
          {/* <div className="minus-sign ml-2">
            <span>-</span>
          </div> */}
          <div className="add-item ml-4">
            <button>Add</button>
          </div>
          {/* <div className="plus-sign ml-5 -mt-[0.8px]">
            <span>+</span>
          </div> */}


      </div>
                
<div className="-ml-[420px]">
        <button><img src={fav} className="h-3 w-3 -mb-10"/></button>
        </div>
        </div>
    </div>
  );
}

export default Dishes_box;
