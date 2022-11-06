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
        <div className="h-40 p-4 shadow-2xl flex">
        <div className="flex items-center  text-lg md:text-xl lg:text-2xl font-serif text-blue-900 space-x-4 ">
            <h1>{items.length === 0 ? "Shopping Cart is empty"  : "This is your pemStore Shopping Cart" }   </h1>
            <p>{session?.user.name}</p>
        </div>
        <div>
            <h1>Your Subtotal</h1>
            <span className="font-extrabold">NGN 0</span>
        </div>
        <button className="  bg-red-500 p-1 mt-3  cursor-pointer">Proceed to CheckOut</button>
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