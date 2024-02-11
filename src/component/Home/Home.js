import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import {setShowCart} from "../../feature/cart/cartSlice"
import {fetchCartData} from "../../feature/cart/cartAPI"
import { useEffect } from "react";
const Home =  () =>{
    let dispatch = useDispatch()
    let showCart = useSelector((state) => state.cart.showCart)
    let totalItem = useSelector((state) => state.cart.totalItem)


    useEffect(()=>{
            if(totalItem == 0){
                 dispatch(fetchCartData());
            }
        },[])
 
    return(
        <div>
        <div className="flex justify-around bg-slate-800 text-slate-300 p-7">
         <div className=" font-extrabold text-2xl">
                ReduxCart
                </div>
            <div className="text-lg border-2 border-green-400 px-6 py-1 text-green-300">
                <button onClick={() => dispatch(setShowCart())}>My Cart <span className="bg-green-300 px-1 text-black">{totalItem}</span></button>
            </div>
        </div>
      {showCart &&  <Cart/> }
        </div>
        
    )
}

export default Home;