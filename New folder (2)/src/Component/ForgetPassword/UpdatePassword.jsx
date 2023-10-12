import axios from 'axios';
import React, { useContext, useState } from 'react';
import { userContext } from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const {valueInput} = useContext(userContext)
    const [newPassword, setNewPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [mainData, setMainData] = useState("");
   const navigate =  useNavigate()

async function updateForgtpassword(){
 
try {
    const {data} =await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , {
        "email": valueInput,
        "newPassword": newPassword
    } )
    console.log(data)
    setMainData(data)



} catch (error) {
    console.log(error)
    
}

}

setTimeout(() => {
    {mainData?.token && navigate("/login")}

}, 2000);




    return <>
    <br />
    <form className='my-4 w-50 m-auto' onSubmit={function(e){e.preventDefault()}}>

<label htmlFor="newTwo" className="form-label fs-5">New Password</label>
<input id='newTwo' type="number" className="form-control" placeholder='New rePassword....' onChange={function(e){setNewPassword(e.target.value)}}/>
{mainData?.token && <p className='alert alert-success'> Password Success </p>}
<button className='btn btn-success my-3' onClick={updateForgtpassword} disabled={newPassword.length < 8}>Submit Password</button>


    </form>
    
    
    </>
}

export default UpdatePassword;
