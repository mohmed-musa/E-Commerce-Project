import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Blocks } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Brand = () => {

    const [getData, setGetData] = useState(null);

 async function branding(){
 return await axios.get("https://ecommerce.routemisr.com/api/v1/brands?limit=10")

    }

 const {data} = useQuery('data' , branding)




if(data?.data.data == undefined){
    return <div className='d-flex justify-content-center align-items-center' style={{minHeight:"44vh"}}>
<Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
</div>
}

    return <>
     <Helmet>
        <title>Brand</title>
    </Helmet>





    <div className="container">
        <h1 className='text-center text-success my-3 display-3 fw-bold' >All Brands</h1>
        <div className="row">
            {data?.data.data.map(function(elm,idx) {
            return<Link className='d-block col-md-3 m-auto' key={idx} rel="stylesheet" to={`/brandsdetails/${elm._id} `} >
            <div>
                
<img src={elm.image} alt="img" className='w-100'/>


</div>

</Link>

})}
        </div>
    </div>
     
    
    
    
    </>
}

export default Brand;
