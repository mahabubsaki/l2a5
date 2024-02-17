import classNames from 'classnames';
import { FaList, FaPlusCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
// import { GoPlusCircle } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiFileListFill } from 'react-icons/ri';
// import { VscListOrdered } from 'react-icons/vsc';
import { Link, Outlet, useLocation } from 'react-router-dom';


const navbars = [
    { name: 'Dashboard', icon: <LuLayoutDashboard />, link: "/dashboard" },
    { name: 'Services', icon: <FaList />, link: "/dashboard/services" },
    { name: 'Events', icon: <RiFileListFill />, link: "/dashboard/events" },
    // { name: 'Recent Events', icon: <VscListOrdered />, link: "/dashboard/recent-events" },
    { name: 'Add Sevices', icon: <FaCirclePlus />, link: "/dashboard/add-services" },
    { name: 'Add Events', icon: <FaPlusCircle />, link: "/dashboard/add-events" },
    // { name: 'Add Recent Events', icon: <GoPlusCircle />, link: "/dashboard/add-recent-events" },
    { name: 'Home', icon: <IoHome />, link: "/" },
];

const Dashboard = () => {
    const { pathname } = useLocation();

    return (
        <div className='min-h-[100dvh]'>
            <div className='flex lg:flex-row   flex-col'>
                <div className='w-full lg:w-[300px]  bg-gray-400 flex flex-col gap-5  px-5 py-10'>
                    {navbars.map(({ name, icon, link }, index) => <Link key={name} to={link}>
                        <div key={index} className={classNames('flex items-center text-white font-semibold gap-3 px-4 py-3 rounded  w-full  border border-gray-600 hover:bg-gray-400 duration-500', {
                            'bg-gray-400': pathname === link,
                            'bg-gray-600': !(pathname === link),
                        })}>{icon} {name}</div></Link>)}
                </div>
                <div className=' min-h-[100dvh] flex-1'>
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;