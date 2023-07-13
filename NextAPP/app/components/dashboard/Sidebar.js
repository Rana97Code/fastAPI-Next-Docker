"use client";
import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { HiOutlineArrowUpTray, HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdSyncAlt } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { TbLeaf, TbClearAll } from "react-icons/tb";
import { BiLayer } from "react-icons/bi";
import Link from 'next/link'


const Sidebar = () => {

    return (
        <div className={`h-screen bg-blue-300 p-3`}       
        >
            {/* Main menu start */}
            <aside className='overflow-hidden'>
                <div className='flex flex-col justify-between'>
                    <div className='h-12 border-b dark:border-gray-700 flex items-center'>
                        <p className="text-xl font-semibold mx-2">logo</p>
                        <p>|</p>
                        <p className="text-lg mx-2 text-black-600">name</p>
                    </div>
                    <div className='mt-4'>
                        <ul className='px-1 -ml-px space-y-4 font-medium tracking-wide'>
                            <li className='w-48 font-medium group-hover:w-full cursor-pointer '>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 rounded  ">
                                    <RxDashboard className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/dashboard" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                        Dashboard
                                     </p>
                                </Link>
                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <TbClearAll className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/customers" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                     Customers
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <HiOutlineArrowUpTray className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/units" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                    Units
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <HiOutlineArrowDownTray className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/products" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                         Products
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <MdSyncAlt className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/mail_content" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                    Email Content
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <FiLock className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/servicetime" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                    Service Time
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <TbLeaf className="text-black translate-y-1" />
                                    <Link href="http://localhost:3000/components/provided_service" prefetch={true}>
                                    <p className="block  text-black-600 ">
                                    Provided Services
                                    </p>
                                    </Link>

                                </div>
                            </li>

                            <li className='w-48'>
                                <div className="flex m-2 px-3 py-3 gap-4 text-gray-700  space-x-4 0 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded  ">
                                    <BiLayer className="text-black translate-y-1" />
                                    <p className="block  text-black-600 ">
                                        Validate
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </aside>
            {/* Main menu end */}

        </div>
    );
};

export default Sidebar;
