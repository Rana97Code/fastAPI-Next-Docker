"use client";
import React, { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Link from 'next/link'
import DashLayout from "../dashboard/Dashlayout";


const Product = ()=> {

    const columns = ["ID", "Product Name","Product Qty","Unit", "Product Details"];
    const [Products, setUnit]= useState([]);
    // console.warn(Units);
    const data= Products.map((product) =>[product.id, product.product_name, product.product_qty, product.unit_name, product.product_details]);

    const options = {
        filterType: 'checkbox',
      };

    useEffect(()=>{
    getProduct();
    },[])  

const getProduct = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization':`bearer ${JSON.parse(localStorage.getItem('access_token'))}`
      }
    });
  
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
                  <Link href="http://localhost:3000/components/products/add" prefetch={true}>Add Product</Link>
            </button>

          </div>
          </div>
          <div  >
                <MUIDataTable title={"Product List"}  data={data} columns={columns} options={options}/> 
          </div>
        </div>
      </DashLayout>
    )

}
  
export default Product;