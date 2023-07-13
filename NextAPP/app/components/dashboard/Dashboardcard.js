"use client";

import React from 'react';
import Image from "next/image";
import revenue from "/public/img/cardicon/revenue.png";
import order from "/public/img/cardicon/order.png";
import sale from "/public/img/cardicon/sale.png";
import user from "/public/img/cardicon/user.png";

const Dashboardcard = () => {
  return (

    <div className='grid grid-cols-4 gap-4 w-full h-28 py-4'>

      <div className='flex flex-row justify-between bg-white w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-22 h-10 pb-2'>
          <p className='text-2xl pt-2 font-bold'>$7,846</p>
          <p className='text-gray-600'>Daily Revenue</p>
          <p className='text-gray-600 pt-4 cursor-pointer'>View more..</p>
        </div>
        <p className='flex flex-col items-center rounded-lg'>
          <span className='text-green-700 text-lg p-2'>+11%</span>
          <span className='my-4'>
            <Image
              priority={true}
              src={revenue}
              alt="revenue" width="65" height="65"
              
          />
          </span>
        </p>
      </div>

      <div className='flex flex-row justify-between bg-white w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-22 h-10 pb-2'>
          <p className='text-2xl pt-2 font-bold'>421</p>
          <p className='text-gray-600'>Total Orders</p>
          <p className='text-gray-600 pt-4 cursor-pointer'>View more..</p>
        </div>
        <p className='flex flex-col items-center rounded-lg'>
          <span className='text-green-700 text-lg p-2'>+11%</span>
          <span className='my-4'>
            <Image
              priority={true}
              src={order}
              alt="order" width="65" height="65"
             />
          </span>
        </p>
      </div>

      <div className='flex flex-row justify-between bg-white w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-22 h-10'>
          <p className='text-2xl pt-2 font-bold'>1,200</p>
          <p className='text-gray-600'>Sales</p>
          <p className='text-gray-600 pt-4 cursor-pointer'>View more..</p>
        </div>
        <p className='flex flex-col items-center rounded-lg'>
          <span className='text-green-700 text-lg p-2'>+11%</span>
          <span className='my-4'>
            <Image
              priority={true}
              src={sale}
              alt="sale" width="65" height="65"
            />
           </span>
        </p>
      </div>

      <div className='flex flex-row justify-between bg-white w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-22 h-10 pb-2'>
          <p className='text-2xl pt-2 font-bold'>11,437</p>
          <p className='text-gray-600'>Customers</p>
          <p className='text-gray-600 pt-4 cursor-pointer'>View more..</p>
        </div>
        <p className='flex flex-col items-center rounded-lg'>
          <span className='text-green-700 text-lg p-2'>+11%</span>
          <span className='my-4'>
            <Image
              priority={true}
              src={user}
              alt="user" width="65" height="65" 
            />
           
          </span>
        </p>
      </div>

    </div>
  )
}

export default Dashboardcard;
