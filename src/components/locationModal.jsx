
import { X } from 'lucide-react';
import { useState } from 'react';
const LocationModal = ({ onClose }) => {

    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = city.trim()
        console.log(value)
    }

    const handleGeoLocations = ()=> {
    navigator.geolocation.getCurrentPosition((positions)=>{
        const{latitude, longitude} = positions.coords
        console.log(latitude, longitude)
       },(error)=>{
        console.log(error)
       },{
            timeout: 2000
       })
    }

    return (

        <div className="fixed inset-0 flex
        justify-center items-center bg-gray-950/60">

            <div className="h-75 w-100 rounded-2xl p-5 bg-gray-100 shadow-2xl" >

                <div className='flex justify-between items-center'>

                    <h2 className="text-xl font-medium">Where are you today?</h2>
                    <button onClick={onClose} className='cursor-pointer'><X /></button>
                </div>
                <div className='pt-8'>
                    <form onSubmit={handleSubmit} className='space-y-5 w-full'>

                        <input type="text" placeholder='Enter City Name'
                            value={city} onChange={(e) => setCity(e.target.value)}
                            className='w-full border p-1 rounded-xl' />

                        <div className=''>
                            <button type="submit"
                                className="w-full text-lg cursor-pointer font-medium hover:scale-105 transition-all delay-300 bg-blue-500 px-5 py-2 rounded-2xl text-gray-100">Get Weather</button>
                        </div>
                    </form>
                    <div className='py-2 flex justify-center '>
                        Or
                    </div>
                    <div className='w-full'>

                        <button type="submit"
                        onClick={handleGeoLocations}
                            className=" w-full text-lg cursor-pointer font-medium hover:scale-105 transition-all delay-300 bg-blue-500 px-5 py-2 rounded-2xl text-gray-100">Use My location</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocationModal

