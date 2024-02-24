
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import Button from '../anim/Button';
import packag from '../assets/Package.svg';
import stack from '../assets/Stack.svg';
import rocket from '../assets/RocketLaunch.svg';
import classNames from 'classnames';
import { motion } from 'framer-motion';




const packages = [
    {
        name: 'Standard', description: 'Upgrade your social portfolio with a stunning profile & enhanced shots.', price: '$21', features: [
            { text: 'User Dashboard', avaiable: true },
            { text: 'Post 3 Ads per week', avaiable: true },
            { text: 'Multiple images & videos', avaiable: true },
            { text: 'Basic customer support', avaiable: false },
            { text: 'Featured ads', avaiable: false },
            { text: 'Special ads badge', avaiable: false },
            { text: 'Call to Action in Every Ads', avaiable: false },
            { text: 'Max 12 team members', avaiable: false },
        ],
        baseColor: '#F249C8',
        bgColor: '#FEEDFA',
        img: packag,
        classNames: 'pricing_card_1'
    },
    {
        name: 'Premium', description: 'Upgrade your social portfolio with a stunning profile & enhanced shots.', price: '$49', features: [
            { text: 'User Dashboard', avaiable: true },
            { text: 'Post 3 Ads per week', avaiable: true },
            { text: 'Multiple images & videos', avaiable: true },
            { text: 'Basic customer support', avaiable: true },
            { text: 'Featured ads', avaiable: true },
            { text: 'Special ads badge', avaiable: true },
            { text: 'Call to Action in Every Ads', avaiable: false },
            { text: 'Max 12 team members', avaiable: false },
        ],
        baseColor: '#0B63E5',
        bgColor: '#F0F5FF',
        img: stack,
        classNames: 'pricing_card_2'
    },
    {
        name: 'Business', description: 'Upgrade your social portfolio with a stunning profile & enhanced shots.', price: '$124', features: [
            { text: 'User Dashboard', avaiable: true },
            { text: 'Post 3 Ads per week', avaiable: true },
            { text: 'Multiple images & videos', avaiable: true },
            { text: 'Basic customer support', avaiable: true },
            { text: 'Featured ads', avaiable: true },
            { text: 'Special ads badge', avaiable: true },
            { text: 'Call to Action in Every Ads', avaiable: true },
            { text: 'Max 12 team members', avaiable: true },
        ],
        baseColor: '#E54545',
        bgColor: '#FCECEC',
        img: rocket,
        classNames: 'pricing_card_3'
    },
];


const Pricing = () => {
    return (
        <div>
            <div id='pricing' className='mb-20'>
                <h1 className='text-6xl my__heading4 mb-3 text-black font-bold text-center'>Explore our pricing plans</h1>
                <p className='w-[90%] md:w-2/3 mx-auto text-center mb-14 pricing__description '>
                    We keep affordability at the forefront of our services. Understanding the importance of budget-friendly solutions, we strive to provide high-quality event management services at competitive prices. Our transparent pricing structure ensures no hidden costs, allowing you to plan your event without any financial surprises. Choose us for cost-effective, yet exceptional event planning solutions.
                </p>
            </div>
            <div id='pricing-card-container' className='grid px-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xs gap-10 md:gap-5 '>
                {packages.map((pack) => <div key={pack.name} className={classNames('rounded-[20px] border relative border-[#F5F6F7] max-w-[500px] mx-auto ', pack.classNames)}>
                    <span style={{ backgroundColor: pack.baseColor }} className='h-1 block' />
                    {pack.name === 'Premium' ? <div className='absolute text-sm text-white rounded-t-xl leading-none -top-9 w-fit bg-[#0B63E5] flex justify-center py-3 px-2  left-1/2 right-1/2 -translate-x-1/2'>
                        <p className='uppercase '>Recommended</p>
                    </div> : null}
                    <div className='p-8 pr-5'>
                        <div className='flex justify-between items-center mb-8'>
                            <div style={{ backgroundColor: pack.bgColor }} className='p-5 rounded-lg'>
                                <img src={pack.img} />
                            </div>
                            <p style={{ color: pack.baseColor }} className=' text-5xl font-bold'>{pack.price}</p>
                        </div>
                        <div className='mb-8'>
                            <h2 className='text-2xl font-medium mb-2'>{pack.name}</h2>
                            <p className='text-[#42526B]'>Upgrade your social portfolio with a stunning profile & enhanced shots.
                            </p>
                        </div>
                        <div className='mb-10'>
                            <Button className={classNames(' flex', {
                                'bg-transparent': pack.name !== 'Premium',
                                'bg-[#0B63E5]': pack.name === 'Premium'
                            })}>
                                <span className={classNames('inline-block', {
                                    'text-[#42526B]': pack.name !== 'Premium',
                                    'text-white': pack.name === 'Premium'

                                })}>Get This Package</span> <FaLongArrowAltRight className={classNames('inline-block', {
                                    'text-[#42526B]': pack.name !== 'Premium',
                                    'text-white': pack.name === 'Premium'

                                })} />

                            </Button>
                        </div>
                        <hr className='bg-[#E6E8EC] opacity-70 -mr-5 -ml-8' />
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
                            {pack.features.map((feature, index) => (
                                <motion.li viewport={{ once: true }} variants={{
                                    notInView: {
                                        filter: 'blur(8px)',
                                    },
                                    inView: {
                                        filter: 'blur(0px)',
                                    }
                                }} key={index} className={classNames('flex gap-4 items-center', {
                                    'opacity-20': !feature.avaiable
                                })}>
                                    <div className='size-5 bg-[#E7F5E8] rounded-full flex justify-center items-center text-green-500'>
                                        <FaCheck size={10} />
                                    </div>
                                    <p className={classNames('text-[#42526B]', {
                                        'line-through': !feature.avaiable
                                    })}>{feature.text}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default Pricing;