"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";

export default function Addproduct() {

  const [product_name,setName]=useState("");
  const [product_sku,setSku]=useState("");
  const [unit_id,setUnit]=useState("");
  const [product_qty,setQty]=useState("");
  const [product_details,setDetails]=useState("");
 
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
        router.push('/')
      }else{
        router.push('/add')
      }
  
}


  return (

    <DashLayout>

        <div className="mt-10">
          <form className="flex flex-col items-center space-y-3" method="post">
              <div className="relative pb-3">
                <label>Product Name</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={product_name} onChange={(e)=>setName(e.target.value)}
                 placeholder="Product Name" type="text"
                />
              </div>
              <div className="relative pb-3">
              <label>Product SKU</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={product_sku} onChange={(e)=>setSku(e.target.value)}
                 placeholder="Product SKU" type="text"
                />
              </div>
              <div className="relative pb-3">
              <label>Unit Name</label>
                <select className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 rounded-md transition focus:ring-2
                 focus:ring-green-400 text-black" value={unit_id} onChange={(e)=>setUnit(e.target.value)}>
                    <option value="" disabled selected>Select Unit</option>
                  {Units.map(unit => (
                    <option className="text-black" key={unit.value} value={unit.id}>{unit.unit_name}</option>
                  )) }
                </select>

              </div>
              <div className="relative pb-3">
              <label>Product Quantity</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={product_qty} onChange={(e)=>setQty(e.target.value)}
                  placeholder="Product Quantity." type="text"
                />
              </div>
              <div className="relative pb-3">
              <label>Product Details</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={product_details} onChange={(e)=>setDetails(e.target.value)}
                  placeholder="Product Details." type="text"
                />
              </div>
              <button className="bg-green-400 font-medium inline-flex items-center px-7 py-2 rounded-md
               text-white transition hover:bg-green-500" type="submit" onClick={onSubmit}>
                Submit
              </button>
           </form>
         </div>

    </DashLayout>
  );
}