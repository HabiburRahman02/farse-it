import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import navLogo from '../assets/images/logo.png';
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = (
        <>
            <li className="text-lg uppercase">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-white inline-block w-fit pb-1 duration-300 hover:text-blue-400 ${isActive ? "border-b-4 border-white " : "border-b-4 border-transparent"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="text-lg uppercase">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-white inline-block w-fit pb-1 duration-300 hover:text-blue-400 ${isActive ? "border-b-4 border-white" : "border-b-4 border-transparent"
                        }`
                    }
                >
                    About
                </NavLink>
            </li>
            <li className="text-lg uppercase">
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `text-white inline-block duration-300 hover:text-blue-400 w-fit pb-1 ${isActive ? "border-b-4 border-white" : "border-b-4 border-transparent"
                        }`
                    }
                >
                    Services
                </NavLink>
            </li>
            <li className="text-lg uppercase">
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `text-white inline-block duration-300 hover:text-blue-400 w-fit pb-1 ${isActive ? "border-b-4 border-white" : "border-b-4 border-transparent"
                        }`
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li className="text-lg uppercase">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `text-white inline-block duration-300 hover:text-blue-400 w-fit pb-1 ${isActive ? "border-b-4 border-white" : "border-b-4 border-transparent"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-[#001118] flex items-center text-white">
            <div className="navbar max-w-[1390px] mx-auto w-full flex justify-between items-center px-4 py-1">
                {/* Left Logo */}
                <div className="navbar-start">
                    <img className="h-12 w-36" src={navLogo} alt="Logo" />
                </div>

                {/* Center Links for large screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4 bg-gray-800  rounded-full py-1">
                        {links}
                    </ul>
                </div>

                {/* Right Icons and Mobile Menu */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Social Icons */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-xl text-gray-300 hover:text-white duration-300 transition-all" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl text-gray-300 hover:text-white duration-300 transition-all" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl text-gray-300 hover:text-white duration-300 transition-all" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl text-gray-300 hover:text-white duration-300 transition-all" />
                    </a>


                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="lg:hidden text-2xl">
                        <RiMenu4Fill></RiMenu4Fill>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[75%] bg-[#001118] text-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Close Button */}
                <div className="flex justify-between px-8 py-4">
                    <h4 className='text-lg font-bold'>Menu</h4>
                    <button onClick={toggleMenu} className="text-white p-1 text-xl">
                        <AiOutlineClose className='border-2 rounded-md' />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col items-center gap-4 mt-8 text-white">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
