import star from '../assets/Star.svg';
import picture from '../assets/Picture.png';
import picture1 from '../assets/Picture (1).png';
import picture2 from '../assets/Picture (2).png';
import picture3 from '../assets/Picture (3).png';
import picture4 from '../assets/Picture (4).png';
import picture5 from '../assets/Picture (5).png';
import picture6 from '../assets/Picture (6).png';
import picture7 from '../assets/Picture (7).png';
import picture8 from '../assets/Picture (8).png';
import picture9 from '../assets/Picture10.png';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';


const Gallery = () => {
    return (
        <div>
            <div className='flex flex-col gap-10 lg:gap-4 px-4 items-center lg:flex-row'>
                <div className='flex-1'>
                    <GalleryContent />
                </div>
                <div className='flex-1 '>
                    <GalleryGrid />
                </div>
            </div>
        </div>
    );
};
const features = [
    { text: 'One day pas access all lecture' },
    { text: 'Lunch and Snack' },
    { text: 'Meet Event Speaker' },
    { text: 'Basic customer support' },
    { text: 'Front Seat' },
    { text: 'One day pas access all lecture' }
];

const GalleryContent = () => {
    return (
        <div id='gallery'>
            <h1 className='text-6xl my__heading6  text-black font-bold '>Gallery</h1>
            <p className='w-[90%] md:w-2/3 mb-14 my-8 text-[#566B84] gallery__description '>
                Our Gallery is a visual testament to the exceptional events we've curated. It showcases our expertise in creating memorable experiences across various event types. From corporate functions and organizational events to lavish weddings, our gallery encapsulates our commitment to excellence.
            </p>
            <motion.ul viewport={{ once: true }} variants={{
                notInView: {
                    filter: 'blur(8px)',
                },
                inView: {
                    filter: 'blur(0px)',
                    transition: {
                        staggerChildren: 0.3
                    }
                }
            }} initial='notInView' whileInView='inView' className='pt-8 flex flex-col gap-5'>
                {features.map((feature, index) => (
                    <motion.li viewport={{ once: true }} variants={{
                        notInView: {
                            filter: 'blur(8px)',
                        },
                        inView: {
                            filter: 'blur(0px)',
                        }
                    }} key={index} className={classNames('flex gap-4  items-center')}>
                        <div className='size-5 bg-[#E7F5E8] rounded-full flex justify-center items-center text-green-500'>
                            <FaCheck size={10} />
                        </div>
                        <p className={classNames('text-[#42526B]')}>{feature.text}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

const GalleryGrid = () => {

    const isLargeDevice = useMediaQuery('(min-width: 640px)');
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 bg-no-repeat bg-left-top' style={{ backgroundImage: `url(${star})` }}>

            <div className='flex flex-col justify-end sm:justify-center'>

                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: 276, y: 175
                    },
                    small: {
                        x: 92, y: 399
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 0,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture1} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: 276, y: -99
                    },
                    small: {
                        x: 92, y: 115
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 0.2,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture2} alt="" className='w-full' />
                </motion.div>

            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: 95, y: 296
                    },
                    small: {
                        x: -89, y: 657
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 0.4,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: 95, y: 0
                    },
                    small: {
                        x: -89, y: 361
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 0.6,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-20'>
                    <img src={picture4} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: 95, y: -264
                    },
                    small: {
                        x: -89, y: 115
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 0.8,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture3} alt="" className='w-full' />
                </motion.div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: -87, y: 296
                    },
                    small: {
                        x: 94, y: -125
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 1,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture9} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: -87, y: 54
                    },
                    small: {
                        x: 94, y: -405
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 1.2,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture6} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: -87, y: -205
                    },
                    small: {
                        x: 94, y: -625
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 1.4,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture5} alt="" className='w-full' />
                </motion.div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: -267, y: 148
                    },
                    small: {
                        x: -87, y: -158
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 1.6,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture7} alt="" className='w-full' />
                </motion.div>
                <motion.div viewport={{ once: true }} variants={{
                    large: {
                        x: -267, y: -112
                    },
                    small: {
                        x: -87, y: -421
                    }
                }} whileInView={{
                    x: 0, y: 0, transition: {
                        delay: 1.8,
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }} initial={isLargeDevice ? 'large' : 'small'} className='w-full z-10'>
                    <img src={picture8} alt="" className='w-full' />
                </motion.div>

            </div>

        </div>
    );
};


export default Gallery;