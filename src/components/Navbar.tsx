import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MagneticLink from '../anim/MagneticLink';
import { AnimatePresence, motion } from 'framer-motion';
import MagneticGhostBtn from '../anim/MagneticGhostBtn';
import { useMediaQuery } from '@uidotdev/usehooks';
import classNames from 'classnames';
import useToggleSideBar from '../store/useToggleSideBar';

import SideBar from './SideBar';

const nav = [{ name: 'Home', path: '/' },
{ name: 'Dashboard', path: '/dashboard' },
{ name: 'Contact', path: '#contact' },];

const navItems = [
    ...nav

] as const;
export type NavPath = typeof navItems[number]['path'] | null;

const Navbar = () => {
    const { pathname } = useLocation();
    const { scroller } = useToggleSideBar();
    const [hovered, setHovered] = useState<NavPath>(null);
    const isSmallDevice = useMediaQuery("(max-width: 768px)");
    const { sideBar, setSideClose, setSideOpen } = useToggleSideBar();


    useEffect(() => {
        if (!isSmallDevice) {
            setSideClose();
        }
    }, [isSmallDevice]);


    return (
        <nav className={classNames('px-20 py-6 flex justify-between items-center', { 'px-20': !isSmallDevice, 'px-5': isSmallDevice })}>

            <div>
                <p className='text-2xl sm:text-3xl font-bold'>EVENT <span className='text-[#3461FF]'>360</span></p>
            </div>
            <AnimatePresence mode='wait'>
                {!isSmallDevice ? <motion.ul initial={{ scale: 0, opacity: 0, width: '0px' }} animate={{ scale: 1, opacity: 1, width: 'fit-content' }} exit={{ scale: 0, opacity: 0, width: '0px' }} className='flex gap-8 items-center'>
                    {navItems.map((item, index) => (
                        <Link to={item.path} key={item.name}>

                            <MagneticLink dark direction={'bottom'} pathname={pathname} path={item.path} hovered={hovered} setHovered={setHovered}>
                                <li onClick={() => {
                                    if (item.name === 'Contact') {
                                        scroller?.scrollTo('#contact');
                                    }
                                }} key={index} className='font-medium cursor-pointer select-none py-3 px-2'>

                                    {item.name}

                                </li>
                            </MagneticLink>
                        </Link>
                    ))}
                </motion.ul> : null}

            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {
                    (isSmallDevice) ? <motion.ul initial={{ scale: 0, opacity: 0, width: '0px' }} animate={{ scale: 1, opacity: 1, width: 'fit-content' }} exit={{ scale: 0, opacity: 0, width: '0px' }}>
                        <button onClick={() => setSideOpen()}>
                            <MagneticGhostBtn direction='left'>
                                <li className='font-medium cursor-pointer select-none py-2  px-3'>

                                    Menu

                                </li>
                            </MagneticGhostBtn>
                        </button>
                    </motion.ul> : null
                }
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {(isSmallDevice && sideBar) ? <SideBar hovered={hovered} navItems={nav} pathname={pathname} setHovered={setHovered} /> : null}

            </AnimatePresence>
        </nav>
    );
};

export default Navbar;