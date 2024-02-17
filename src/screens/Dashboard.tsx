import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { GoPlusCircle } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { Link, Outlet } from 'react-router-dom';


const navbars = [
    { name: 'Dashboard', icon: <LuLayoutDashboard />, link: "/dashboard" },
    { name: 'Add Sevices', icon: <FaCirclePlus />, link: "/dashboard/add-services" },
    { name: 'Add Events', icon: <FaPlusCircle />, link: "/dashboard/add-events" },
    { name: 'Add Recent Events', icon: <GoPlusCircle />, link: "/dashboard/add-recent-events" },
    { name: 'Home', icon: <IoHome />, link: "/" },
];

const Dashboard = () => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);
    return (
        <div className='min-h-[100dvh]'>
            <div className='flex lg:flex-row flex-col'>
                <div className='w-full lg:w-[300px]  bg-gray-400 flex flex-col gap-5  h-fit lg:h-[100dvh] px-5 py-10'>
                    {navbars.map(({ name, icon, link }, index) => <Link to={link}>
                        <div key={index} className='flex items-center text-white font-semibold gap-3 px-4 py-3 rounded  w-full bg-gray-600'>{icon} {name}</div></Link>)}
                </div>
                <div className=' p-5 min-h-[100dvh]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;