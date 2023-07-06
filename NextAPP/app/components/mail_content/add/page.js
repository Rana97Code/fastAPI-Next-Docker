"use client";

import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";

export default function AddMail() {

  const [mail_type,setType]=useState("");
  const [mail_content,setContent]=useState("");

 
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();



//   useEffect(()=>{
//     // onSubmit();   //create this function
// },[])  //Use array

const onSubmit = async (e)=>{

    console.warn(mail_type,mail_content);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/new_content_add`,{
        method: 'post',
        body:JSON.stringify({mail_type,mail_content}),
        headers:{
            'Content-type':'application/json',
            // authorization: `bearer ${JSON.parse(localStorage.getItem('usertoken'))}` //for using middleware authontigation
        }
    });
    if(result.ok){
        const data = await result.json();
        // alert("Add Successfully")
        router.push('/mail_content/page')
      }else{
        router.push('/mail_content/new_mail')
      }
  
}


  return (
    <DashLayout>
          <div className="mt-10">

            <form className="flex flex-col items-center space-y-3" method="post">
              <div className="relative pb-3">
                <label>Mail Type</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={mail_type} onChange={(e)=>setType(e.target.value)}
                 placeholder="Mail Type" type="text"
                />
              </div>
              <div className="relative pb-3">
                <label>Mail Content</label>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 
                rounded-md transition focus:ring-2 focus:ring-green-400" value={mail_content} onChange={(e)=>setContent(e.target.value)}
                 placeholder="Mail Content" type="text"
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