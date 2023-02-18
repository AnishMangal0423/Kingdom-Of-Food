// In this Component we will make store --

import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"



   let Store=configureStore({

      reducer:{

         cart:CartSlice

      }
   })



export default Store

