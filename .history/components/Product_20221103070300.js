import Image from 'next/image'
import React from 'react'



function Product( { id, title, price, description, category, image }) {
  
  return (
    <div className="relative flex flex-col shadow-xl m-5 p-10 items-center my-2  ">
      <p className="mb-4 font-serif animate-pulse">{category}</p>
      <Image src={image}
        width="150"
        height="150"
        objectfit="contain"
      />
      <h4 className="text-center font-extrabold text-gray-500 mt-3 ">{title}</h4>
      <p className="truncate w-64">{description}</p>
      <div className="font-bold">
        <p>$ <span>{price}</span></p>
      </div>
     
        <button className="text-center bg-slate-500 h-10 p-2 rounded-full mt-2" >Add to Cart</button>
    </div>

   
    
  )
}
export default Product
