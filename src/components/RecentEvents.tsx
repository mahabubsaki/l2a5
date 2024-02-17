
import Button from '../anim/Button';
import recent1 from '../assets/recent1.png';
import recent2 from '../assets/recent2.png';
import recent3 from '../assets/recent3.png';
import recent4 from '../assets/recent4.jpg';
import recent5 from '../assets/recent5.png';
import recent6 from '../assets/recent6.jpg';
import { motion } from 'framer-motion';


const RecentEvents = () => {
    return (
        <div className='py-32 px-5 ' >
            <div className='flex items-center gap-20 flex-col-reverse md:flex-row'>
                <div className='flex flex-1'>
                    <Images />
                </div>
                <div className='flex-1'>
                    <Content />
                </div>
            </div>
        </div>
    );
};


const Content = () => {
    return (
        <div id='recent-events'>
            <h1 className='text-6xl recent-container-item mb-6 text-black font-bold'>Recent Events</h1>
            <p className='recent-container-item mb-12'>
                These are our recent events that we have organized. We have a lot of events coming up. Stay tuned for more updates. Our recent events showcase our ability to deliver exceptional experiences, tailored to the unique needs of our clients.
            </p>
            <div className='recent-container-item'>
                <Button className='bg-blue-600'>
                    Learn More
                </Button>
            </div>
        </div>
    );
};

const images = [
    {
        img: recent1,
        alt: 'recent1',
        round: false
    },
    {
        img: recent2,
        alt: 'recent2',
        round: false
    },
    {
        img: recent3,
        alt: 'recent3',
        round: true
    },
    {
        img: recent4,
        alt: 'recent4',
        round: true
    },
    {
        img: recent5,
        alt: 'recent5',
        round: false
    },
    {
        img: recent6,
        alt: 'recent6',
        round: false
    }
];


const Images = () => {
    return (
        <motion.div variants={{
            notInView: {
                clipPath: 'circle(0% at 50% 50%)'
            },
            inView: {
                clipPath: 'circle(100% at 50% 50%)',
                transition: {
                    staggerChildren: 0.5,
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.5
                }
            }
        }} initial='notInView' viewport={{ once: true, amount: 'some' }} whileInView='inView' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {images.map((item, index) => (
                <motion.div variants={{
                    notInView: {
                        clipPath: 'circle(0% at 50% 50%)'
                    },
                    inView: {
                        clipPath: 'circle(100% at 50% 50%)',
                    }
                }} viewport={{ once: true, amount: 'some' }} key={index} className={`aspect-square overflow-hidden ${item.round ? 'rounded-full' : 'rounded-3xl'}`}>
                    <img src={item.img} alt={item.alt} className='w-full h-full object-cover' />
                </motion.div>
            ))}


        </motion.div >
    );
};

export default RecentEvents;