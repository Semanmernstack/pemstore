import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
    return (
      <div className="relative">
         
          <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={3000}
          >
              <div>
              
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy"  src="https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913__340.jpg" alt="" />
              </div>
              <div>
                  <img  loading="lazy" src="https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573__340.jpg" alt="" />
              </div>
  
          </Carousel>
              
                  <h1 className="absolute top-60 right-10 left-10 bottom-60 text-center text-3xl text-white">Shop with us at pemStore</h1>
              
      </div>
    )
  }
  
  export default Banner			