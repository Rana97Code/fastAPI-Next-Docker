"use client";

import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import Link from "next/link";
import customers from "/public/img/units.png";
import Image from "next/image";
import { Box, Button, FormLabel, Input, TextField  } from '@mui/material';



export default function Addcustomer() {

  const [unit_name,setName]=useState("");
  const [unit_details,setDetail]=useState("");
 

  // const navigate = useNavigate(); //for redirect
  // for validation
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();

  const validate = () => {
    if (formData.unit_name === undefined) {
      setErrors({ ...errors,
        unit_name: 'Name is required'
      });
      return false;
    } else if (formData.unit_name.length < 2) {
      setErrors({ ...errors,
        unit_name: 'Name is too short'
      });
      return false;
    }

    return true;
  };


  useEffect(()=>{
    onSubmit();   //create this function
},[])  //Use array

const onSubmit = async (e)=>{
    validate() ? console.log('Submitted') : console.log('Validation Failed');
     //console.warn(!product_name );
    if(!unit_name || !unit_details )  ///from validation
    {
        setErrors(true)
        return false;
    }

    console.warn(unit_name,unit_details);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/add_unit`,{
        method: 'post',
        body:JSON.stringify({unit_name,unit_details}),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
        const data = await result.json();
        // alert("Add Successfully")
        router.push('/components/units')
      }else{
        router.push('/components/units/add')
      }
  
}



  return (
    <DashLayout>

      <Box>

      <div className='bg-gradient-to-r items-start from-cyan-400 via-blue-50 to-blue-400 block h-screen justify-center p-1 pt-10 md:flex'>
        {/* login card */}
        <div className=" bg-cover bg-image flex flex-col  items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row font-sans">

          <Image 
              priority={true}
              src={customers}
              alt="login"
              width={550}
              height={400}
          />

          <div className="h-full from-green-300 flex flex-col items-center p-8 w-full md:w-1/2">
            {/* Welcome */}
            <div className="flex flex-col items-center space-y-2 pb-0 ">
              <h1 className="font-medium text-green-400 text-3xl ">Add New Unit</h1>
              <p className=" text-lg pb-8"> Unit Details </p>
            </div>

          <div className="mt-10">
            <form className="flex flex-col items-center space-y-3" method="post">

              <TextField id="outlined-basic" label="Unit Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
              <TextField id="outlined-basic" label="Unit Details" variant="outlined" onChange={(e)=>setDetail(e.target.value)} />
              <Button variant="outlined" type="submit" onClick={onSubmit}>Submit</Button>

              <Link  className="text-green-400" href="http://localhost:3000/components/units" prefetch={true}>Back To List</Link>
           </form>
          
          </div>
          </div>
          </div>
          </div>
          </Box>

    </DashLayout>
  );
}