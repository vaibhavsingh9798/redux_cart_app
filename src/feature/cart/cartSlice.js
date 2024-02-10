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
           
      },
      increaseItem(state,action){

        let existItem = state.items.find((item) => item.title === action.payload.title)
        if(existItem){
            existItem.quantity += 1
            state.totalPrice += existItem.price
        }
    state.totalItem += 1
         
      },
      reduceItem(state,action){
         console.log('redu call..')
        let existItem = state.items.find((item) => item.title === action.payload.title)
        if(existItem){
            existItem.quantity -= 1
            state.totalItem -= 1
            state.totalPrice -= existItem.price
            if(existItem.quantity == 0){
            let updatedItems = state.items.filter((item) => item.title !== action.payload.title) 
            state.items = updatedItems; 
              

            }
        }
    
      }

    }
})

export const { setCartItem,setShowCart,increaseItem,reduceItem} = cartSlice.actions

export default cartSlice.reducer;