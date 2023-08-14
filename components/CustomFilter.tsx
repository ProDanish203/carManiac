"use client"
import { CustomFilterProps } from '@/types'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const CustomFilter = ({title, options, setFilter}:CustomFilterProps) => {

  const [selected, setSelected] = useState(options[0]);
  // const router = useRouter();
  // const handleFilter = (e: {title: string, value: string}) => {
  //   updateSearchParams(title, e.value.toLowerCase());
  // }
  
  // const updateSearchParams = (type:string ,value:string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   searchParams.set(type, value);

  //   const newPath = `${window.location.pathname}?${searchParams.toString()}` 
    
  //   router.push(newPath);
  // }

  return (
  <>
  <div className='w-[120px]'>
    <Listbox
    value={selected}
    onChange={(e) => {
      setSelected(e);
      // handleFilter(e)
      setFilter(e.value);
    }}
    >
      <div className='relative z-10 w-full bg-white py-2 px-3 rounded-lg text-text shadow-lg'>
        <Listbox.Button 
        className="flex items-center gap-2 justify-between w-full "
        >
          <span>{selected.title}</span>
          <i className='fas fa-caret-down'></i>
        </Listbox.Button>

        <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >

          <Listbox.Options 
          className="absolute bg-white top-11 left-0 px-2 py-3 rounded-md w-full"
          >
            {
            options.map((item, index) => (
              <Listbox.Option
              key={index}
              value={item}
              className={({ selected }) => `px-2 py-1 ${selected ? "bg-primary text-white": ""}`}
              >
                {item.title}
              </Listbox.Option>
            ))
            }
          </Listbox.Options>

        </Transition>

      </div>
    </Listbox>
  </div>
  </>
  )
}

export default CustomFilter