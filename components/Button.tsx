"use client"
import { ButtonProps } from '@/types'

const Button = ({type, title, customStyle, handleClick}: ButtonProps) => {
  return (
    <button
    type={type}
    className={`px-5 rounded-md py-2 shadow-sm my-2 ${customStyle}`}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default Button