import { useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../anim/Button';
import useFetcher from '../store/useFetcher';
import { IService } from '../screens/Services';




const Services = () => {

    const { data } = useFetcher<IService>('services', 'services');



    return (
        <div >
            <div className='pt-14' id='services'>
                <h1 className='text-6xl my__heading2 mb-3 text-black font-bold text-center'>Our Services</h1>
                <p className='w-[90%] md:w-2/3 lg:w-1/2 mx-auto text-center mb-14 service__description'> We have one of the best services in the industry. Our team of experienced professionals is dedicated to providing top-notch solutions to our clients. We specialize in a wide range of services, ensuring that we can meet the diverse needs of our clients.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 max-w-[1500px] mx-auto' id='service-card-container'>
                {data.map((service, index) => (
                    <ServiceCard text={service.description} key={index} index={index} title={service.title} description={service.features.map(i => i.feature)} image={service.img} />
                ))}
            </div>
        </div>
    );
};



const ServiceCard = ({ title, description, image, index, text }: { title: string; description: string[]; image: string; index: number; text: string; }) => {

    const cardRef = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);


    useEffect(() => {
        function onMouseEnter() {
            setHovering(true);
        }
        function onMouseLeave() {
            setHovering(false);
        }
        const card = cardRef.current;

        card?.addEventListener('mouseenter', onMouseEnter);
        card?.addEventListener('mouseleave', onMouseLeave);
        return () => {
            card?.removeEventListener('mouseenter', onMouseEnter);
            card?.removeEventListener('mouseleave', onMouseLeave);
        };

    }
        , [index]);



    return (
        <div ref={cardRef} >
            <motion.div id={'item' + index} className='p-6 rounded-md service__card origin-center  bg-[rgba(0,0,0,0.05)]'>
                <div className='w-full relative aspect-video mb-6'>
                    <AnimatePresence mode='wait'>
                        {!hovering ? <motion.div className='border' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >
                            <img src={image} alt="" className='w-full aspect-video rounded-md' />
                        </motion.div> : null}
                    </AnimatePresence>

                    <AnimatePresence mode='wait'>
                        {hovering ? <motion.p className='absolute w-full h-full justify-center items-center top-0' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >{text}</motion.p> : null}
                    </AnimatePresence>

                </div>

                <h1 className='text-3xl mb-3 font-bold'>{title}</h1>
                <ul className='flex gap-4 flex-col'>
                    {description.map((desc, index) => (
                        <li key={index} className='flex gap-4 items-center'>
                            <div className='size-5 bg-white rounded-full flex justify-center items-center text-green-500'>
                                <FaCheck size={10} />
                            </div>
                            <p>{desc}</p>
                        </li>
                    ))}
                </ul>
                <AnimatePresence mode='wait'>
                    {hovering ? <motion.div className='w-full flex flex-col  origin-top' initial={{ scaleY: 0, height: 0, marginTop: 0, marginBottom: 0 }} animate={{ scaleY: 1, height: 'auto', marginTop: 16, marginBottom: 16 }} exit={{ scaleY: 0, height: 0, marginTop: 0, marginBottom: 0 }}>
                        {hovering ? <Button className='bg-[#3461FF]'>
                            Check It Out
                        </Button> : null}
                    </motion.div> : null}
                </AnimatePresence>
            </motion.div>
        </div >
    );
};


export default Services;