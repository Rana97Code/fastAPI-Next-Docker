"use client";

import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import { createStyle, makeStyles } from '@mui/material/styles';
import DashLayout from "../dashboard/Dashlayout";
import Link from "next/link";

const MailContent = ()=> {

    const columns = ["ID", "Service Products","Customers","Quantity","Purchase Date","Service Time","Expire Date","Notify Date"];
    const [ServiceProd, setContent]= useState([]);
    const data= ServiceProd.map((product) =>[product.id, product.product_name, product.customer_name, product.p_qty + product.unit_name ,product.purchase_date, product.service_time + 'Year', product.expiry_date, product.renew_date]);

    const options = {
        filterType: 'checkbox',
      };

    useEffect(()=>{
    getMail();
    },[])  

const getMail = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/Provided_services`,{
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
                  <Link href="http://localhost:3000/components/provided_service/add" >Add New Service</Link>
            </button>

          </div>
          </div>
          <div width="100%"  minHeight="785px"  >
                <MUIDataTable title={"Provided Service List"}  data={data} columns={columns} options={options}/> 
          </div>
        </div>
      </DashLayout>
    )

}
  
export default MailContent;