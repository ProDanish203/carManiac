"use client";
import Image from 'next/image';
import { Button } from '.'

const Hero = () => {

    const exploreScroll = () => {

    }

  return (
    <>
    <div className='mt-10 xl:px-20 md:px-10 px-2 row overflow-hidden min-h-[70vh]'>

        <div className='col1'>
            <h1 className='md:text-6xl text-4xl font-bold text-text'>Discover Exceptional Cars <br /> Where Luxury Meets Performance.</h1>
            <p className='text-primary md:text-lg text-md mt-4 md:w-[80%]'>Unveiling Automotive Excellence: A Symphony of Power, Elegance, and Innovation. Discover the Pinnacle of Driving Performance with Our Extraordinary Car Collection.</p>
            <a href="#explore">
              <Button type="button" title='Explore Now' customStyle='bg-primary text-bg text-2xl px-7 mt-5' handleClick={exploreScroll}/>
            </a>
        </div>

        <div className='col2'>
            <Image src="/hero.png" alt='hero-image' width={1000} height={1000} className='w-10'/>
        </div>

    </div>
    </>
  )
}

export default Hero