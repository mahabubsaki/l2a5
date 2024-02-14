import { motion } from 'framer-motion';
import React from 'react';

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Testimonial = () => {
    return (
        <div >
            <div className='flex justify-between  mb-16 items-center' id='testimonial'>
                <h1 className='text-6xl my__heading5  text-black font-bold '>What Our Client Said about us</h1>
                <div className='flex gap-5'>
                    <motion.button whileTap={{ scale: 1.2 }} className='size-[85px] rounded-full duration-300 text-black hover:text-white focus:bg-[#3461FF] hover:bg-[#3461FF] bg-[#F8F9FF] flex justify-center items-center testimonial-btn'>
                        <FaArrowLeftLong size={30} />
                    </motion.button>
                    <motion.button whileTap={{ scale: 1.2 }} className='size-[85px] rounded-full duration-300 text-black hover:text-white focus:bg-[#3461FF] hover:bg-[#3461FF] bg-[#F8F9FF] flex justify-center items-center testimonial-btn'>
                        <FaArrowRightLong size={30} />
                    </motion.button>
                </div>
            </div>
            <div>
                <TSlider />
            </div>
        </div>
    );
};


const TSlider = () => {
    return (
        <div>

        </div>
    );
};

export default Testimonial;