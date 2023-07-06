"use client";
import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';
import Container from './Container';
import DashLayout from './Dashlayout'

export default function Home() {
  return (

    // <div className="flex w-screen h-screen" >
    //   <Sidebar />
    //   <main className="w-screen bg-gray-300">
    //     <div>
    //     <Header />
    //     <Container />
        
    //     </div>
        
    //   </main>
    // </div>

    <DashLayout>
        <Container />
    </DashLayout>

  )
}
