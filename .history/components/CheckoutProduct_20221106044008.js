import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoBasket } from '../slices/basketSlice'
import { removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, description, category, image }) {
  const dispatch = useDispatch()

  const addgoodstoBasket = () => {
    const product = {  
    id,
    title, 
    price,
    description,
    category,
    image,
    };
    dispatch(addtoBasket(product))

  }
  const removegoodsFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

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
        <div className="flex flex-col items-cente mb-2 animate-pulse cursor-pointer ">
          <button onClick={addgoodstoBasket} className="border bg-gray-500 p-1">Add to Basket</button>
          <button onClick={removegoodsFromBasket}   className="border bg-gray-500 p-1 mt-1">Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct