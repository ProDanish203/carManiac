"use client"
import { carProps } from '@/types'
import React, { useState } from 'react'
import Image from "next/image";
import { Button, CarDetails } from '.';
import { getCarImageUrl } from '@/utils';

interface carCardProps{
  car:carProps;
}

const CarCard = ({car}: carCardProps) => {
  const {year, make, model, drive, transmission, city_mpg } = car;
  
  const [modal, setModal] = useState(false);
  return (
    <>
    <div className='px-4 py-3 rounded-md shadow-sm bg-white max-w-[350px] min-h-[100px] w-full'>
      <h2 className='text-2xl font-bold'>Toyota Corolla</h2>
      <p className='relative flex otems-center gap-1'>
          <span className='text-3xl'>500</span>
          <span className='text-xl font-semibold'>$</span>
      </p>

      <div className='w-full h-[100px] relative object-contain my-5'>
        <Image src={getCarImageUrl(car)} width={200} height={200} alt={car.make + " " + car.model}
        className='object-contain w-full h-full'
        />
      </div>

      <div className='flex items-center justify-between'>

        <div className='flex-col flex items-center'>
          <Image src="/steering-wheel.svg" width={20} height={20} alt='transmisssion'/>
          <p className='text-sm text-text font-semibold'>
            {transmission === 'a' ? "Automatic" : "Manual"}
          </p>
        </div>

        <div className='flex-col flex items-center'>
          <Image src="/tire.svg" width={20} height={20} alt='transmisssion'/>
          <p className='text-sm text-text font-semibold'>
            {/* {drive.toUpperCase()} */}
            FWD</p>
        </div>

        <div className='flex-col flex items-center'>
          <Image src="/gas.svg" width={20} height={20} alt='transmisssion'/>
          <p className='text-sm text-text font-semibold'>{city_mpg} MPG</p>
        </div>

      </div>

      <Button title='View More' type='button' handleClick={() => setModal(true)}
      customStyle='bg-primary block w-full text-bg'
      />

    </div>

    <CarDetails car={car} modal={modal} closeModal={() => setModal(false)}/>
    </>
  )
}

export default CarCard