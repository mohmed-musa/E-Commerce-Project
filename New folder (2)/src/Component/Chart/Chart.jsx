import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import "./cart.css"
import { Blocks } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Chart = () => {

    const {infoItemAdded ,allCountNumber, totalCardPrice,updateCardProduct , deleteProduct,getCardProduct,clearAllCardProduct} = useContext(CartContext)

if(infoItemAdded == null){
    return <h1 className='text-center d-flex align-items-center justify-content-center' style={{minHeight:"44vh"}}>You don't have any Product...</h1>
    }else{

    }
async function update(id,count){

try {
    const res = await updateCardProduct(id,count)
toast.success("Product Updated Successfully")
} catch (error) {
    console.log(error)
}


}


getCardProduct()
async function deletePro(id){
    const res = await deleteProduct(id)
    toast.success("Product Deleted Successfully")
}
async function clear(){
    const res = await clearAllCardProduct()
}


return <>
<div className="container my-4 bg-light p-3 king" style={{borderRadius:"5px"}}>
<h2>Shop Cart:</h2>
<h4>Total Item: {allCountNumber}</h4>
<h4>Total Cart Price: {totalCardPrice} EGP</h4>
<div className="d-flex justify-content-between">
<button onClick={clear} className='btn btn-success'>Clear All Cart</button>
<Link to={"/payment"} className='btn btn-success'>Make Order</Link>
</div>
{infoItemAdded?.map((elm,idx)=>{
return <div key={idx} className="row mt-5 align-items-center">
    
    <div className="col-md-1">
        <img src={elm.product.imageCover} alt="img" className='w-100' />
    </div>
    <div className="col-md-7">
    <div>{elm.product.title}</div>
    <div>{elm.price} EGP</div>
    <div style={{cursor:"pointer"}} onClick={()=>deletePro(elm.product.id)}><span><i className="fa-solid fa-trash-can text-success"></i></span> Remove</div>

    </div>


    <div className="col-md-3 offset-1">
        <div className="item d-flex justify-content-around align-items-center">
            <button className='btn btn-outline-success px-3 py-0' onClick={()=>update(elm.product.id , elm.count + 1 )}>+</button>
            <h6>{elm.count}</h6>
            <button className='btn btn-outline-success px-3 py-0' onClick={()=>update(elm.product.id , elm.count - 1 )}>-</button>
        </div>
    </div>
    
</div>


})}


<Helmet>
<title>    Chart
</title></Helmet>


</div>
<br/>
<br/>
 </>
}

export default Chart
