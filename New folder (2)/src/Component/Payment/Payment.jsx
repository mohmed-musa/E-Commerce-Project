import axios from 'axios';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Payment = () => {

    const {cartItemId ,setTotalCardPrice,setInfoItemAdded,setAllCountNumber} = useContext(CartContext)


// async function payment(){
//     const phone = document.getElementById("phone").value
// const city = document.getElementById("city").value
// const details = document.getElementById("details").value

// try {
//     const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartItemId}`,
// {
    
//         "shippingAddress":{
//             "details": details,
//             "phone": phone,
//             "city": city
//             }
    
// },{
//     headers:{token:localStorage.getItem("tkn")}
// })
// setTotalCardPrice(0)
// setInfoItemAdded(null)
// setAllCountNumber(0)

// console.log(data)
// if(data.status == "success"){
//     toast.success("Order Added Successfully")
// }

// } catch (error) {
//     toast.error("Order Faild")
//     console.log(error , "error in Payment")
// }

// }



async function authPayment(){
    const phone = document.getElementById("phone").value
    const city = document.getElementById("city").value
    const details = document.getElementById("details").value
 

    try {
        const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartItemId}`,
        {
            "shippingAddress":{
                "details": details,
                "phone": phone,
                "city": city
                }
        },{
            headers:{token:localStorage.getItem("tkn")},
            params:{url:`http://localhost:${window.location.port}`}
        })
        window.open(data.session.url)
        console.log(data)
    } catch (error) {
    console.log(error , "error on get Payment")
    }
}


    return <>
    
    <Helmet>
        <title>Payment</title>
    </Helmet>





    <div className="container">
        <div className='mt-2'>
        <label htmlFor="phone">Phone:</label>
        <input id='phone' type="tel" className='form-control' placeholder='Phone Number'/>
        </div>

        <form>

<div className='mt-2'>
<label htmlFor="city">City:</label>
        <input id='city' type="tel" className='form-control' placeholder='City' style={{textTransform:"capitalize"}}/>
</div>
  
<div className='mt-2'>
<label htmlFor="details">Details:</label>
        <textarea id='details' type="tel" className='form-control' placeholder='Name:                                                                                                                                                                                                                                  Address:' style={{textTransform:"capitalize"}}/>
</div>
        <div className='mt-4'>
        {/* <span className='btn btn-primary mx-3' onClick={payment} > Make Order</span> */}
        <span className='btn btn-outline-success mx-3 w-100' onClick={authPayment}>Pay Now</span>
    </div>
    </form>
    </div>

 
    
    
    
    </>
}

export default Payment;
