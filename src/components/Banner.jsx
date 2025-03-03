import React from 'react';
import banner from '../assets/images/banner.png'
import bgImg from '../assets/images/home.jpg'

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='max-w-[1390px] mx-auto py-20 px-8 font-lato'>
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
        </div>
    );
};

export default Banner;