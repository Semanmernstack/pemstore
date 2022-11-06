import Image from 'next/image'
import React from 'react'

function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div className="flex flex-col items-center text-center shadow-xl p-1">
        <div className=" text-lg text-gray-900 underline md:text-2xl  mt-3 mb-3">
          <p>{category}</p>
          
        </div>
        <Image src={image}

            height={200}
            width={200}
            objectFit="contain"
        />
        
        <p className="mb-2 mt-3 font-extrabold">{title}</p>
        <p>{description}</p>
        <p className="font-bold">{price}</p>
        <div className="flex flex-col items-center ">
          <button className="border-gray-900">Add to Basket</button>
          <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct