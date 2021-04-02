import React from 'react';
import SlideImg,{slide} from './SlideImg';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ,Autoplay   ]);

export default function Images() {
  

  let image_slider = slide.map((image,index)=>{

   return (
    <SwiperSlide className='slide-img' key={index}>
      <img src={image.img}  />
     </SwiperSlide>
   )
 
  })
  return (
    <div className='slide-container'>
     
      <Swiper

      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay 
      onSlideChange={() => console.log('slide change')}
    
      >
          {image_slider}
    
      </Swiper>
  </div>
  );
      
}


