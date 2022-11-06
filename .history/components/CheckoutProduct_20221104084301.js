import Image from 'next/image'
import React from 'react'

function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div>
        <Image src={image}

            height={200}
            width={200}
            objectFit="contain"
        />
    </div>
  )
}

export default CheckoutProduct