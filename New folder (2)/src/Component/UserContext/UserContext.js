import axios from "axios";
import { createContext, useEffect, useState } from "react";




export const userContext = createContext()



export function UserProvider({children}){


    const [dataFor, setDataFor] = useState([]);
    const [valueInput , setValueInput] = useState("")
    const [token, setToken] = useState(null);
    const [resetCode, setResetCode] = useState(null);
    const [errorFor, setErrorFor] = useState([]);
    const [coding, setCoding] = useState([]);
    const [errorCode, setErrorCode] = useState(null);
    const [successCode, setSuccessCode] = useState(null);






    async function forgetPassword(){
        try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",{
                "email":valueInput
            })
setDataFor(data)
        } catch (error) {
        console.log(error?.response?.data ,  "error in forget password")
        }

        }
        
        useEffect(() => {
           forgetPassword()
        }, []);


async function getCode(resetCode){
        try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",{
                resetCode
            })
 setSuccessCode(data)
} catch (error) {

            setErrorCode( error)
        }
        }

return <userContext.Provider value={{token , setToken , forgetPassword , setValueInput  ,dataFor, setDataFor , errorFor , getCode ,resetCode ,coding, setCoding,errorCode,successCode, setSuccessCode , valueInput}}>

{children}

</userContext.Provider>


}