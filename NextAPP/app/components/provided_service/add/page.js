"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import servicetime from "/public/img/time.jpg";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Select,InputLabel, MenuItem ,FormControl, FormLabel, Input, TextField  } from '@mui/material';



export default function AddServicetime() {

  const [customer_id,setCust]=useState("");
  const [product_id,setPro]=useState("");
  const [p_qty,setQty]=useState("");
  const [purchase_date,setDate]=useState("");
  const [service_time,setTime]=useState("");
 
  const [Product, setProduct]= useState([]); 
  const [Customer, setCustomer]= useState([]); 
  const [Servicet, setServicTime]= useState([]); 

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();

  // const validate = () => {
  //   if (formData.product_id === undefined) {
  //     setErrors({ ...errors,
  //       product_id: 'Name is required'
  //     });
  //     return false;
  //   } else if (formData.year.length < null) {
  //     setErrors({ ...errors,
  //       product_id: 'Name is too short'
  //     });
  //     return false;
  //   }

  //   return true;
  // };


  useEffect(()=>{
     getDetails();   //create this function
},[])  //Use array

const getDetails = async (e)=>{
  const pdata = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products`);
  
  if (!pdata.ok){
    throw new Error('Could not data exist');
  }else{
  let res = await pdata.json();
  setProduct(res)
  // console.warn(res)
  }

  const cdata = await fetch(process.env.NEXT_PUBLIC_API_URL + `/customers`);

  if (!cdata.ok){
    throw new Error('Could not data exist');
  }else{
  let res = await cdata.json();
  setCustomer(res)
  // console.warn(res)
  }

  const servtime = await fetch(process.env.NEXT_PUBLIC_API_URL + `/servicetime`);
  
  if (!servtime.ok){
    throw new Error('Could not data exist');
  }
  let res = await servtime.json();
  setServicTime(res);

}

const onSubmit = async (e)=>{
    // validate() ? console.log('Submitted') : console.log('Validation Failed');
    //  //console.warn(!product_name );
    // if(!product_id || !customer || !service_details )  ///from validation
    // {
    //     setErrors(true)
    //     return false;
    // }
   

    console.warn(customer_id,product_id,p_qty,purchase_date,service_time);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/add_Provided_service`,{
        method: 'post',
        body:JSON.stringify({customer_id, product_id, p_qty, purchase_date, service_time }),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
        const data = await result.json();
        console.warn(data );
        router.push('/components/provided_service')
      }else{
        router.push('/components/provided_service/add')
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
            src={servicetime}
            alt="login"
            width={550}
            height={400}
        />

        <div className="h-full from-green-300 flex flex-col items-center p-8 w-full md:w-1/2">
          {/* Welcome */}
          <div className="flex flex-col items-center space-y-2 pb-0 ">
            <h1 className="font-medium text-green-400 text-3xl ">Provide New Service</h1>
            <p className=" text-lg pb-8"> Service Details </p>
          </div>

        <div className="mt-10">
          <form className="flex flex-col items-center space-y-3" method="post">

            <FormControl fullWidth>
              <InputLabel id="select">Customer Name</InputLabel>
              <Select labelId="select"  label="Customer Name" onChange={(e)=>setCust(e.target.value)} >
                  <MenuItem value=""> <em>None</em> </MenuItem>
                  {Customer.map(customer => (
                  <MenuItem key={customer.value} value={customer.id}>{customer.customer_name}</MenuItem>
                  )) }
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="select">Product Name</InputLabel>
              <Select labelId="select" label="Product Name" onChange={(e)=>setPro(e.target.value)} >
                  <MenuItem value=""> <em>None</em> </MenuItem>
                  {Product.map(product => (
                  <MenuItem key={product.value} value={product.id}>{product.product_name}</MenuItem>
                  )) }
              </Select>
            </FormControl>
            <FormControl fullWidth>
                <TextField id="outlined-basic" label="Product Quantity" variant="outlined" onChange={(e)=>setQty(e.target.value)} />
            </FormControl>

            <FormControl fullWidth>
              <TextField type="date"  onChange={(e) => setDate(e.target.value)} />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="select">Service Duration</InputLabel>
              <Select labelId="select" label="Service Duration" onChange={(e)=>setTime(e.target.value)} >
              <MenuItem value=""> <em>None</em> </MenuItem>
                {Servicet.map(servtime => (
                <MenuItem key={servtime.value} value={servtime.year}>{servtime.service_details}</MenuItem>
                )) }
              </Select>
            </FormControl>        
            <Button variant="outlined" type="submit" onClick={onSubmit}>Submit</Button>

            <Link  className="text-green-400" href="http://localhost:3000/components/provided_service" prefetch={true}>Back To List</Link>
          </form>
        
        </div>
        </div>
        </div>
        </div>
      </Box>

    </DashLayout>
  );
}

