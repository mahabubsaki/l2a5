import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from '../anim/Magnetic';


const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },

];


const Navbar = () => {
    return (
        <nav className='px-20 py-6 flex justify-between items-center'>

            <div>
                <p className='text-3xl font-bold'>EVENT <span className='text-[#3461FF]'>360</span></p>
            </div>
            <ul className='flex gap-4'>
                {navItems.map((item, index) => (
                    <Magnetic>
                        <li key={index} className=' font-medium'>

                            {item.name}

                        </li>
                    </Magnetic>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;