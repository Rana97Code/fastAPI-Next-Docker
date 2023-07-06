"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import user from "../../../public/img/1.png";
import { FiChevronDown, FiChevronRight, FiSearch } from 'react-icons/fi';
import { FaUserAlt, FaRegCreditCard, FaCog, FaPowerOff } from "react-icons/fa";
import { RiNotification2Line } from "react-icons/ri";
import { useRouter } from 'next/navigation';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState()


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const router = useRouter()
  

  useEffect(() =>{

    const auth= JSON.parse(sessionStorage.getItem('user_email'));
    setProfile(auth)
    if(!auth){
        router.push("/user/sign_in")
    }

    
  }, [])

  async function fetchProfile(){
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/my_profile`,{
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer'+ sessionStorage.getItem('access_token') //for using middleware authontigation
        }
      })
        if (res.ok) {
          const data = await res.json()
          const auth= JSON.parse(sessionStorage.getItem('user_email'));
         
          // console.warn()
          
        }
        else{
          router.push("/")
        }
  }


  const logout=()=>{
    sessionStorage.clear();
    router.push("/");
    }

    return (
         <div className="bg-blue-400 mt-0 relative flex md:flex md:flex-grow flex-row-reverse py-3 px-4 mt-0">

            <div className="relative inline-block px-3">
                <button
                    type="button"
                    className="flex items-center space-x-1 px-3 py-1 "
                    onClick={toggleDropdown} >

                    <Image
                        src={user} className='rounded-full'
                        alt="user" width="50" height="50">
                    </Image>

                    {isOpen ? (
                        <FiChevronRight className="h-4 w-4" />
                    ) : (
                        <FiChevronDown className="h-4 w-4" />
                    )}
                </button>

                {/* Admin dropdown start */}
                {isOpen && (
                    <div  className="inline-block absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5 z-20">
                        <div className="flex p-3 m-1  text-gray-700 space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                            <FaUserAlt className="translate-y-1" />
                            <a href="#" className="block text-gray-700 text-base">
                                Leo Doe
                            </a>
                        </div>
                        <div className="border-b-4 border-gray-500"></div>
                        <ul className="py-1 mx-1">
                            <li>
                                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <FaRegCreditCard className="translate-y-1" />
                                    <a href="#" className="block text-sm text-gray-700 ">
                                    {profile}
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <RiNotification2Line className="translate-y-1" />
                                    <a href="#" className="block text-sm text-gray-700 ">
                                        Notification 
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <FaCog className="translate-y-1" />
                                    <a href="#" className="block text-sm text-gray-700 ">
                                        Settings
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    
                                <FaPowerOff /><button onClick={logout}> Log Out</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Admin dropdown end */}

            {/* Search start */}
            <div className="w-auto ">
                <span className="absolute flex inset-y-0 items-center px-3 pb-3 text-gray-400">
                    <FiSearch />
                </span>
                <input className="flex justify-between border border-gray-300 rounded-md transition focus:ring-2 focus:ring-gray-400 outline-none 
                placeholder-gray-400 px-10 py-3" placeholder="Search....." type="text" />
            </div>
            { /*Search end */}
        </div>
    );
    {/* Header end */ }
};

export default Header;
