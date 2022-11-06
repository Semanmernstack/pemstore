import { useSession } from 'next-auth/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)
  return (
    <div  className=" mx-auto max-w-6xl "  >
        <Header />
        <div className="h-20 p-4">
        <div className="flex items-center ">
            <h1>{items.length === 0 ? "Shopping Cart is empty"  : "Your  pemStore Cart" }   </h1>
            <p>{session?.user.name}</p>
        </div>
        <div>
            <h1>Your Subtotal</h1>
            <span>NGN 0</span>
        </div>
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