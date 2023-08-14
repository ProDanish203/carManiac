// import axios from "axios";

import { FilterProps, carProps } from "@/types";

// const options = {
//     method: 'GET',
//     url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//     params: {
//         model: 'corolla',
//         make: 'toyota',
//         year: '2020'
//     },
//     headers: {
//         'X-RapidAPI-Key': '610dd1061dmshb3526e88258c147p1e2682jsn5aea63236f4e',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }
// };

// try {
// 	const {data} = axios.request(options);
// 	console.log(data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchCars = async (filters: FilterProps) => {
    const {make, model, year, fuel, limit} = filters;

    const headers = {
        'X-RapidAPI-Key': '610dd1061dmshb3526e88258c147p1e2682jsn5aea63236f4e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&limit=${limit}&fuel_type${fuel}`, {
        headers: headers
    });
    const res = await response.json(); 
    return res;
}

export const getCarImageUrl = (car: carProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, model, year } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}