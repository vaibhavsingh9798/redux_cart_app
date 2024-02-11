import {setCartItem} from "./cartSlice"
let URL = 'https://crudcrud.com/api/e3fb84a133474161b1d2be1ec7330e0b'

export const fetchCartData = () =>{
    return  async (dispatch,getState) =>{
        try{
           let response = await fetch(`${URL}/cart-item`)
           if(response.ok){
            let data = await response.json()
             console.log('fetch cart from thunk',data)
          data.map((item) => {
            dispatch(setCartItem(item))
          })   
           }
        }catch(error){
            throw new Error('Something wrong with sendCartData')
        }
    }
}

export const sendCartData = (item) =>{

    return  async (dispatch,getState) =>{
         console.log('send data call',item)

         try{
         let response = await fetch(`${URL}/cart-item`,{
           method:'POST',
           body:JSON.stringify(item),
           headers:{'Content-Type':'application/json'}

         })
        }catch(error){
            console.error('something wrong with sendCartData')
        }
    }
}