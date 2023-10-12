import axios from 'axios';
import React, { useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import "./Categories.css"

const Categories = () => {

async function getCategories(){

   return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
}

const {data , isLoading}= useQuery("Categories", getCategories)



useEffect(() => {
    getCategories()
}, []);

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




return<>
<br /><br />
<div className="container">
    <div className="row g-4">
        {data?.data.data.map(function(elm , idx){console.log(elm)
        return <div key={idx} className="col-md-4">

<img src={elm.image} alt="img" className='w-100 imego p-5' />
<h4 className='text-center fs-3'>{elm.name}</h4>

        </div>
        
        
        
        })}
    </div>
</div> 



    
    
    
    </>
}

export default Categories;
