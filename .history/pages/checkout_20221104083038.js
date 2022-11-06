import { useSession } from 'next-auth/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)
  return (
    <div >
        <Header/>
        <div className="max-w-screen-2xl mx-auto">
            <h1>{items.length === 0 ? "Shopping Cart is empty"  : "Your  pemStore Cart" }   </h1>
            <p>{session?.user.name}</p>
        </div>
        <div>
            <h1>Your Subtotal</h1>
            <span>0</span>
        </div>
    </div>
  )
}

export default Checkout