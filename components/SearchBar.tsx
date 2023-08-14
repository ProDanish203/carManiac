"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { manufacturers } from "../utils/data";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SearcBarProps } from "@/types";

const SearchBar = ({setMake, setModel}:SearcBarProps) => {

  const [searchMake, setSearchMake] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [query, setQuery] = useState("")
  const router = useRouter();

  // Filtering the make
  const filterMake = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  ));

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(!searchMake && !searchModel) return toast.error("Please fill in the fields");

    setModel(searchModel);
    setMake(searchMake);
  }

  // const updateSearchParams = (make: string, model:string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if(make){
  //     searchParams.set('make', make)
  //   }else{
  //     searchParams.delete('make');
  //   }

  //   if(model){
  //     searchParams.set('model', model)
  //   }else{
  //     searchParams.delete('model');
  //   }

  //   const newPath = `${window.location.pathname}?${searchParams.toString()}` 
    
  //   router.push(newPath);
  // }

  return (
    <>
    <form 
    onSubmit={handleSearch}
    className='flex items-center sm:p-0 px-3 gap-2 justify-between max-w-[700px] w-full'>
        <div className='bg-white sm:flex-row flex-col px-2 py-2 rounded-md shadow-lg text-text flex sm:gap-2 gap-4 w-full z-10'>
          <Combobox value={searchMake} onChange={setSearchMake}>
            <div className="relative w-full flex items-center gap-2">
              <Combobox.Button className="">
                <Image src="/honda-logo.png" width={30} height={100} alt="honda"/>
              </Combobox.Button>

              <Combobox.Input
              className="bg-transparent py-1 outline-none w-full"
              placeholder="Honda"
              displayValue={(make: string) => make}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              />
              <button type="submit">
                <i className="sm:hidden block fas fa-magnifying-glass text-xl"></i>
              </button>

              <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
              >

                <Combobox.Options 
                className="absolute bg-white top-11 left-0 px-2 py-3 rounded-md w-full"
                >
                  {
                  filterMake.map((item) => (
                    <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `px-2 py-1 ${active ? "bg-primary text-white": ""}`}
                    >
                      {item}
                    </Combobox.Option>
                  ))
                  }
                </Combobox.Options>

              </Transition>
              
            </div>
          </Combobox>
          <div className="flex items-center gap-3 w-full">
            <i className="fas fa-car text-black"></i>
            <input type="text" placeholder='Model' 
            className='bg-transparent py-1 outline-none w-full'
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            />
            <button type="submit">
              <i className="sm:hidden block fas fa-magnifying-glass text-xl"></i>
            </button>
          </div>
        </div>
    </form>
    </>
  )
}

export default SearchBar