import React, { useEffect, useState } from 'react';
import heroImg from '../assets/hero-banner.png';
import { motion } from 'framer-motion';
import Button from '../anim/Button';


const HeroSection = () => {
    return (
        <div className='w-[95%] mx-auto items-center flex-col-reverse lg:flex-row flex  gap-8 lg:gap-2'>
            <div className='flex-1'>
                <Main />
            </div>
            <div className='flex-1 flex-shrink-0 flex justify-center'>
                <BannerImage />
            </div>

        </div>
    );
};


const Main = () => {
    return (

        <div className='flex flex-col gap-20'>
            <div>
                <h1 className='uppercase text-6xl font-bold mb-2'>
                    Brand New event Packages
                </h1>
                <h2 className='text-5xl  font-semibold inline-block px-4 py-2 bg-clip-text bg-[linear-gradient(276deg,#5A01CB_37.08%,#FE8900_57.18%)] text-transparent'>For Winter</h2>
                <p className='text-xl my-8 text-[#333]'> Join us for an exciting event filled with fun, learning, and networking opportunities.
                    We have a lineup of engaging speakers, interactive workshops, and plenty of chances
                    to connect with fellow enthusiasts. Don't miss out on this fantastic event! Register now to secure your spot.
                    We look forward to seeing you there!</p>
                <Button className='bg-[#3461FF]'>
                    Explore
                </Button>
            </div>
            <div className='flex flex-wrap gap-4'>
                <div className='rounded-[32px] px-4 flex-1 basis-[200px]  py-6 border-2 border-white backdrop-blur-[2px] '>
                    <button className='p-3 mb-8 rounded-full bg-[rgba(104,95,212,0.35)] inline-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_1_1676)">
                                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#685FD4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1676">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <h2 className='text-xl font-semibold mb-3'>Fundraising Events</h2>
                    <p>
                        Fundraising events are gatherings organized to raise money for a cause or organization. They typically involve activities such as auctions, dinners, or concerts, aiming to engage donors and supporters in contributing to the fundraising goal.</p>
                </div>
                <div className='rounded-[32px] px-4 py-6 flex-1 basis-[200px] border-2 border-white backdrop-blur-[2px] '>
                    <button className='p-3 mb-8 rounded-full bg-[rgba(242,201,76,0.35)] inline-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_1_1682)">
                                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#F2C94C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1682">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <h2 className='text-xl font-semibold mb-3'>Sporting Events</h2>
                    <p>
                        Sporting events are competitive gatherings where athletes or teams engage in various sports disciplines, showcasing their skills and talents. These events attract spectators and often promote teamwork, athleticism, and sportsmanship while providing entertainment.</p>
                </div>
                <div className='rounded-[32px] px-4 py-6 flex-1 basis-[200px] border-2 border-white backdrop-blur-[2px] '>
                    <button className=' p-3 mb-8 rounded-full bg-[rgba(138,178,220,0.35)] inline-block'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_1_1689)">
                                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#8AB2DC" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1689">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <h2 className='text-xl font-semibold mb-3'>Political Events</h2>
                    <p>
                        Political events are assemblies where individuals or groups discuss, advocate, or engage in activities related to governance, policy-making, or political campaigns. They may include rallies, debates, or conferences, aiming to promote political agendas.</p>
                </div>
            </div>
        </div>
    );
};



const BannerImage = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const heighy = ref?.current?.getBoundingClientRect().height || 0;
    const [height, setHeight] = useState<number>(heighy);

    useEffect(() => {
        function highetDetermine() {
            setHeight(ref?.current?.getBoundingClientRect().height || 0);
        }
        window.addEventListener('resize', highetDetermine);

        return () => {
            window.removeEventListener('resize', highetDetermine);
        };
    }
        , []);
    const firstX = new Array(5).fill(0).map((_, i) => {
        if (i === 0) return 0;
        if (i === 1) return height * 0.122;
        if (i === 2) return height * 0.122;
        if (i === 3) return -(height * 0.057);
        if (i === 4) return -(height * 0.241);
    });
    const firstY = new Array(5).fill(0).map((_, i) => {
        if (i === 0) return 0;
        if (i === 1) return -(height * 0.185);
        if (i === 2) return -(height * 0.661);
        if (i === 3) return -(height * 0.864);
        if (i === 4) return -(height * 0.911);
    });
    const secondX = new Array(5).fill(0).map((_, i) => {
        if (i === 0) return 0;
        if (i === 1) return -(height * 0.182);
        if (i === 2) return -(height * 0.182);
        if (i === 3) return -(height * 0.087);
        if (i === 4) return height * 0.198;
    });

    const secondY = new Array(5).fill(0).map((_, i) => {
        if (i === 0) return 0;
        if (i === 1) return height * 0.224;
        if (i === 2) return height * 0.607;
        if (i === 3) return height * 0.778;
        if (i === 4) return height * 0.936;

    });

    return (
        <div ref={ref} className='border border-black rounded-full p-16 lg:p-12 relative xl:p-16'>
            <img className='w-full aspect-[0.7/1] max-w-[600px] rounded-full' src={heroImg} alt="" />
            <motion.div initial={{ x: 0, y: 0 }} transition={{ duration: 10, repeatType: 'reverse', repeat: Infinity }} animate={{ x: firstX, y: firstY }} className='absolute hidden lg:block bottom-[0vw] right-[11vw] lg:bottom-[1vw]  lg:right-[3vw]'>
                <Shape1 />
            </motion.div>
            <motion.div initial={{ x: 0, y: 0 }} transition={{ duration: 10, repeatType: 'reverse', repeat: Infinity }} animate={{ x: secondX, y: secondY }} className='absolute hidden lg:block top-[0vw] left-[11vw] lg:top-[1vw] lg:left-[7.5vw] xl:left-[6.8vw] '>
                <Shape2 />
            </motion.div>
        </div>
    );
};

const Shape1 = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[15vw] lg:w-[10vw] max-w-[130px]' viewBox="0 0 139 150" fill="none">
            <path d="M67.6453 1.77796C67.9062 -0.592654 71.0938 -0.592654 71.3547 1.77796L73.5414 21.6653C76.365 47.3452 95.1268 67.5918 118.923 70.6388L137.352 72.9985C139.549 73.28 139.549 76.72 137.352 77.0015L118.923 79.3612C95.1268 82.4082 76.365 102.655 73.5414 128.335L71.3547 148.222C71.0938 150.593 67.9062 150.593 67.6453 148.222L65.4586 128.335C62.6351 102.655 43.8732 82.4082 20.0765 79.3612L1.64758 77.0015C-0.549193 76.72 -0.549193 73.28 1.64758 72.9985L20.0765 70.6388C43.8732 67.5918 62.6351 47.3452 65.4586 21.6653L67.6453 1.77796Z" fill="url(#paint0_linear_1_1669)" />
            <defs>
                <linearGradient id="paint0_linear_1_1669" x1="128.416" y1="150" x2="-9.17316" y2="133.657" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CB9201" />
                    <stop offset="1" stopColor="#FEC600" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const Shape2 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[15vw] lg:w-[5vw] max-w-[90px]' viewBox="0 0 98 96" fill="none">
            <path d="M49 0L57.2864 32.793L88.0916 18.8255L67.6195 45.7502L97.7464 61.126L63.9317 61.9076L70.6942 95.0484L49 69.0983L27.3058 95.0484L34.0683 61.9076L0.253605 61.126L30.3805 45.7502L9.90842 18.8255L40.7136 32.793L49 0Z" fill="url(#paint0_linear_1_1668)" />
            <defs>
                <linearGradient id="paint0_linear_1_1668" x1="49" y1="0" x2="49" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0.14" stopColor="#FF00B8" />
                    <stop offset="1" stopColor="#2000FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default HeroSection;