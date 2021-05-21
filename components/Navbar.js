import requests from "../utils/requests";
import { useRouter } from "next/router";


function Navbar() {

    const router = useRouter();

    return (
        <nav>
            <div className="flex text-center sm:flex-wrap flex-col md:flex-row flex-nowrap px-10  sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20" >
                {Object.entries(requests).map(([ key, { title, url }]) => (
                    <h2 key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="transition duration-100 transform hover:scale-125 
                                    cursor-pointer hover:text-white active:text-red-500">
                                        {title}
                    </h2>
                ) )}
            </div>                        
        </nav>
    )
}

export default Navbar
