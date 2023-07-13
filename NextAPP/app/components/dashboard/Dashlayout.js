'use client'
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashLayout({ children }) {
  return (
    <>
    <div className="flex h-screen " >
      <Sidebar />
      <div className="overflow-hidden w-screen bg-gray-300">
        <Header />
        <main>{ children }</main>
        
      </div>
    </div>
    </>
  )
}
