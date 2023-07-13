"use client";

import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import { createStyle, makeStyles } from '@mui/material/styles';
import DashLayout from "../dashboard/Dashlayout";
import Link from "next/link";

const Service = ()=> {

    const columns = ["ID", "Year", "Month", "Service Details"];
    const [ServiceTime, setTime]= useState([]);
    // console.warn(Units);
    const data= ServiceTime.map((stime) =>[stime.id, stime.year, stime.month, stime.service_details ]);

    const options = {
        filterType: 'checkbox',
      };

    useEffect(()=>{
    getStime();
    },[])  

const getStime = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/servicetime`);
  
    if (!data.ok){
      throw new Error('Could not data exist');
    }
    let res = await data.json();
    setTime(res);
  };
  
    return (
      <DashLayout>

        <div className="w-100% h-screen">
        <div className="grid m-3">
            <div className=" place-self-end ">
            <button className="bg-green-400 font-medium  px-7 py-2 rounded-md ml-220
                text-white transition hover:bg-green-500" type="submit" >
                  <Link href="http://localhost:3000/components/servicetime/add" prefetch={true}>Add Service Time</Link>
            </button>

          </div>
          </div>
          <div >
                <MUIDataTable title={"Service Time List"}  data={data} columns={columns} options={options}/> 
          </div>
        </div>
      </DashLayout>
    )

}
  
export default Service;