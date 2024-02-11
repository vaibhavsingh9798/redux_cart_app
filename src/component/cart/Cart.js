import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {increaseItem,reduceItem} from "../../feature/cart/cartSlice"

const Cart = () =>{
    let dispatch = useDispatch()
    let products = useSelector((state) => state.cart.items) || []
    let totalPrice= useSelector((state) => state.cart.totalPrice) 
  
    console.log('pro',products)

    return(
        <div className="flex justify-center m-1">
          <div  className=" w-96 h-auto bg-slate-800 text-slate-400 m-1">
                   <div className="text-lg font-medium">Your Shopping Cart</div>
                   {products.map((item) => {
                    return(
                        <div key={item.title} className="flex justify-center my-1">
                        <div  className="flex   justify-between bg-slate-500 text-slate-200   w-80  h-28">
                                <div className="flex   flex-col justify-around">
                                    <div>{item.title}</div>
                                    <div>X { item.quantity}</div>
                                  </div>

                                    <div className="flex justify-around flex-col">
                                    <div className="font-medium">&#8377;{item.quantity * item.price}<span className="ml-2">(&#8377;{item.price}/item)</span></div>
                                    <div className="flex  justify-end mr-4">
                                        <button className="border-2 rounded-sm px-2 border-slate-300" onClick={() => dispatch(increaseItem(item))}>+</button>
                                        <button className="border-2 rounded-sm px-2 border-slate-300 ml-1" onClick={() => dispatch(reduceItem(item))}>-</button>
                                    </div>
                                    </div>
                            </div>
                            </div>
                    )
                   })}
                    </div>
                    </div>
    )
}

export default Cart