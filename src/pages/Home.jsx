import { useState } from "react";
import LocationModal from "../components/locationModal";


const Home = () => {
    const [click, setClick] = useState(false);
    console.log(click)

    return (
        <div>

            <div className="text-center">
                <h1 className="text-6xl text-blue-300 font-extrabold">NextLevel <span className="text-blue-400">Weather</span> </h1>
                <p className="py-4 text-gray-300">Check your weather today </p>
                <button type="button" 
                    onClick={() => setClick('Clicked')}
                    className="text-lg cursor-pointer font-medium hover:scale-105 transition-all delay-300 bg-blue-500 px-5 py-2 rounded-2xl text-gray-100">Check Weather</button>
            </div>
            {
                click && <LocationModal onClose ={()=> setClick(false)} />
            }
        </div>
    )
}

export default Home;