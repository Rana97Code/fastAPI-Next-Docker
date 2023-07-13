"use client";

import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/navigation';
import DashLayout from "../../dashboard/Dashlayout";
import Link from "next/link";
import mail from "/public/img/mail.jpg";
import Image from "next/image";
import { Box, Button, Select,InputLabel,TextareaAutosize, MenuItem ,FormControl, FormLabel, Input, TextField  } from '@mui/material';

// import TextareaAutosize from '@mui/base/TextareaAutosize';


export default function AddMail() {

  const [mail_type,setType]=useState("");
  const [mail_content,setContent]=useState("");

 
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  
  const router = useRouter();



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
        router.push('/components/mail_content')
      }else{
        router.push('/components/mail_content/add')
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
              src={mail}
              alt="login"
              width={550}
              height={400}
          />

          <div className="h-full from-green-300 flex flex-col items-center p-8 w-full md:w-1/2">
            {/* Welcome */}
            <div className="flex flex-col items-center space-y-2 pb-0 ">
              <h1 className="font-medium text-green-400 text-3xl ">Add New Mail</h1>
              <p className=" text-lg pb-8"> Mail Content Details </p>
            </div>

          <div className="mt-10">
            <form className="flex flex-col items-center space-y-3" method="post">

              <FormControl fullWidth>
              <InputLabel id="select">Mail Type</InputLabel>
              <Select labelId="select" id="demo-simple-select-standard" onChange={(e)=>setType(e.target.value)} >
                  <MenuItem value=""> <em>None</em> </MenuItem>
                  <MenuItem value="Mail"> Mail </MenuItem>
                  <MenuItem value="SMS"> SMS </MenuItem>
                 
              </Select>
              </FormControl>
              <TextareaAutosize minRows={2} placeholder="Mail Content" id="input-with-sx" variant="standard" onChange={(e)=>setContent(e.target.value)} />

              <Button variant="outlined" type="submit" onClick={onSubmit}>Submit</Button>

              <Link  className="text-green-400" href="http://localhost:3000/components/mail_content" prefetch={true}>Back To List</Link>
          </form>
          
          </div>
          </div>
          </div>
          </div>
      </Box>

    </DashLayout>
  );
}