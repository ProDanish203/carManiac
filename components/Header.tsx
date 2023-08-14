"use client"
import React from 'react'
import { Button } from '.'

const Header = () => {
  return (
    <header className='max-w-[1500px] mx-auto w-full px-5 py-3 flex gap-2 items-center justify-between'>
        <div>
            <h2 className='text-2xl font-bold cursor-pointer'>Car Maniac</h2>
        </div>
        <nav>
            <Button title='Sign In' type='button' handleClick={() => {}} customStyle='bg-accent text-bg md:text-lg text-md'/>
        </nav>
    </header>
  )
}

export default Header