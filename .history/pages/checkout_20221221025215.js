import {  loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'


const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal) 

    const createCheckout = async () => {
        const stripe = await stripePromise;
        

        const checkoutSession = await axios.post('/api/checkout-sessions', 
        {
            items: items,
            email: session?.user?.email, 
        });
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) alert(alert.result.message)
    }
  return (
    <div  className=" mx-auto max-w-6xl "  >
        <Header />
        <div className="h-40 p-4 shadow-2xl flex flex-col">
        <div className="flex items-center  text-lg md:text-xl lg:text-2xl font-serif text-blue-900 space-x-4 ">
            <h1>{items.length === 0 ? "Shopping Cart is empty"  : "This is your pemStore Shopping Cart" }   </h1>
            <p>{session?.user.name}</p>
        </div>
        <div>
            <h1>Your Subtotal</h1>
            <h1 className="font-bold">Items: <span>{items.length}</span></h1>
            <span className="font-extrabold">NGN {total}</span>
        </div>
        <button role="link"  method="post" onClick={createCheckout} className="  bg-red-500 hover:animate-bounce p-1 mt-3  cursor-pointer">Proceed to CheckOut</button>
        </div>

        {items.map((item, i) => (
            <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
            />
        ))}

        

    </div>
  )
}

export default Checkout