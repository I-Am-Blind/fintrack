import React from 'react'
import phone from "../images/phone.png"
import Ellips1 from "../images/Ellipse-36.png"
import Ellips2 from "../images/Ellipse-38.png"
import Ellips3 from "../images/Ellipse-40.png"
import { FaShieldVirus,FaRegNewspaper,FaPhone,FaLongArrowAltRight } from "react-icons/fa";


const Landing = () => {
  return (
    <div className="font-primary h-screen w-screen bg-bgimage bg-no-repeat bg-cover bg-center bg-fixed flex flex-row justify-between px-40 text-white">
        
            <div className='pt-40' >
                <h1 className='text-6xl font-medium'>Fin   Track</h1>
                <h4 className=' text-gray-600 text-3xl pt-2'>Track.Achieve.Succeed</h4>
                <img className="-mt-8 scale-65" src={phone} />
            </div>
            <div className='pt-40'>
                <div className='flex pb-5 max-w-screen-sm'>
                    <FaShieldVirus size={"25px"}/>
                    <h4 className='pl-3 text-xl flex-wrap'>A description of how user data is collected, used and protected.</h4>
                </div>
                <div className='flex pb-5 max-w-screen-sm'>
                    <FaRegNewspaper size={"25px"}/>
                    <h4 className='pl-3 text-xl'>Information about the app's security measures</h4>
                </div>
                <div className='flex pb-5 max-w-screen-sm'>
                    <FaPhone size={"25px"}/>
                    <h4 className='pl-3 text-xl'>A way for users to get in touch with the company</h4>
                </div>
                <button className='start-btn flex'>Get started </button>
            </div>
        
    </div>
 
    
  )
}

export default Landing