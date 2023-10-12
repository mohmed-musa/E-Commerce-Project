import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";


export const CartContext = createContext()
export function CartContextProvider({children}){

const [infoItemAdded, setInfoItemAdded] = useState(null);
const [allCountNumber, setAllCountNumber] = useState(0);
const [totalCardPrice, setTotalCardPrice] = useState(0);
const [cartItemId, setCartItemId] = useState(null);




    async function addToCart(idProduct){
      try {
        const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,{
            "productId":idProduct
        },{
            headers:{token:localStorage.getItem("tkn")}
        })

    
setAllCountNumber(data.numOfCartItems)
setTotalCardPrice(data.data.totalCartPrice)
// setInfoItemAdded(data.data.products)
getCardProduct()

        return data
      } catch (error) {
        console.log(error , "error in add product to cart")
      }
    }


async function getCardProduct(){  
   try {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{token:localStorage.getItem("tkn")}
    })

setCartItemId(data.data._id)
    setAllCountNumber(data.numOfCartItems)
    setTotalCardPrice(data.data.totalCartPrice)
    setInfoItemAdded(data.data.products)
   } catch (error) {
    console.log(error)
   }
}


useEffect(() => {
    getCardProduct()
}, []);





async function updateCardProduct(id,count){
    try {
        const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{
            "count": count
        },{
            headers:{token:localStorage.getItem("tkn")}
        })


setAllCountNumber(data.numOfCartItems)
setTotalCardPrice(data.data.totalCartPrice)
setInfoItemAdded(data.data.products)

        return data
      } catch (error) {
        console.log(error , "error in add product to cart")
      }

}





async function deleteProduct(id){
  try {
    const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:{token:localStorage.getItem("tkn")}
    })
    setAllCountNumber(data.numOfCartItems)
setTotalCardPrice(data.data.totalCartPrice)
setInfoItemAdded(data.data.products)
    return data
  } catch (error) {
    console.log(error , "error in delete product")
  }
}







async function clearAllCardProduct(){
  try {
   const {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
       headers:{token:localStorage.getItem("tkn")}
   })

   setAllCountNumber(0)
   setTotalCardPrice(0)
   setInfoItemAdded(null)
  } catch (error) {
   console.log(error , "error in get cart product")
  }
}













    return<>
    <CartContext.Provider value={{addToCart , infoItemAdded ,allCountNumber, totalCardPrice ,getCardProduct,updateCardProduct ,deleteProduct,clearAllCardProduct , cartItemId , setAllCountNumber,setTotalCardPrice,
setInfoItemAdded}}>

    {children}

    </CartContext.Provider>
    
    
    </>



}























































//    async function getProductCard(){

// try {
//     const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
//         headers:{token:localStorage.getItem("tkn")}
//     })
//     return data
// } catch (error) {
//     console.log(error , "eror show")
// }

//     }
    
//     async function removeCartItem(id){

//       try {
//         const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
//             headers:{token:localStorage.getItem("tkn")}
//         })
//         toast.success("Item Deleted Successfully")
//         return data
//       } catch (er) {
//         console.log(er , "error")
//       }



//     }


// async function updateProductCart(id,countUpdate){

// try {
//     const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
//         "count": countUpdate
//     },{
//     headers:{token:localStorage.getItem("tkn")}
// })
// toast.success("Product Updated Successfully")

// return data

// } catch (error) {
//     console.log(error , "error")
// }
// }




// async function clearProduct(){
// try {
    
//     const {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
//         headers:{token :localStorage.getItem("tkn")}
//     })

//     return data
// } catch (error) {
//     console.log(error , "Delete All product Error")
// }
// }