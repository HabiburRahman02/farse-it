import React from 'react';
import banner from '../assets/images/banner.png'
import bgImg from '../assets/images/home.jpg'
import homeBanner2 from '../assets/images/home-img2.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    const skills = [
        "Frontend",
        "Backend",
        "Database",
        "CMS",
        "Tools"
    ];

    return (
        <div className='max-w-[1390px] mx-auto'>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='py-20 px-8 font-lato'>
                <div className='flex justify-between items-center gap-14'>
                    <div className='md:w-3/5 max-w-'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400'>Farse IT</h1>
                        <h3 className='border-b text-3xl font-semibold mt-8 md:mt-7 pb-2 mb-6 md:mb-6'>Find a Robust Sustainable E-platfrom</h3>
                        <p className='max-w-6xl text-xl leading-7 text-justify'>Elevating Your Digital Experience! 🚀 <br />
                            FarseIT's innovative web solutions. Specializing in web development, we offer expertise and a client-centric approach for businesses. Partner with us for cutting-edge solutions in e-commerce, school management, and private company operations.</p>
                    </div>
                    <div className='md:w-2/5'>
                        <img src={banner} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div >
            <div
                style={{
                    backgroundImage: `url(${homeBanner2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='md:py-10 md:px-32'
            >
                <div>
                    <p className='max-w-6xl text-xl leading-7 text-justify'>
                        We harness the essence of Web 3.0 and emerging technologies to architect inventive, intelligent, and sustainable web development solutions and services. As a leading IT service provider and software company, our forte lies in ideation, skillfully connecting the dots to shape a more advanced and audacious digital future.
                    </p>
                    <h4 className='max-w-6xl mx-auto text-2xl text-center my-4 h-7'><span>Empowering the future digital landscope</span></h4>
                </div>
                <div className='bg-gray-900 py-1 w-full rounded-md text-gray-300 grid grid-cols-5 gap-20 px-20'>
                    {
                        skills.map(skill =>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    ` inline-block duration-300  w-fit pb-1 ${isActive ? "bg-gray-800 px-12 w-full rounded-md" : ""
                                    }`
                                }
                            >
                                {skill}
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;