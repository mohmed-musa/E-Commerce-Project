import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';


const Register = () => {
  
let user = {
    name: "",
    email: "",
    password:"",
    rePassword:"",
    phone:"",
}

const [yes , setYes] = useState(null)
const [no , setNo] = useState(null)
const [load , setLoad] = useState(false)

const navigate = useNavigate()



async function dataApi(values){
    setLoad(true)
try{
    const {data} =await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
console.log(data.message)
setYes(data.message)
setTimeout(()=>{
    navigate("/login")

},2000)

}catch(error){
console.log(error.response.data.message)
setNo(error.response.data.message)
}
setLoad(false)

}







const totalFormik = useFormik({
initialValues:user,
onSubmit:dataApi,
validate:function(value){
let error = {}

setYes(null)
setNo(null)
    if(! value.name.match(/^[a-z\sA-Z]{5,20}$/)){
            error.name = "name is so longer.you must write 5-20 letter "
        }

    if(!value.email.includes("@") || !value.email.includes(".com")){
error.email = "email error"
    }

    if(!value.password.match(/^[\w]{5,15}$/)){
        error.password = "Password must be 5-15"
            }


if(value.rePassword !== value.password){
error.rePassword = "password not match"
    }


    if(!value.phone.match(/^[0-9]{10,20}$/)){
error.phone = "Number must be 10 to 20 number"
    }


    return error
}
})





return<>

<div className='m-auto w-75 mt-4'>
<h1 className='display-5 fw-bold mb-3'>Register Now: </h1>



{no?<div className='alert alert-danger'>Account alredy Exist</div> : ""}
{yes?<div className='alert alert-success'>Acouunt hs Created Successfully</div>: ""}



<form onSubmit={totalFormik.handleSubmit}>
<label htmlFor="name">Name:</label>
<input onBlur={totalFormik.handleBlur} onChange={totalFormik.handleChange} value={totalFormik.values.name} id='name' type="text" className='form-control mb-2' placeholder='Name' />
{totalFormik.errors.name && totalFormik.touched.name?<div className='alert alert-danger'>{totalFormik.errors.name}</div> : ""}

<label htmlFor="email">Email:</label>
<input onBlur={totalFormik.handleBlur} onChange={totalFormik.handleChange} value={totalFormik.values.email} id='email' type="email" className='form-control mb-2' placeholder='Email' />
{totalFormik.errors.email && totalFormik.touched.email?<div className='alert alert-danger'>{totalFormik.errors.email}</div> : ""}


<label htmlFor="password">Password:</label>
<input onBlur={totalFormik.handleBlur} onChange={totalFormik.handleChange} value={totalFormik.values.password} id='password' type="text" className='form-control mb-2' placeholder='Password' />
{totalFormik.errors.password && totalFormik.touched.password?<div className='alert alert-danger'>{totalFormik.errors.password}</div> : ""}


<label htmlFor="rePassword">RePassword:</label>
<input onBlur={totalFormik.handleBlur} onChange={totalFormik.handleChange} value={totalFormik.values.rePassword} id='rePassword' type="text" className='form-control mb-2' placeholder='RePassword' />
{totalFormik.errors.rePassword && totalFormik.touched.rePassword?<div className='alert alert-danger'>{totalFormik.errors.rePassword}</div> : ""}



<label htmlFor="phone">Phone:</label>
<input onBlur={totalFormik.handleBlur} onChange={totalFormik.handleChange} value={totalFormik.values.phone} id='phone' type="tel" className='form-control mb-2' placeholder='Phone Number' />

<button type='submit' disabled={totalFormik.isValid == false || totalFormik.dirty == false} className='btn btn-success my-2 d-block ms-auto px-3 py-1 d-flex align-item-center justify-content-center'>
{load?<ThreeCircles
  height="25"
  width="25"
  color="black"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
  
/> : "Register" }


</button>

</form>
</div>



</>
}

export default Register;

