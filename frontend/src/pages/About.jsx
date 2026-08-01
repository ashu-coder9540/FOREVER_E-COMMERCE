import React from 'react'
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';
import { assets } from '../assets/frontend_assets/assets';
const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg'>Forever Ecommerce brings timeless style to your doorstep with curated fashion and home essentials designed for everyday confidence.</p>
          <p className='text-lg'>Our mission is to deliver fast, friendly service and a seamless shopping experience so you can shop with ease and trust every time.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-lg'>Our mission is to provide every customer with a joyful, convenient, and trustworthy online shopping experience by delivering quality products, fast service, and personal support.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Our Quality Assurance promise means every product is carefully selected, inspected, and backed by dependable support so you can shop with confidence every time.</p>
        </div>  
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Enjoy easy shopping with fast checkout, flexible delivery options, and a simple browsing experience designed to save you time.</p>
        </div>  
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We’re here to help with fast, friendly support, easy returns, and personalized care so every order feels effortless and reliable.</p>
        </div>  
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default About
