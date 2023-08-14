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