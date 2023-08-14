"use client"
import { ShowMoreProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {

  const router = useRouter();

  const handleShowMore = () => {
    // const searchParams = new URLSearchParams(window.location.search);
    const newLimit = (pageNumber + 1) * 10
    setLimit(newLimit);

    // searchParams.set('limit', `${newLimit}`);
    // const newPath = `${window.location.pathname}?${searchParams.toString()}` 
    // router.push(newPath);
  }

  return (
    <>
    {!isNext && (
      <div className="mt-10 sm:max-w-[500px] max-w-[350px] w-full mx-auto flex items-center justify-center">
        <button className="bg-primary text-bg px-5 py-2 rounded-lg shadow-md block w-full"
        onClick={handleShowMore}
        >Show More</button>
      </div>
    )}
    </>
  )
}

export default ShowMore;