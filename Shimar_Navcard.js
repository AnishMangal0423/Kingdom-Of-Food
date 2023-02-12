function Shimar_Navcard(){

return(

  //   <div className="Shimar-Menu-container">
  //   <div className="Shimar-Menu-Navbar">

  //     <div className="shimar-Menu-Navbar-Img">
     
  //     </div>

  //     <div className="Shimar-Menu-Navbar-description">
       
  //       <div className="Shimar-name-line"></div>

  //       <div className="Shimar-cuisines-name"></div>
  //       <div className="Shimar-location"></div>

  //       {/* Now making  a div that will contain the ratings and all about the Restaurant*/}

  //       <div className="Shimar-Rating-Container">
  //         <div className="Shimar-Actual-Ratings">
  //           <div className="Shimar-Menu-avg-rating"></div>

  //           <div className="Shimar-Menu-People_Rated">
         
  //           </div>
  //         </div>

  //         <div className="Shimar-Actual-Ratings">
  //           <div className="Shimar-Ghante">
        
  //           </div>

  //           <div className="del-time">
  //             <span>
           
  //             </span>
  //           </div>
  //         </div>

  //         <div className="Shimar-Paisa-Container">
  //           <div className="Shimar-Rupees">
  //           {/* {restaurant.costForTwoMsg} */}
  //           </div>

  //           <div className="durriya">
  //             {/* {restaurant.sla.lastMileDistanceString} */}
  //           {/* </div> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


<div className="Menu-container bg-whitesmoke-800 ">
      <div className="Menu-Navbar flex bg-pink-200 h-44 mt-2">
      {/* <div className="Menu-Navbar-Content"> */}
       
          <img
          
            className="Menu-Res-img h-36 w-48 ml-14 mt-4  bg-gray-100 animate-pulse"
          />
       

        <div className="Menu-Navbar-description">
          <h1 className="font-bold mt-10 ml-7 h-3 w-60 bg-gray-100 animate-pulse rounded-xl"></h1> 

          <div className="cuisines-name ml-7 mt-3  h-2 w-40 bg-gray-100 animate-pulse rounded-xl"></div>
          <div className="location ml-7 mt-3  h-2 w-52 bg-gray-100 animate-pulse rounded-xl"></div>

          {/* Now making  a div that will contain the ratings and all about the Restaurant*/}

          <div className="Rating-Container flex ml-7 mt-3">
            <div className="Actual-Ratings pr-4">


           <div className="flex h-3 mt-4 border-2 w-16 bg-gray-100 animate-pulse">
           
              <div className="avg-rating font-semibold "></div>
              </div>

              <div className="People_Rated">
                
              </div>
            </div>

            <div className="Actual-Timings  ml-6 pr-4">
              <div className="Ghante font-semibold h-3 mt-4 border-2 w-16 bg-gray-100 animate-pulse "></div>

              <div className="del-time">
                
              </div>
            </div>

            <div className="Paisa-Container ml-6">
              <div className="Rupees font-semibold h-3 mt-4 border-2 w-16 bg-gray-100 animate-pulse"></div>

              <div className="durriya">
               
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



)

}

export default Shimar_Navcard;