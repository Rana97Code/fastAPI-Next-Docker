"use client";
import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Link from 'next/link'

import DashLayout from "../dashboard/Dashlayout";

const Unit = ()=> {

    const columns = ["ID", "Unit Name", "Unit Details"];
    const [Units, setUnit]= useState([]);
    // console.warn(Units);
    const data= Units.map((unit) =>[unit.id, unit.unit_name, unit.unit_details]);

    const options = {
        filterType: 'checkbox',
      };

    useEffect(()=>{
    getUnit();
    },[])  

const getUnit = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/units`);
  
    if (!data.ok){
      throw new Error('Could not data exist');
    }
    let res = await data.json();
    setUnit(res);
  };
  
    return (
      <DashLayout>
        <div className="w-100% h-screen">
        <div className="grid m-3">
            <div className=" place-self-end ">     
            <button className="bg-green-400 font-medium  px-7 py-2 rounded-md ml-220
                text-white transition hover:bg-green-500" type="submit" >
                  <Link href="http://localhost:3000/components/units/add">Add Unit</Link>
            </button>

          </div>
          </div>
          <div >
                <MUIDataTable title={"Unit List"}  data={data} columns={columns} options={options}/> 
          </div>
        </div>

      </DashLayout>
    )

}
  
export default Unit;