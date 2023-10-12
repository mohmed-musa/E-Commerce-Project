import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const witchListContext = createContext()


export function WitchListProvider({children}){


    const [displayWitch, setDisplayWitch] = useState(null);

    async function addWitchList(id){
        try {
           const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
               "productId": `${id}`
           },{
               headers:{token:localStorage.getItem("tkn")}
           })
           console.log(data)
        } catch (error) {
           console.log("error in add witchlist" , error)
        }
       }


       async function displayWitchList(){

try {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
        headers:{token:localStorage.getItem("tkn")}
    })
setDisplayWitch(data)
} catch (error) {
    console.log("error in displayWitchList" , error)
}
     

       }

  

async function removeWishList(idProductWishList){

   try {
    const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${idProductWishList}`,
    {
        headers:{token:localStorage.getItem("tkn")}
    }
    )
    toast.success("Product deleted Successfully")
   } catch (error) {
    console.log(error)
   }
}

useEffect(() => {
    displayWitchList()
    removeWishList()
   }, []);


return<>
<witchListContext.Provider value={{addWitchList , displayWitch , displayWitchList , removeWishList}}>
{children}
</witchListContext.Provider>
</>

}



