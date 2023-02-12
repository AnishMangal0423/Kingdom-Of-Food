// making a new page that will simply link to every restaurant details--
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Shimar, Shimar_Menu } from "./Shimar";
import  star from "./Images/star.png";


function Menu() {


  const { resId, name } = useParams();
  // console.log(useParams());

  // now we have to store our restaturant for extarcting the details of that restaurant like name,tags and many more--

  let [restaurant, setrestaurant] = useState(null);

  useEffect(() => {
    callthemenu();
  }, []);

  async function callthemenu() {
    let gandadata = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=26.9124336&lng=75.7872709&menuId=" +
        resId
    );
    let id = await gandadata.json();

    setrestaurant(id.data);
  }
  return !restaurant ? (
    <Shimar_Menu />
  ) :(
    <div className="Menu-container bg-whitesmoke-800 ">
      <div className="Menu-Navbar flex bg-pink-200 h-44 mt-2">
      {/* <div className="Menu-Navbar-Content"> */}
       
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              restaurant?.cloudinaryImageId
            }
            className="Menu-Res-img h-36 w-48 ml-14 mt-4"
          />
       

        <div className="Menu-Navbar-description">
          <h1 className="font-bold mt-5 ml-7">{restaurant?.name} </h1>

          <div className="cuisines-name ml-7 ">{restaurant?.cuisines.join(",")}</div>
          <div className="location ml-7"> {restaurant?.area}</div>

          {/* Now making  a div that will contain the ratings and all about the Restaurant*/}

          <div className="Rating-Container flex ml-7 mt-3">
            <div className="Actual-Ratings border-r-2 border-black pr-4">


           <div className="flex">
            <img src={star} className="w-4 h-4 mt-1 "/>
              <div className="avg-rating font-semibold ">{restaurant?.avgRating}</div>
              </div>

              <div className="People_Rated">
                {restaurant?.totalRatingsString}
              </div>
            </div>

            <div className="Actual-Timings  border-r-2 border-black ml-6 pr-4">
              <div className="Ghante font-semibold ">{restaurant?.sla?.slaString}</div>

              <div className="del-time">
                <p>Delivery Time</p>
              </div>
            </div>

            <div className="Paisa-Container ml-6">
              <div className="Rupees font-semibold">{restaurant?.costForTwoMsg}</div>

              <div className="durriya">
                {restaurant?.sla?.lastMileDistanceString}
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div>
         <ul> {Object.values(restaurant?.menu?.items)?.map((obj)=>{
       
                        return <li>{obj.name}</li>
                 
          })}
          </ul>

        </div> */}
      </div>
    </div>
  );
}

export default Menu;

// <h1>Restaurant Id : {resId}</h1>
//
// <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.cloudinaryImageId}
//        className="Menu-Res-img"
// />
