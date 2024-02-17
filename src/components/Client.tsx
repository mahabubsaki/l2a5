
import first from '../assets/Company logo (1).svg';
import second from '../assets/Company logo (2).svg';
import third from '../assets/Company logo (3).svg';
import fourth from '../assets/Company logo (4).svg';
import fifth from '../assets/Company logo (5).svg';
import sixth from '../assets/Company logo (6).svg';
import seventh from '../assets/Company logo (7).svg';
import eighth from '../assets/Company logo.svg';

const companyImages = [first, second, third, fourth, fifth, sixth, seventh, eighth];
const Client = () => {
    return (
        <div id='client' className='w-[90%] mx-auto pt-[68px] pb-[136px] p-4'>
            <h1 className='text-6xl my__heading mb-[84px] text-black font-bold text-center'>Our Valuable client</h1>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-24'>
                {companyImages.map((image, index) => (
                    <div key={index} className='flex images justify-center items-center'>
                        <img src={image} alt="" />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Client;