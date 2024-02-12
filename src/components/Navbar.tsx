import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from '../anim/Magnetic';


const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },

] as const;
export type NavPath = typeof navItems[number]['path'] | null;

const Navbar = () => {
    const { pathname } = useLocation();
    const [hovered, setHovered] = useState<NavPath>(null);
    const navigate = useNavigate();
    return (
        <nav className='px-20 py-6 flex justify-between items-center'>

            <div>
                <p className='text-3xl font-bold'>EVENT <span className='text-[#3461FF]'>360</span></p>
            </div>
            <ul className='flex gap-8 items-center'>
                {navItems.map((item, index) => (
                    <Magnetic pathname={pathname} path={item.path} hovered={hovered} setHovered={setHovered}>
                        <li onClick={() => navigate(item.path)} key={index} className='font-medium cursor-pointer select-none py-3 px-2'>

                            {item.name}

                        </li>
                    </Magnetic>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;