import React, { useState } from 'react';

const Footer = () => {

    const [valinpo, setValinpo] = useState("");



    return <>
    <div className="bg-light py-3">
        <div className="container">

        
        <h3>Get the Feesh Cart app</h3>
        <div className="text-muted">We will send you  a link, open it in your phone to download the app.</div>
   



   <form className="row py-0 my-0 align-items-center" onSubmit={function(e){e.preventDefault()}}>
<div className="col-md-9">
<input type="email" className='form-control'placeholder='Email....' required id='emailos' onChange={(e)=>{setValinpo(e.target.value)}}/>

</div>
<div className="col-md-3">
<button disabled={valinpo.length < 10} className='btn  w-100 py-1 text-white ' style={{transition:".5s" , backgroundColor:"#0AAD0A"}}>Share App Link</button>

</div>
   </form>

   <hr />
<div className="d-flex justify-content-between align-items-center p-0 m-0">
    <div className='d-flex flex-row align-items-center'>
<h6 style={{whiteSpace:"nowrap"}}>
Payment Partners
</h6>  
    <div>
        <img src={require("../../images/pngwing.com (1).png")} alt="" style={{width:"40px"}} className='mx-1'/>
        <img src={require("../../images/american-express.png")} alt="" style={{width:"40px"}} className='mx-1'/>
        <img src={require("../../images/masterCard.png")} alt="" style={{width:"40px"}} className='mx-1'/>
        <img src={require("../../images/paypal.png")} alt="" style={{width:"40px"}} className='mx-1'/>
    </div>


      </div>


    <div className='d-flex align-items-center' >
<h6>Get deliveries with FreshCart</h6>
        <div>
        <img src={require("../../images/google play.png")} alt="" style={{width:"100px"}} className='mx-1'/>
        <img src={require("../../images/app store.png")} alt="" style={{width:"100px"}} className='mx-1'/>

        </div>
    </div>

</div>
   <hr />


        </div>
    </div>
    
    
    
    
    </>
}

export default Footer;
