import { Catalogue, Hero } from "../components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="px-2">
      <ToastContainer/>
      <Hero/>

      <div className="xl:px-20 lg:px-10 md:px-3 my-10">
        <Catalogue/>
      </div>

    </main>
  )
}
