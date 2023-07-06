"use client";
import React from 'react';
import Dashboardcard from "./Dashboardcard";
import Rightchart from "./Rightchart";
import Leftchart from "./Leftchart"

const Container = () => {
    return (
        <>
            {/* Container start */}
            <div className="px-2 py-3">
                {/* <div>
                    <p className="text-gray-600 text-2xl font-bold p-2">
                        Dashboard
                    </p>
                </div> */}

                <div>
                    <Dashboardcard />
                </div>
            </div>
            <div className='px-2'>
                <div className='bg-white grid grid-cols-2 gap-2 w-1/2 h-full rounded-lg shadow-lg mt-24'>
                    <Rightchart />
                </div>
                {/* <div className='bg-white grid grid-cols-2 gap-2 w-1/2 h-full rounded-lg shadow-lg mt-24'>
                <Leftchart />
                
                </div> */}

            </div>


            {/* Container end */}
        </>
    )
}

export default Container;
