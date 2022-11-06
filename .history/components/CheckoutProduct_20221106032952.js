import Image from 'next/image'
import React from 'react'

function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div className="flex flex-col items-center text-center shadow-xl p-1">
        <div className="  mt-3 mb-3">
          <p>{category}</p>
          
        </div>
        <Image src={image}

            height={200}
            width={200}
            objectFit="contain"
        />
        <p>{description}</p>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default CheckoutProduct