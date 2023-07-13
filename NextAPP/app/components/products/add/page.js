"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import products from "/public/img/products.jpg";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Select,InputLabel, MenuItem ,FormControl, FormLabel, Input, TextField  } from '@mui/material';


export default function Addproduct() {

  const [product_name,setName]=useState("");
  const [product_sku,setSku]=useState("");
  const [unit_id,setUnit]=useState("");
  const [product_qty,setQty]=useState("");
  const [product_details,setDetail]=useState("");
 
  const [Units, useUnit]= useState([]); //([]) array for dropdown all data list 

  // const navigate = useNavigate(); //for redirect
  // for validation
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();

  // const validate = () => {
  //   if (formData.product_name === undefined) {
  //     setErrors({ ...errors,
  //       product_name: 'Name is required'
  //     });
  //     return false;
  //   } else if (formData.product_name.length < 2) {
  //     setErrors({ ...errors,
  //       product_name: 'Name is too short'
  //     });
  //     return false;
  //   }

  //   return true;
  // };


  useEffect(()=>{
    getUnit();   //create this function
},[])  //Use array


const getUnit = async(e)=>{
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/units`);
  
  if (!data.ok){
    throw new Error('Could not data exist');
  }else{
  let res = await data.json();
  useUnit(res)
  // console.warn(res)
}
}

const onSubmit = async (e)=>{
    // validate() ? console.log('Submitted') : console.log('Validation Failed');
    //  //console.warn(!product_name );
    // if(!product_name || !product_sku || !product_qty || !product_details )  ///from validation
    // {
    //     setErrors(true)
    //     return false;
    // }




    console.warn(unit_id,product_name,product_details);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/product_add`,{
        method: 'post',
        body:JSON.stringify({unit_id,product_name,product_sku,product_qty, product_details}),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
        const data = await result.json();
        // alert("Add Successfully")
        router.push('/components/products')
      }else{
        router.push('/components/products/add')
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
        src={products}
        alt="login"
        width={550}
        height={400}
    />

    {/* Form */}
    <div className="h-full from-green-300 flex flex-col items-center p-8 w-full md:w-1/2">
      {/* Welcome */}
      <div className="flex flex-col items-center space-y-2 pb-0 ">
        <h1 className="font-medium text-green-400 text-3xl ">Add New products</h1>
        <p className=" text-lg pb-8"> products Details </p>
      </div>

    <div className="mt-10">
      <form className="flex flex-col items-center space-y-3" method="post">

        <TextField id="outlined-basic" label="Product Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
        <TextField id="outlined-basic" label="Product SKU" variant="outlined" onChange={(e)=>setSku(e.target.value)} />
        <FormControl fullWidth>
        <InputLabel id="select">Unit Name</InputLabel>
        <Select labelId="select" id="demo-simple-select-standard" label="Unit Name" onChange={(e)=>setUnit(e.target.value)} >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {Units.map(unit => (
             <MenuItem key={unit.value} value={unit.id}>{unit.unit_name}</MenuItem>
             )) }
        </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Product Quantity" variant="outlined" onChange={(e)=>setQty(e.target.value)} />
        <TextField id="outlined-basic" label="Product Details" variant="outlined" onChange={(e)=>setDetail(e.target.value)} />

        <Button variant="outlined" type="submit" onClick={onSubmit}>Submit</Button>

        <Link  className="text-green-400" href="http://localhost:3000/components/products" prefetch={true}>Back To List</Link>
     </form>
    
    </div>
    </div>
    </div>
    </div>
    </Box>

</DashLayout>
  );
}