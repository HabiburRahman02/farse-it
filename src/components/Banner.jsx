import React, { useEffect, useState } from 'react';
import banner from '../assets/images/banner.png';
import bgImg from '../assets/images/home.jpg';
import homeBanner2 from '../assets/images/home-img2.jpg';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    const [skills, setSkills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Frontend');
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data);
                setLoading(false);

                // ✅ প্রথমবার `filteredSkills` আপডেট করবো
                const initialFiltered = data.filter(skill => skill.category === 'Frontend');
                setFilteredSkills(initialFiltered);
            });
    }, []);

    useEffect(() => {
        if (skills.length > 0) {
            const filtered = skills.filter(skill => skill.category === selectedCategory);
            setFilteredSkills(filtered);
        }
    }, [selectedCategory, skills]);

    const skillCategories = ["Frontend", "Backend", "Database", "CMS", "Tools"];

    return (
        <div className='max-w-[1390px] mx-auto'>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='py-20 px-8'>
                <div className='flex justify-between items-center gap-14'>
                    <div className='md:w-3/5'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400'>Farse IT</h1>
                        <h3 className='border-b text-3xl font-semibold mt-8 pb-2 mb-6'>Find a Robust Sustainable E-platform</h3>
                        <p className='max-w-6xl text-xl leading-7 text-justify'>
                            Elevating Your Digital Experience! 🚀 <br />
                            FarseIT's innovative web solutions. Specializing in web development, we offer expertise and a client-centric approach for businesses. Partner with us for cutting-edge solutions in e-commerce, school management, and private company operations.
                        </p>
                    </div>
                    <div className='md:w-2/5'>
                        <img src={banner} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>

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
                    <h4 className='max-w-6xl mx-auto text-2xl text-center my-4'><span>Empowering the future digital landscape</span></h4>
                </div>

                {/* Category navigation */}
                <div className='bg-gray-900 py-1 w-full rounded-md text-gray-300 grid grid-cols-3 md:grid-cols-5 gap-0 md:px-20'>
                    {skillCategories.map(skill => (
                        <NavLink
                            key={skill}
                            to="/"
                            onClick={() => setSelectedCategory(skill)}
                            className={`inline-block duration-300 pb-1 ${selectedCategory === skill ? 'bg-gray-800 px-12 rounded-md text-center' : 'px-12 text-center'}`}
                        >
                            {skill}
                        </NavLink>
                    ))}
                </div>

                {/* Display skills for the selected category */}
                {selectedCategory && (
                    <div className="mt-2 bg-gray-800 p-4 rounded-xl text-white">
                        <div className="mt-4">
                            {loading ? (
                                'Loading...'
                            ) : filteredSkills.length > 0 ? (
                                filteredSkills.map((skill) => (
                                    <div key={skill.id} className="mt-4">
                                        <h3 className="text-gray-100 font-semibold">{skill.name}</h3>
                                        <p className="text-gray-400 text-md">{skill.des}</p>
                                        <div>
                                            {skill.skills.map((sk, index) => (
                                                <img key={index} src={sk} alt="" />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No skills available in this category</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
