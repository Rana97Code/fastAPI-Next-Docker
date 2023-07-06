"use client";
import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashLayout({ children }) {
  return (

    <div className="flex h-screen " >
      <Sidebar />
      <div className="w-screen bg-gray-300">
        <div>
        <Header />
        <main>{ children }</main>
        </div>
        
      </div>
    </div>

  )
}
