import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import "./AllOrder.css"
import { Helmet } from 'react-helmet';

const AllOrder = () => {

    const [userId, setUserId] = useState(jwtDecode(localStorage.getItem("tkn")).id);
    const [orders, setOrsers] = useState(null);




async function allOrder(){
try {
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    setOrsers(data)
} catch (error) {
    console.log(error)
}}
useEffect(() => {
    allOrder()
}, []);
    

if(orders === null){
    return <h1 className='text-center d-flex align-items-center justify-content-center' style={{minHeight:"44vh"}}>You don't have any Product...</h1>
}







    return <>
    
    <Helmet>
        <title>All Orders</title>
    </Helmet>



    <div className="container">
        {orders?.map(function(elm,idx) {
        return <div key={idx} className="row bg-light my-5 g-4 p-3 align-items-center boxes" style={{borderRadius:"5px"}}>
            <div className="d-flex justify-content-between">
<div>
<div className='m-0 p-0 fs-3 fw-bold text-center mb-4 text-success'>Total Order Price:  {elm.totalOrderPrice} EGP</div>

</div>
                <div>
                <div className=' bg-success p-2 fs-5 fw-bold text-white' style={{borderRadius:"5px"}}>Pending</div>

                </div>
            </div>
         {elm.cartItems?.map(function(elmPro , idxPro){
         return <div key={idxPro} className=" row d-flex justify-content-between align-items-center g-2">
         <div className='col-md-2'>
            <img src={elmPro.product.imageCover} alt="img" style={{width:"150px" , height:"150px",borderRadius:"5px"}} />
        
         </div>
         <div className='col-md-3'>
            <div className='fs-5'>{elmPro.product.title.split(" ").slice(0,2).join(" ")}</div>
            <div className='fs-5'>{elmPro.price} EGP</div>
            <div className='fs-5'><i className="fa-solid fa-star" style={{color:"gold"}}></i>{elmPro.product.ratingsAverage}</div>
           
         </div>
         <div className="col-md-2 offset-5 text-white text-center">
            <div className="item ">
                <img src={elmPro.product.brand.image} alt="img" className='boxess' style={{width:"150px" , height:"150px" , borderRadius:"5px"}} />
            </div>
         </div>
      </div>
    
    })}
       

        </div>
        })}
    </div>
    
 
    </>
}

export default AllOrder;
