import { useDispatch } from "react-redux"
import {products} from "../../utils/dummyData"
import {setCartItem} from "../../feature/cart/cartSlice"
const Product = () =>{
  
  let dispatch = useDispatch()
  
    const print = () => {
        return(
            products.map((product) =>{
                return(
                    <div  className="flex justify-center">
                    < div className="bg-slate-800 text-slate-400  w-96 h-40 m-2 rounded-md">
                        <div className="flex  justify-between w-full h-full">
                          <div className="flex  flex-col justify-between  h-full">
                            <div className="m-2">{product.title}</div>
                            <div className="m-2">{product.description}</div>
                          </div>
                          <div className="flex  flex-col justify-between h-full">
                            <div className="m-2 bg-gray-400 text-slate-800 rounded-md p-1">&#8377;{product.price}</div>
                            <div className="m-2 bg-gray-200 text-blue-500 rounded-md p-1">
                              <button onClick={() => dispatch(setCartItem(product))}>Add to Cart</button>
                              </div>
                          </div>
                    </div>
                    </div>
                    </div>
                )
            })
        )
    }
    return(
        <div>
          {print()}
        </div>
    )
}

export default Product;