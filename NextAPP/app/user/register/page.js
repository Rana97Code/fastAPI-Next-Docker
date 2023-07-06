"use client";

import React, { useState,useEffect }  from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import loginimg from "../../../public/img/login.png";
import { FaUser, FaLock, FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle, FaEyeSlash } from "react-icons/fa";


export default function Signup() {

  const [user_name,setName]=useState("");
  const [user_email,setEmail]=useState("");
  const [user_phone,setPhone]=useState("");
  const [user_password,setPass]=useState("");
  const [confirm_password,setCpass]=useState("");

  // const navigate = useNavigate(); //for redirect
  // for validation
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});


  const router = useRouter();


  const validate = () => {
    if (formData.user_name === undefined) {
      setErrors({ ...errors,
        user_name: 'Name is required'
      });
      return false;
    } else if (formData.user_name.length < 3) {
      setErrors({ ...errors,
        user_name: 'Name is too short'
      });
      return false;
    }

    return true;
  };


    useEffect(()=>{
    //   const auth= localStorage.getItem('user');
      // onSubmit();   //create this function
  },[])  //Use array

const onSubmit = async (e)=>{
    validate() ? console.log('Submitted') : console.log('Validation Failed');
     //console.warn(!product_name );
    if(!user_name || !user_email || !user_phone || !user_password || !confirm_password)  ///from validation
    {
        setErrors(true)
        return false;
    }

    console.warn(user_name,user_email,user_phone,user_password,confirm_password);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/create_user`,{
        method: 'post',
        body:JSON.stringify({user_name,user_email,user_phone,user_password,confirm_password}),
        headers:{
            'Content-type':'application/json',
        }
    });

    if(result.ok){
      const data = await result.json();
      alert("Registration Successfull")
      sessionStorage.setItem("user_email",JSON.stringify(data));  //for storing data in localStoreg for checking user log in or not and create field "user" to store data
      sessionStorage.setItem("access_token",data.access_token);
      router.push('/components/dashboard')
    }else{
      router.push('/user/register')
    }

    // }
}



  return (
    <div className='bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-1 md:flex'>
    {/* registration card start */}
    <div className=" bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg 
    text-gray-950 w-full md:flex-row font-sans">

      <Image
        src={loginimg}
        alt="registration" width="550" height="400">
      </Image>

      {/* Form start */}
      <div className="h-full from-green-300 flex flex-col items-center p-4 w-full md:w-1/2">
        
        <div className="flex flex-col items-center space-y-2  ">
          <h1 className="font-medium text-green-400 text-3xl pb-4"> Create Account </h1>
        </div>

        {/* Inputs */}
        <form className="flex flex-col items-center space-y-3 pt-1">
          <div className="relative pb-3">
            <span className="absolute flex inset-y-0 items-center pl-3 pb-3 text-gray-400">
              <FaUser />
            </span>
            <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-2 
            rounded-md transition focus:ring-2 focus:ring-green-400" value={user_name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name....." type="text"
            />
          </div>
          <div className="relative pb-3">
            <span className="absolute flex inset-y-0 items-center pl-3 pb-3 text-gray-400">
              <FaUser />
            </span>
            <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-2 
            rounded-md transition focus:ring-2 focus:ring-green-400" value={user_email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email....." type="text"
            />
          </div>
          <div className="relative pb-3">
            <span className="absolute flex inset-y-0 items-center pl-3 pb-3 text-gray-400">
              <FaUser />
            </span>
            <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-2 
            rounded-md transition focus:ring-2 focus:ring-green-400" value={user_phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number....." type="text"
            />
          </div>
          <div className="relative pb-3">
            <span className="absolute flex inset-y-0 items-center pl-3 pb-3 text-gray-400">
              <FaLock />
            </span>
            <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-2
            rounded-md transition focus:ring-2 focus:ring-green-400" value={user_password} onChange={(e)=>setPass(e.target.value)} placeholder="Password....." type="password"
            />
          </div>
          <div className="relative pb-3">
            <span className="absolute flex inset-y-0 items-center pl-3 pb-3 text-gray-400">
              <FaLock />
            </span>
            <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-2 
            rounded-md transition focus:ring-2 focus:ring-green-400" value={confirm_password} onChange={(e)=>setCpass(e.target.value)} placeholder="Confirm Password....." type="password"
            />
          </div>
          <div className="w-64 mb-2 pt-1">
            <label className="text-xs accent-green-500"><input className="mr-1" type="checkbox" name="remember" />
              I accept the <a href="#" className="text-xs text-green-500">Terms of Use</a> & <a href="#" className="text-xs text-green-500">Privacy Policy.</a>
            </label>
          </div>
          <button className="bg-green-400 font-medium inline-flex items-center px-8 py-2 rounded-md
           text-white transition hover:bg-green-500" onClick={onSubmit} type="submit">
            Signup
          </button>
          <div className="w-64 mb-2 pt-1">
            <p className="text-xs accent-green-500">
              Already have an account? <a href="http://localhost:3000/user/login" className="text-xs text-green-500">Login</a>
            </p>
          </div>
          

          {/* Links */}
          <div className="flex justify-center my-2 pt-2">
            <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
              <FaFacebookF className="text-sm fill-gray-950" />
            </a>
            <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
              <FaLinkedinIn className="text-sm fill-gray-950" />
            </a>
            <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
              <FaTwitter className="text-sm fill-gray-950" />
            </a>
            <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
              <FaGoogle className="text-sm fill-gray-950" />
            </a>
          </div>
        </form>

      </div>
      {/* From end */}
    </div>
    {/* registration card end */}

  </div>


  );
}

