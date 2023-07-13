"use client";

import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DashLayout from "../dashboard/Dashlayout";
import Link from "next/link";

const Customer = ()=> {
  const [Customers, setCustomer]= useState([]);

  const columns = ["ID", "Customers Name", "Customers Email", "Customers Phone", "Address Details"];

  // console.warn(Units);
  const data= Customers.map((customer) =>[customer.id, customer.customer_name, customer.customer_email, customer.customer_phone, customer.customer_address]);

  const options = {
      filterType: 'checkbox',
    };




useEffect(()=>{
  getCustomer();
},[])  


const getCustomer = async () => {

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/customers`);
  
    if (!data.ok){
      throw new Error('Could not data exist');
    }
    //return data.json();
    let res = await data.json();
    // console.warn(res);
    setCustomer(res);
  };
  
    return (
        <DashLayout>
          <div className="w-100% h-screen">
          <div className="grid m-3">
            <div className=" place-self-end ">
            <button className="bg-green-400 font-medium  px-7 py-2 rounded-md ml-220
                text-white transition hover:bg-green-500" type="submit" >
                    <Link href="http://localhost:3000/components/customers/add" prefetch={true}>Add Customer</Link>
            </button>
            </div>
          </div>
          <div width="100%" >
                <MUIDataTable title={"Customer List"}  data={data} columns={columns} options={options}/> 
          </div>
          </div>
        
        </DashLayout>

    )

}
  
export default Customer;




