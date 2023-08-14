"use client"
import { carDetailsProps } from '@/types';
import { getCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react'

const CarDetails = ({car, modal, closeModal}: carDetailsProps) => {
  return (
    <>
    <Transition
    appear
    as={Fragment}
    show={modal}
    >
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>

            <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel 
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white max-w-xl  w-full rounded-md py-5 px-4 shadow-lg z-20"
          >
            <button onClick={closeModal} className='bg-primary w-7 h-7 flex items-center justify-center rounded-full p-3 absolute right-2 top-2'>
                <i className='fas fa-times text-xl text-bg'></i>
            </button>
            <div className='bg-pattern h-40 bg-center bg-cover rounded-lg'>
                <div className='flex items-center justify-center pt-5 w-full h-full'>
                    <Image src={getCarImageUrl(car)} width={300} height={300} alt={car.make + " " + car.model}/>
                </div>
            </div>

            <div className='w-full flex items-center justify-between relative gap-2 mt-5 overflow-hidden'>
                <div className='relative bg-gray-200 rounded-md w-[150px] h-[100px]'>
                    <Image src={getCarImageUrl(car, '29')} width={150} height={150} alt={car.make + " " + car.model} className='object-contain'/>
                </div>
                <div className='relative bg-gray-200 flex rounded-md w-[150px] h-[100px]'>
                    <Image src={getCarImageUrl(car, '33')} width={150} height={150} alt={car.make + " " + car.model}/>
                </div>
                <div className='relative bg-gray-200 rounded-md w-[150px] h-[100px]'>
                    <Image src={getCarImageUrl(car, '13')} width={150} height={150} alt={car.make + " " + car.model}/>
                </div>
            </div>

            <div className='my-3 mt-6'>
                <Dialog.Title className="text-2xl font-semibold">
                    Toyota Corolla
                    {/* {car.make.toUpperCase()} {car.model.toUpperCase()} */}
                </Dialog.Title>
                <Dialog.Description>
                {
                Object.entries(car).map(([key, value]) => (
                <p className='flex justify-between gap-2 items-center mt-2 text-gray-600 capitalize'>
                    <span>{key}</span>
                    <span>{value}</span>
                </p>
                ))
                }

                </Dialog.Description>
            </div>

          </Dialog.Panel>
        </Transition.Child>
        
        </Dialog>
    </Transition>    
    </>
  )
}

export default CarDetails;