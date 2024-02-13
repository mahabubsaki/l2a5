import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import { FaCheck } from 'react-icons/fa';

const services = [
    { img: service1, title: 'Corporate event', description: ['One day pas access all lecture', 'Lunch and Snack', 'Meet Event Speaker', 'Front Seat', 'One day pas access all lecture'] },
    { img: service2, title: 'Organization event', description: ['One day pas access all lecture', 'Lunch and Snack', 'Meet Event Speaker', 'Front Seat', 'One day pas access all lecture'] },
    { img: service3, title: 'Wedding event', description: ['One day pas access all lecture', 'Lunch and Snack', 'Meet Event Speaker', 'Front Seat', 'One day pas access all lecture'] },

];

const Services = () => {
    return (
        <div >
            <div className='pt-14' id='services'>
                <h1 className='text-6xl my__heading2 mb-3 text-black font-bold text-center'>Our Services</h1>
                <p className='w-[90%] md:w-2/3 lg:w-1/2 mx-auto text-center mb-14 service__description '> We have one of the best services in the industry. Our team of experienced professionals is dedicated to providing top-notch solutions to our clients. We specialize in a wide range of services, ensuring that we can meet the diverse needs of our clients.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 max-w-[1200px] mx-auto' id='service-card-container'>
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} image={service.img} />
                ))}
            </div>
        </div>
    );
};



const ServiceCard = ({ title, description, image }: { title: string; description: string[]; image: string; }) => {
    return (
        <div className='p-6 rounded-md service__card origin-center  bg-[rgba(0,0,0,0.05)]'>
            <div className='mb-6'>
                <img src={image} alt="" className='aspect-video rounded-md' />
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
        </div>
    );
};


export default Services;