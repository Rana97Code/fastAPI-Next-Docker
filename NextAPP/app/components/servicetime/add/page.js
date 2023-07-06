"use client";
import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import Link from "next/link";

export default function AddServicetime() {

  const [year,setYear]=useState("");
  const [month,setMonth]=useState("");
  const [service_details,setDetails]=useState("");
 


  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();

  const validate = () => {
    if (formData.year === undefined) {
      setErrors({ ...errors,
        year: 'Name is required'
      });
      return false;
    } else if (formData.year.length < null) {
      setErrors({ ...errors,
        year: 'Name is too short'
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
    if(!year || !month || !service_details )  ///from validation
    {
        setErrors(true)
        return false;
    }

    console.warn(year,month);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/servicetime_add`,{
        method: 'post',
        body:JSON.stringify({year,month, service_details}),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
        const data = await result.json();
        // alert("Add Successfully")
        router.push('/servicetime/page')
      }else{
        router.push('/servicetime/servicetime_add')
      }
  
}



  return (
    <DashLayout>

        <div className="mt-10">
          <form className="flex flex-col items-center space-y-3" method="post">
              <div className="relative pb-3">
                <label>Service Year</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={year} onChange={(e)=>setYear(e.target.value)}
                 placeholder="Service Year" type="text"
                />
              </div>
              <div className="relative pb-3">
              <level>Month</level>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={month} onChange={(e)=>setMonth(e.target.value)}
                 placeholder="Month" type="text"
                />
              </div>

              <div className="relative pb-3">
              <level>Service Details</level>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={service_details} onChange={(e)=>setDetails(e.target.value)}
                  placeholder="Service Details." type="text"
                />
              </div>
              <button className="bg-green-400 font-medium inline-flex items-center px-7 py-2 rounded-md
               text-white transition hover:bg-green-500" type="submit" onClick={onSubmit}>
                Submit
              </button>
              <Link href="http://localhost:3000/components/servicetime">Back To List</Link>

           </form>
         </div>




    </DashLayout>
  );
}