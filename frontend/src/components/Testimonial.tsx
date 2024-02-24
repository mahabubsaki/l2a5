import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { forwardRef, useRef, useState } from 'react';

import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import classNames from 'classnames';
const RESPONSIVE_SETTINGS = [

    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1350, settings: { slidesToShow: 2 } },
    { breakpoint: 2400, settings: { slidesToShow: 3 } },

];


const testimonials = [
    {
        name: 'Amelia Joseph',
        position: 'Chief Manager',
        review: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
        img: testimonial1
    },
    {
        name: 'Jacob Joshua',
        position: 'CEO',
        review: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
        img: testimonial2
    },
    {
        name: 'Henry Cavil',
        position: 'CTO',
        review: "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
        img: testimonial3
    }
];



interface TSliderProps {
    mock: boolean;
}

const Testimonial = () => {
    const slideRef = useRef<Slider | null>(null);
    return (
        <div >
            <div className='flex justify-between flex-col gap-6 md:flex-row  mb-16 items-center' id='testimonial'>
                <h1 className='text-6xl my__heading5 text-center md:text-left  text-black font-bold '>What Our Client Said about us</h1>
                <div className='flex gap-5'>
                    <motion.button onClick={() => slideRef.current?.slickPrev()} whileTap={{ scale: 1.2 }} className='size-[85px] rounded-full duration-300 text-black hover:text-white focus:bg-[#3461FF] hover:bg-[#3461FF] bg-[#F8F9FF] flex justify-center items-center testimonial-btn'>
                        <FaArrowLeftLong size={30} />
                    </motion.button>
                    <motion.button onClick={() => slideRef.current?.slickNext()} whileTap={{ scale: 1.2 }} className='size-[85px] rounded-full duration-300 text-black hover:text-white focus:bg-[#3461FF] hover:bg-[#3461FF] bg-[#F8F9FF] flex justify-center items-center testimonial-btn'>
                        <FaArrowRightLong size={30} />
                    </motion.button>
                </div>
            </div>
            <div>
                <TSlider ref={slideRef} mock />
            </div>
        </div>
    );
};


const TSlider = forwardRef<Slider, TSliderProps>(({ mock }, ref) => {

    const [current, setCurrent] = useState(0);

    return (
        <div >
            <Slider responsive={RESPONSIVE_SETTINGS} ref={ref} accessibility={mock} infinite afterChange={(current) => setCurrent(current)} autoplay easing='easeOut' centerPadding='0' initialSlide={0} pauseOnHover dots={false} slidesToShow={3} arrows={false}>
                {testimonials.map((item, index) => (
                    <EachSlide key={index} {...item} active={current === index} />
                ))}
            </Slider>
        </div>
    );
});


const EachSlide = ({ active, img, name, position, review }: { active: boolean; name: string; review: string; position: string; img: string; }) => {
    return (
        <div className={classNames('flex min-h-[350px] flex-col gap-5 group  duration-300 hover:bg-[#3461FF] rounded-[30px] p-10 pr-[70px]', {
            'bg-[#3461FF]': active,
            'bg-[#F8F9FF]': !active

        })}>
            <div className='flex gap-5 items-center'>
                <div className='size-20 rounded-full'>
                    <img src={img} alt='testimonial' className='w-full h-full rounded-full' />
                </div>
                <div>
                    <h2 className={classNames('text-3xl mb-1 font-semibold text-black group-hover:text-white capitalize', {
                        'text-white': active
                    })}>{name}</h2>
                    <p className={classNames('text-[#42526B] group-hover:text-white/80 capitalize', {
                        'text-white/80': active
                    })}>{position}</p>
                </div>
            </div>
            <p className={classNames('text-[#42526B] group-hover:text-white/80 capitalize', {
                'text-white/80': active
            })}>{review}
            </p>
        </div>
    );
};

export default Testimonial;