import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
   

    return (
      <div className="flex items-center h-20 md:p-3 p-1 lg:p-6 bg-slate-500 ">
          <div className="mr-3 text-3xl md:text-5xl lg:text-6xl">
              <h1>pemStore</h1>
          </div>
          <div className="flex items-center flex-grow bg-slate-300 p-1 cursor-pointer rounded-full ">
              <input className="outline-none  rounded-full flex-grow   " type="text" placeholder="Search for product..." />
              <svg className="h-7 w-7"   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
          </div>
          <div className="flex mx-3 lg:text-2xl">
          <div  onClick={signIn} className="flex items-center text-sm md:text-lg mx-3">
              <p className="mr-2">hello seyi</p>
              <p>Sign In</p>
  
          </div>
          <div className="relative flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <p className="absolute left-6  ">0</p>
          </div>
          </div>
          
      </div>
    )
  }
  
  export default Header	
  