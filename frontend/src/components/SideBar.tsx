
import { RxCross1 } from 'react-icons/rx';
import MagneticGhostBtn from '../anim/MagneticGhostBtn';
import useToggleSideBar from '../store/useToggleSideBar';
import { motion } from 'framer-motion';
import MagneticLink from '../anim/MagneticLink';
import { NavPath } from './Navbar';
import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

const SideBar = ({ hovered, setHovered, pathname, navItems }: { hovered: NavPath; setHovered: Dispatch<SetStateAction<NavPath>>; pathname: string; navItems: { readonly name: string, readonly path: string; }[]; }) => {
    const { setSideClose } = useToggleSideBar();
    return (
        <motion.div initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{ duration: 1.5, ease: 'easeInOut' }} className='absolute left-0 top-0 w-screen h-[100dvh] z-20 bg-black'>

            <div className='size-12 absolute flex justify-center items-center right-8 top-8 bg-transparent'>
                <MagneticGhostBtn blue direction='bottom'>
                    <button onClick={() => setSideClose()} className='size-10 flex justify-center items-center rounded-full bg-blue-500'>
                        <RxCross1 />
                    </button>
                </MagneticGhostBtn>
            </div>
            <div>
                <ul className='flex flex-col gap-8 items-center h-[100dvh] justify-center'>
                    {navItems.map((item, index) => (
                        <Link to={item.path} onClick={() => setSideClose()} key={item.name} className='text-white text-4xl font-semibold'>
                            <MagneticLink dark={false} direction={'left'} pathname={pathname} path={item.path} hovered={hovered} setHovered={setHovered}>
                                <li key={index} className='font-medium cursor-pointer select-none py-3 px-2'>

                                    {item.name}

                                </li>
                            </MagneticLink></Link>
                    ))}
                </ul>
            </div>

        </motion.div>
    );
};

export default SideBar;