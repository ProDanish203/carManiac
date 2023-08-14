import { MouseEventHandler } from "react";

export interface ButtonProps{
    type: "button" | "submit"
    title: string,
    customStyle?: string,
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export interface carProps{
    city_mpg: number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface carDetailsProps{
    car:carProps,
    modal:boolean,
    closeModal:() => void
}

export interface FilterProps{
    make: string;
    model: string;
    year: number;
    limit: number;
    fuel: string;
}

export interface OptionProps{  
    title:string,
    value:string
}
export interface CustomFilterProps{
    title:string;
    options:OptionProps[];
    setFilter:(text:string) => void;
}

export interface SearcBarProps{
    setMake:(text: string) => void
    setModel:(text:string) => void
}

export interface ShowMoreProps{
    pageNumber:number;
    isNext:boolean;
    setLimit:(no: number) => void
}