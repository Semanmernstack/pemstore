import React from 'react'
import Product from './Product'

function ProductShop({ products }) {
    
    return (
      <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[200px]">
          
  
          {products?.map(({ id, title, price, description, category, image }) => (
              <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}    
                />   
          ))}
      </div>   
    )
  }
  
  export default ProductShop
  
  