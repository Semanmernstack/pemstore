import { useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'

function Checkout() {
    const { data: session } = useSession()
  return (
    <div >
        <Header/>
        <div className="max-w-screen-2xl mx-auto">
            <h1>This is Cart Order</h1>
            <p>{session.user.name}</p>
        </div>
        <div>
            <h1>Your Subtotal</h1>
            <span>0</span>
        </div>
    </div>
  )
}

export default Checkout