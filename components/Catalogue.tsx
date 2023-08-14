import React from 'react'
import { CarCard, CustomFilter, SearchBar } from '.'
import { fetchCars } from '@/utils'
import { carProps } from '@/types';

const Catalogue = async () => {

  const allCars = await fetchCars();
  // console.log(allCars);
  // Checking if data exists
  // const allCars: string[] = ["Honda", "Mitsubish", "jahs"];
  const noData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <section className='min-h-[100vh]'>
    <div className='text-text ' id="explore">
        <h3 className='md:text-4xl text-2xl font-semibold'>Car Catalogue</h3>
        <p className='text-primary'>Explore the cars you might want to buy</p>
    </div>

    <div className='flex flex-wrap items-center justify-between gap-5 my-7'>
        <SearchBar/>
        <div className='flex items-center justify-center gap-2'>
            <CustomFilter/>
            <CustomFilter/>
        </div>
    </div>


    <div className='md:mt-20 mt-10'>
      {/* {noData ? (
        <div className='text-3xl text-center text-text font-bold'>
          No Results
        </div>
      ) : ( */}
        <div className='flex flex-wrap items-center justify-around gap-3'>
          {
            allCars.map((car:carProps) => (
              //@ts-ignore
              <CarCard car={car}/>
            ))
          }
        </div>
      {/* )} */}
    </div>
    

    </section>
  )
}

export default Catalogue