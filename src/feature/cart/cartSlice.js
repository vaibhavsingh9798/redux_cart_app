import {createSlice} from "@reduxjs/toolkit"

const initialState = {showCart:false,items:[],totalItem:0,totalPrice:0}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
       setShowCart(state){
         state.showCart = !state.showCart
       },
      setCartItem(state,action){
          
              let existItem = state.items.find((item) => item.title === action.payload.title)
                if(existItem){
                    existItem.quantity += 1
                    state.totalPrice += existItem.price
                }else{
                    state.totalPrice +=  action.payload.price
                    action.payload.quantity = 1
                    state.items.push(action.payload)
                }

            state.totalItem += 1
           
      }
    }
})

export const { setCartItem,setShowCart} = cartSlice.actions

export default cartSlice.reducer;