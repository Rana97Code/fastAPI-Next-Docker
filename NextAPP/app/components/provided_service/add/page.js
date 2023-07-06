"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import Link from "next/link";

export default function AddServicetime() {

  const [customer_id,setCust]=useState("");
  const [product_id,setPro]=useState("");
  const [p_qty,setQty]=useState("");
  const [purchase_date,setDate]=useState("");
  const [service_time,setTime]=useState("");
 
  const [Product, setProduct]= useState([]); 
  const [Customer, setCustomer]= useState([]); 

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
        body:JSON.stringify({customer_id,product_id,p_qty, purchase_date, service_time }),
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

        <div className="mt-10">
        <div className="flex flex-col items-center space-y-2  ">
          <h1 className="font-medium text-green-400 text-3xl pb-4"> Provide New Service </h1>
        </div>

          <form className="flex flex-col items-center space-y-3" method="post">
            <div className="grid grid-cols-2 gap-8">
              <div className="label text-right">
                <label>Customer Name</label>
              </div>
              <div className="ibox">
              <select className="text-black border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-20 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={customer_id}  onChange={(e)=>setCust(e.target.value)}>
                  <option defaultValue>Select Customer</option>
                 {  Customer.map((customer)=> 
                  <option className="text-black" value={customer.id}>{customer.customer_name}</option>
                  ) }
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="label text-right">
               <label>Product Name</label>
              </div>
              <div className="ibox">
              <select className="text-black border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-24 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={product_id} onChange={(e)=>setPro(e.target.value)}>
                  <option defaultValue>Select Product</option>
                 {  Product.map((product)=> 
                  <option className="text-black" value={product.id}>{product.product_name}</option>
                  ) }
                </select>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-8">
              <div className="label text-right ">
                <label>Service Quantity</label>
              </div>
              <div className="ibox">
              <input className="text-black border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={p_qty} onChange={(e)=>setQty(e.target.value)}
                  placeholder="Service Quantity." type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="label text-right">
                <label>Service Purchase Date</label>
              </div>
              <div className="ibox">
              <input className="text-black  border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-24 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={purchase_date} onChange={(e)=>setDate(e.target.value)}
                  placeholder="Service Purchase Date." type="date"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="label text-right">
              <label>Service Duration</label>
              </div>
              <div className="ibox">
                <select className="text-black border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-20 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={service_time} onChange={(e)=>setTime(e.target.value)}>
                  <option defaultValue>Select Service Duration</option>
                 
                  {/* <option className="text-black" value="0.3">3 Month</option>
                  <option className="text-black" value="0.6">6 Month</option> */}
                  <option className="text-black" value="01">1 Year</option>
                  <option className="text-black" value="02">2 Year</option>
                  <option className="text-black" value="03">3 Year</option>
                  <option className="text-black" value="04">4 Year</option>
                  <option className="text-black" value="05">5 Year</option>
                </select>
              </div>
            </div>

              <button className="bg-green-400 font-medium inline-flex items-center px-10 py-2 rounded-md
               text-white transition hover:bg-green-500" type="submit" onClick={onSubmit}>
                Submit
              </button>
              <Link href="http://localhost:3000/components/provided_service">Back To List</Link>

           </form>
        </div>


    </DashLayout>
  );
}