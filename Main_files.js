import Data from "./Data.js";
import React from "react";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Shimar } from "./Shimar.js";
// now starting to import routers
import { Link } from "react-router-dom";
import Search_icon from "./Images/search-bar.png";
import No_Restaurant from "./No_Restaurant.js";
import "./p5.css";
import search_logo from "./Images/search-logo.png";
import Person from "./Usercontext.js";
import LoginForm from "./LoginForm.js";
import { useLocation } from "react-router-dom";
import Crousal_Card from "./Crousal_card.js";
import left from "./Images/left1.png";
import right from "./Images/right.png";

function Main_files(props) {
  /**
   * Now i am using the changing of state concept -->
   *
   * **/
  // for chaning the mode of the theme

  let location = useLocation();
  let user = location?.state?.obj;
  let [current, setCurrent] = React.useState("Change Theme");
  // for text in  our search box
  let [searchtext, setsearchtext] = React.useState("");

  // ffor reflacting only only those templates which are satisfying the property.
  let [newData, setnewData] = React.useState([]);
  // let a=2;

  let [filterobj, setfilterobj] = React.useState([]);

  let [crousalList, setcrousallist] = useState([]);

  function check(tosearch) {
    // setnewData(newData);
    return newData.filter((member) => {
      return member?.data?.name?.toLowerCase().includes(tosearch.toLowerCase());
    });
  }

  function func() {
    setCurrent(function (oldvalue) {
      if (oldvalue == "Light Mode") {
        document.body.style.backgroundColor = "black";
        document.getElementById("mode_btn").style.color = "white";
        // document.body.style.opacity = "0.6";
        // document.getElementsByClassName("btn-list").style.color="white";
        return "Dark Mode";
      } else {
        document.body.style.backgroundColor = "whitesmoke";
        // document.getElementsByClassName("btn-list").style.color="black";

        return "Light Mode";
      }
    });
  }

  // function print(){
  //   console.log("i am print function")
  // }
  // making the api calls of swiggy using useeffect

  useEffect(() => {
    console.log("useeffect");

    call_swiggy();
    // print()
  }, []);

  async function call_swiggy() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    );

    let readabledata = await data.json();
    console.log(readabledata);

    setnewData(readabledata?.data?.cards[2]?.data?.data.cards);
    setfilterobj(readabledata?.data?.cards[2]?.data?.data.cards);
  }

  useEffect(() => {
    console.log("useEffect 2");

    Call_Crousal();
  }, []);

  async function Call_Crousal() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    );

    let padanewala = await data.json();

    setcrousallist(padanewala?.data?.cards[0]?.data?.data?.cards);
  }

  console.log("render");

  function set1(e) {
    setsearchtext(e.target.value);
  }

  function set2(e) {
    let newarray = check(e.target.value);
    setfilterobj(newarray);
  }

  if (filterobj.length == 0 && newData.length > 0) {
    <No_Restaurant />;
  }

  function relevance_res() {
    console.log("ani");
    setfilterobj(newData);
  }

  function lowTohigh() {
    console.log("hii");
    console.log(filterobj);
    {
      setfilterobj(
        filterobj.sort(
          (obj1, obj2) =>
            obj1?.data?.costForTwo / 100 - obj2?.data?.costForTwo / 100
        )
      );
    }
    console.log(filterobj);
  }

  return newData.length == 0 ? (
    <Shimar />
  ) : (
    <div>
      <div className="h-[200px] bg-black mt-2">
        <div className="flex gap-10 ml-[80px] mr-10 ">
          {/* <div><img src={left} className="h-4 w-4 mt-20 "/></div> */}

          {crousalList.map((items, index) => {
            return <Crousal_Card {...items?.data} key={index} />;
          })}

          {/* <div><img src={right} className="h-4 w-4 mt-20 "  .> */}
        </div>
      </div>

      <div className="search-line flex  mt-4  shadow-2xl ">
        <div className="a border-2 border-black rounded-sm ml-64 shadow-2xl hover:shadow-lg">
          {console.log(props.name)}

          <input
            type="text"
            placeholder="Search Restaurant...."
            className="search-cont  bg-white hover:bg-pink-50 placeholder-pink-800  shadow-xl w-80 px-2"
            value={searchtext}
            onChange={(e) => {
              set1(e);
              set2(e);
            }}
          />
        </div>

        <img src={search_logo} className="h-3 mt-2 -ml-7" />
        {/* <div className="ml-20 border-2 border-black ">
          <button onClick={func} className="">{current}</button>
        </div> */}
      </div>

      <div>{Person?.user1?.name}</div>

      <div className="flex flex-col ml-16  ">
        <div className="flex -mb-4 border-b-2 border-gray-200 ">
          <h1 className="text-xl ml-16 -mb-6 font-bold">
            {filterobj.length} Restaurants
          </h1>
          <ul className="flex ml-56 mt-1 text-gray-700 ">
          

            <button>

              <li classname="ml-4">Relevance</li>
            </button>

            <button>
            <li className="ml-4">Delevery Time</li></button>

            <button>
            <li className="ml-4">Rating</li></button>


            <button onClick={(e) => lowTohigh()}>
              <li className="ml-4">Cost: Low to High</li>
            </button>

            <button>
            <li className="ml-4">Cost: High to low</li>

            </button>
          </ul>
        </div>

        <div className="contacts flex flex-wrap gap-10 mt-10">
          {filterobj.length == 0 && newData.length > 0 ? (
            <No_Restaurant />
          ) : (
            filterobj.map((Contacts, index) => {
              return (
                <Link to={"/restaurant/" + Contacts?.data?.id}>
                  {" "}
                  <Contact {...Contacts.data} key={index} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

// Now doing the routing--

export default Main_files;
