"use client";

import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Link from 'next/link'
import DashLayout from "../dashboard/Dashlayout";

const MailContent = ()=> {

    const columns = ["ID", "Mail Type","Mail Content"];
    const [MailContent, setContent]= useState([]);
    const data= MailContent.map((mail) =>[mail.id, mail.mail_type, mail.mail_content]);

    const options = {
        filterType: 'checkbox',
      };

    useEffect(()=>{
    getMail();
    },[])  

const getMail = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/allmail_content`,{
      headers:{
        'Content-Type': 'application/json',
        // 'Authorization':`bearer ${JSON.parse(localStorage.getItem('access_token'))}`
      }
    });
  
    if (!data.ok){
      // throw new Error('Could not data exist');
      alert("There is no data")
    }
    let res = await data.json();
    setContent(res);
  };
  
    return (
      <DashLayout>
        <div className="w-100% h-screen">
        <div className="grid m-3">
            <div className=" place-self-end ">
             <button className="bg-green-400 font-medium  px-7 py-2 rounded-md ml-220
                text-white transition hover:bg-green-500" type="submit" >
                  <Link href="http://localhost:3000/components/mail_content/add" >Add New Content</Link>
            </button>
          </div>
          </div>
          <div >
                <MUIDataTable title={"Mail Content List"}  data={data} columns={columns} options={options}/> 
          </div>
        </div>
      </DashLayout>
    )

}
  
export default MailContent;