import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { CartContext } from '../CartContext/CartContext';
import './ProSearch.css'


const ProSearch = () => {


const [inputValue, setInputValue] = useState(null);
const [allproduct, setAllproduct] = useState(null);




    const{addToCart} = useContext(CartContext)

    const [imgategory, setImgategory] = useState(null);
    
    useEffect(() => {
        async function getCategoryImg(){
            const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
            setImgategory(data.data)
        
             }
             getCategoryImg()
    
    }, []);
     
    
    
    
    
    
    
    
    
    
    
    async function getIdAddToCart(id){
    const res = await addToCart(id)
    if(res.status == "success"){
        toast.success(res.message)
    }
    }
    
    














   
    function getProduct(){

        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
        }
        const {data} = useQuery("products" , getProduct ,{
            refetchOnMount:false,
        }) 
        

        if(data?.data.data == undefined){
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
        
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            duration:1800,
            stopOnHover:true,
            arrows:false
          };
        
        
        
        
        
          const settingss = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 3,
            autoplay:true,
            duration:1800,
            stopOnHover:true,
            arrows:false
          };
        
        

    




    return<>



   <div className="content">
   <input type="search" onChange={function(e){setInputValue(e.target.value)}} className='form-control  w-50 m-auto ' placeholder='Search For Your Products......' id='search'/>
   </div>
    <Helmet><title>Products</title></Helmet>
    <div className="container mt-5">
    <div className="row g-4 m-0 p-0">
        {data?.data.data.filter(function (pro) {
            if(inputValue == null){
                return pro
            } else if(pro.title.toLowerCase().includes(inputValue.toLowerCase())){
                return pro
            }
        }).map(function (elm , idx) {
           return <div key={idx} className='col-md-3'>
          <Link to={`/productdetails/${elm.id}`} style={{textDecoration:"none"}}>

<img src={elm.imageCover} alt="img" className='w-100' style={{height:"280px" , borderRadius:"10px"}}/>
<div className='text-success'>{elm.category.name}</div>



<p className='text-dark' style={{whiteSpace:"nowrap"}}>{elm.title.split(" ").slice(0,2).join(" ")}</p>
<div className="d-flex justify-content-between align-item-center">
<div className='text-black'>{elm.price} EGP</div>
<div className='text-muted'><i className="fa-solid fa-star" style={{color:"gold"}}></i>{elm.ratingsAverage}</div>
</div>



</Link> 
<button className='btn btn-success w-100' onClick={()=> getIdAddToCart(elm.id)}>+ Add Product</button>


</div>  })}
   </div>
</div>











    
    
    </>
}
export default ProSearch;
