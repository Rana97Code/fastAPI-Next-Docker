"use client";

import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import Link from "next/link";

export default function Addcustomer() {

  const [customer_name,setName]=useState("");
  const [customer_email,setEmail]=useState("");
  const [customer_phone,setPhone]=useState("");
  const [customer_address,setPass]=useState("");

  // const navigate = useNavigate(); //for redirect
  // for validation
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const router = useRouter();

  const validate = () => {
    if (formData.customer_name === undefined) {
      setErrors({ ...errors,
        customer_name: 'Name is required'
      });
      return false;
    } else if (formData.customer_name.length < 3) {
      setErrors({ ...errors,
        customer_name: 'Name is too short'
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
    if(!customer_name || !customer_email || !customer_phone || !customer_address )  ///from validation
    {
        setErrors(true)
        return false;
    }

    console.warn(customer_name,customer_email,customer_phone,customer_address);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/customer_add`,{
        method: 'post',
        body:JSON.stringify({customer_name,customer_email,customer_phone,customer_address}),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
      const data = await result.json();
      // alert("Add Successfully")
      router.push('/customers/page')
    }else{
      router.push('/customers/customer_add')
    }
}



  return (
    <DashLayout>
          <div className="mt-10">
            <form className="flex flex-col items-center space-y-3" method="post">
              <div className="relative pb-3">
                <level>Customer Name</level>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-3 ml-5
                rounded-md transition focus:ring-2 focus:ring-green-400" value={customer_name} onChange={(e)=>setEmail(e.target.value)}
                 placeholder="Customer Name" type="text"
                />
              </div>

              <div className="relative pb-3">
                <level>Customer Email</level>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 ml-5
                rounded-md transition focus:ring-2 focus:ring-green-400" value={customer_email} onChange={(e)=>setPass(e.target.value)}
                 placeholder="example@email.com" type="email"
                />
              </div>

              <div className="relative pb-3">
                <level>Customer Phone</level>

                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 ml-5
                rounded-md transition focus:ring-2 focus:ring-green-400" value={customer_phone} onChange={(e)=>setPass(e.target.value)}
                  placeholder="Phone Number" type="text"
                />
              </div>

              <div className="relative pb-3">
                <level>Customer Address</level>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 ml-5
                rounded-md transition focus:ring-2 focus:ring-green-400" value={customer_address} onChange={(e)=>setPass(e.target.value)}
                  placeholder="Address" type="text"
                />
              </div>

              <button className="bg-green-400 font-medium inline-flex items-center px-7 py-2 rounded-md
               text-white transition hover:bg-green-500" type="submit" onClick={onSubmit}>
                Submit
              </button>
              <Link href="http://localhost:3000/components/customers">Back To List</Link>

           </form>
          </div>
    </DashLayout>
 );
}