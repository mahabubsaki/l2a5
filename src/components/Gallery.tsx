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
            <h1 className='text-6xl my__heading4  text-black font-bold '>Gallery</h1>
            <p className='w-[90%] md:w-2/3 mb-14 my-8 text-[#566B84] pricing__description '>
                Our Gallery is a visual testament to the exceptional events we've curated. It showcases our expertise in creating memorable experiences across various event types. From corporate functions and organizational events to lavish weddings, our gallery encapsulates our commitment to excellence.
            </p>
            <ul className='pt-8 flex flex-col gap-5'>
                {features.map((feature, index) => (
                    <li key={index} className={classNames('flex gap-4 items-center')}>
                        <div className='size-5 bg-[#E7F5E8] rounded-full flex justify-center items-center text-green-500'>
                            <FaCheck size={10} />
                        </div>
                        <p className={classNames('text-[#42526B]')}>{feature.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const GalleryGrid = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 bg-no-repeat bg-left-top' style={{ backgroundImage: `url(${star})` }}>
            <div className='flex flex-col justify-end sm:justify-center'>
                <div className='w-full'>
                    <img src={picture1} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture2} alt="" className='w-full' />
                </div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <div className='w-full'>
                    <img src={picture} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture4} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture3} alt="" className='w-full' />
                </div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <div className='w-full'>
                    <img src={picture9} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture6} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture5} alt="" className='w-full' />
                </div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center'>
                <div className='w-full'>
                    <img src={picture7} alt="" className='w-full' />
                </div>
                <div className='w-full'>
                    <img src={picture8} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};


export default Gallery;