import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Blocks } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const BrandsDetails = () => {


    const {id} = useParams()



async function branding(){
return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
}

const {data} = useQuery("brand" , branding)

if(data == undefined){
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
        <title>{data?.data.data.name}</title>
    </Helmet>

    <div className="container">
        <div>
            <img src={data?.data.data.image} alt="image" className='m-auto d-block' />
            <h1 className='display-1 fw-bold text-center text-white p-5 bg-black m-auto' style={{borderRadius:"50%" , width:"fit-content"}}>{data?.data.data.name}</h1>
        </div>
    </div>
    </>
}

export default BrandsDetails;
