"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';


const PrivateRoute=()=>{

    const router = useRouter();

    useEffect(() => {
        // localStorage.getItem('user_email')
        const user = sessionStorage.getItem('user_email')
        if(user){
          router.push("../components/dashboard")
        }
        else{
          router.push("./user/login")
        }
      }, [])
    
    
    return  useEffect;
}

export default PrivateRoute;