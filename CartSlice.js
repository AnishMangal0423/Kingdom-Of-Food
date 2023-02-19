import { createSlice } from "@reduxjs/toolkit"; 


const CartSlice=createSlice({

     name:"Cart",
     initialState:{

        items:[]
     },

    reducers:{

        additem:(state,action)=>{
            state.items.push(action.payload);
        },

        removeitem:(state,action)=>{
           delete state.items[action.payload];
        },

       clearCart:(state)=>{
        state.items=[];
       }

    }


})

export default CartSlice.reducer;
export const {additem,removeitem,clearCart}= CartSlice.actions; 
