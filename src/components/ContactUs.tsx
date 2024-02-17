

import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { SlLocationPin } from 'react-icons/sl';
import { FaCalendarAlt, FaMobileAlt } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFoYWJ1YnNha2kiLCJhIjoiY2xnZmFtMXowMDgwcjNubHF6OGc2b2xvMCJ9.x3p7ZPHVVd518UFX5d_t8g';

const contactinfo = [
    {
        icon: <SlLocationPin className="text-6xl text-[#08c] mb-4" />,
        title: 'Address',
        text: 'Boro Dewra, Tongi, Gazipur-1711'
    },
    {
        icon: <FaMobileAlt className="text-6xl text-[#08c] mb-4" />,
        title: 'Phone Number',
        text: '+8801234567891'

    },
    {
        icon: <BiEnvelope className="text-6xl text-[#08c] mb-4" />,
        title: 'Mail',
        text: 'mail@event360.com'
    },
    {
        icon: <FaCalendarAlt className="text-6xl text-[#08c] mb-4" />,
        title: 'Working Days',
        text: 'Mon - Sun / 9:00AM - 8:00PM'
    }
];


const ContactUs = () => {
    return (
        <div>
            <div id="contact">
                <h1 className='text-6xl contact__section mb-3 text-black font-bold text-center'>Contact Info</h1>
                <p className='w-[90%] md:w-2/3 mx-auto text-center mb-14 contact__section '>
                    If you have any questions, feel free to contact us. Our customer service team is always ready to help you. We are here to help you with any questions you may have. We are here to help you with any questions you may have.
                </p>
            </div>
            <div className='px-[10px] mb-[40px] gap-x-5 gap-y-8 grid grid-flow-dense' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {contactinfo.map(({ icon: Icons, text, title }, index) => <div key={index} className='flex flex-col items-center'>
                    {Icons}
                    <p className='text-[20px] font-bold mb-1 leading-5 text-[#222529]'>{title}</p>
                    <p className='text-[#777] text-[14px] leading-5 mb-5'>{text}</p>
                </div>)}
            </div>
            <h1 className='text-6xl contact__section mb-3 text-black font-bold text-center'>Our Address</h1>
            <div className='mt-8 px-5'>
                <MapLocation />
            </div>
        </div>
    );
};





const MapLocation = () => {
    return (
        <Map keyboard
            initialViewState={{
                latitude: 23.90702858280892,
                longitude: 90.37843423588089,
                zoom: 14
            }}
            mapLib={import('mapbox-gl')}
            style={{ width: "100%", height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}

        >
            <Marker longitude={90.37843423588089} latitude={23.90702858280892} color="red" />
        </Map>
    );
};
export default ContactUs;