import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {



if(localStorage.getItem("tkn") == null){
   return <Navigate to={"/login"}/>
}


    return <>
    
    {children}
    
    
    </>
}

export default ProtectedRoute;
