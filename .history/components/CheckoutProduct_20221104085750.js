import Image from 'next/image'
import React from 'react'

function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div className="flex flex-col items-center text-center shadow-xl">
        <div>
            <p>{category}</p>
            <p>{title}</p>
        </div>
        <Image src={image}

            height={200}
            width={200}
            objectFit="contain"
        />
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default CheckoutProduct