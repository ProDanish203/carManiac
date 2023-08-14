"use client"
import { Hero, Loader, ShowMore } from "../components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CarCard, CustomFilter, SearchBar } from '../components'
import { fetchCars } from '@/utils'
import { carProps } from '@/types';
import { fuels, years } from "@/utils/data";
import { useEffect, useState } from "react";

export default function Home() {

  // const allCars = await fetchCars({
  //   //@ts-ignore
  //   make: searchParams.make || '',
  //   model: searchParams.model || '',
  //   year: searchParams.year || 2020,
  //   limit: searchParams.limit || 10,
  //   fuel: searchParams.fuel || ''
  // });
  const [allCars, setAllCars] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("")
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10)

  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    try{
      setLoading(true);
      const res = await fetchCars({make, model, year, limit, fuel});

      setAllCars(res);
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
    console.log(allCars);
  }, [make, model, fuel, year, limit]);

  return (
    <main className="px-2">
      <ToastContainer/>
      <Hero/>

    <div className="xl:px-20 lg:px-10 md:px-3 my-10">
      <section className='min-h-[100vh]'>
        <div className='text-text ' id="explore">
            <h3 className='md:text-4xl text-2xl font-semibold'>Car Catalogue</h3>
            <p className='text-primary'>Explore the cars you might want to buy</p>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-5 my-7'>
            <SearchBar setMake={setMake} setModel={setModel}/>
            <div className='flex items-center justify-center gap-2 md:px-0 px-4'>
              {/* @ts-ignore */}
                <CustomFilter title="year" options={years} setFilter={setYear}/>
                <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            </div>
        </div>


        <div className='md:mt-20 mt-10'>
          {allCars.length < 0 ? (
            <div className='sm:text-4xl text-3xl mt-10 text-center text-text font-bold'>
              No Results Found
            </div>
          ) : (
          <>
            <div className='flex flex-wrap items-center justify-start gap-3'>
              {loading ? (
                <div className="max-w-[1000px] w-full mx-auto flex items-center justify-center gap-2 md:mt-10 mt-5">
                <Loader/>
                </div>
              ) : (
                <>
                {
                allCars.map((car:carProps, index:number) => (
                  <CarCard car={car} key={index}/>
                  ))
                }
                <ShowMore 
                pageNumber={limit  / 10} 
                isNext={limit > allCars.length}
                setLimit={setLimit}
                />
                </>
              )}
            </div>
          </>
          )}
        </div>
        

        </section>
    </div>

    </main>
  )
}
