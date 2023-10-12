import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
const {addToCart} = useContext(CartContext)




async function getIdAddProductToCart(id){

    const res = await addToCart(id)
    if(res.status == "success"){
        toast.success(res.message)
    }
}








const {id} = useParams()
function showDetailsProduct(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
const {data , isLoading} = useQuery("productDetails", showDetailsProduct)
if(isLoading === true){
   return <div className='d-flex justify-content-center align-items-center' style={{minHeight:"44vh"}}>
    <Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClassName="blocks-wrapper"
/>
   </div> 
}

    return <>

<Helmet>
        <title>{data.data.data.title.split(" ").slice(0,2).join(" ")}</title>
    </Helmet>

    <div className="container">
        <div className="row justify-content-center align-items-center m-0 p-0">
            <div className="col-md-5">
                <img src={data.data.data.imageCover} alt="img" className='w-75'/>
            </div>

            <div className="col-md-7">
                <p className='fs-1'>{data.data.data.title}</p>
                <p className='text-muted fs-6'>{data.data.data.description}</p>
                <p className='fs-5'>{data.data.data.category.name}</p>
                <div className="d-flex justify-content-between align-item-center">
                    <div className='fs-5'>{data.data.data.price} EGP</div>
                    <div className='fs-5'><i className="fa-solid fa-star" style={{color:"gold"}}/> {data.data.data.ratingsAverage}</div>
                </div>
                <button className='w-100 btn btn-success my-3' onClick={()=>{ getIdAddProductToCart(data?.data.data.id)}}>+ Add to Cart</button>

            </div>
        </div>
    </div>
    </>
}

export default ProductDetails
