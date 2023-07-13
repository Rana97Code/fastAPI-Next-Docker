'use client'
import React, { useState,useEffect }  from "react"
import { useRouter } from 'next/navigation'
import Welcome from '../components/dashboard/page';

const PrivateRoute =()=>{

    const router = useRouter();

    useEffect(() => {
        const user = sessionStorage.getItem('user_email')
        if(!user){
          // router.push("../components/dashboard")
          router.push("./user/login")
        }
        // else{
        //   router.push("./user/login")
        // }
      }, [])
    
    
    return  (
      <>
        <Welcome />
      </>
    );
}

export default PrivateRoute;