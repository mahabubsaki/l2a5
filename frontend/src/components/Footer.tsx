
import { BiArrowFromLeft, BiEuro } from 'react-icons/bi';
import { ImInfo } from 'react-icons/im';
import { RiGlobalLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className='py-12 '>
                <TopFooter />
            </div>
            <hr className='border border-[#334155]' />
            <div className='py-6'>
                <BottomFooter />
            </div>
        </div>
    );
};


const TopFooter = () => {
    return (
        <div style={{ gridTemplateColumns: 'repeat(auto-fit, 205px)', placeContent: 'center' }} className='grid text-white gap-12'>
            <div className='col-span-1     '>
                <h1 className='text-3xl font-bold'>Event <span className='text-[#3461FF]'>360</span></h1>
            </div>
            <div className='col-span-1     '>
                <ul className='text-[#E2E8F0]'>
                    <li className='py-3 text-white font-semibold'>Product</li>
                    <li className='py-3'>Pricing</li>
                    <li className='py-3'>Overview</li>
                    <li className='py-3'>Browse</li>
                    <li className='py-3'>Accessibillity</li>
                </ul>
            </div>
            <div className='col-span-1     '>
                <ul className='text-[#E2E8F0]'>
                    <li className='py-3 text-white font-semibold'>Solutions</li>
                    <li className='py-3'>Brainstorming</li>
                    <li className='py-3'>Ideation</li>
                    <li className='py-3'>Wirefarming</li>
                    <li className='py-3'>Research</li>
                </ul>
            </div>
            <div className='col-span-1     '>
                <ul className='text-[#E2E8F0]'>
                    <li className='py-3 text-white font-semibold'>Resources</li>
                    <li className='py-3'>Help Center</li>
                    <li className='py-3'>Blog</li>
                    <li className='py-3'>Tutorials</li>
                    <li className='py-3'>FAQs</li>
                </ul>
            </div>
            <div className='col-span-1     '>
                <ul className='text-[#E2E8F0]'>
                    <li className='py-3 text-white font-semibold'>Support</li>
                    <li className='py-3'>Contact Us</li>
                    <li className='py-3'>Developers</li>
                    <li className='py-3'>Documentation</li>
                    <li className='py-3'>Intregations</li>
                </ul>
            </div>
            <div className='col-span-1     '>
                <ul className='text-[#E2E8F0]'>
                    <li className='py-3 text-white font-semibold'>Company</li>
                    <li className='py-3'>About</li>
                    <li className='py-3'>Press</li>
                    <li className='py-3'>Events</li>
                    <li className='py-3 flex items-center gap-3'>Request Demo <BiArrowFromLeft /></li>
                </ul>
            </div>
        </div>
    );
};

const BottomFooter = () => {
    return (
        <div className='flex justify-between px-4 flex-col-reverse gap-6 md:gap-2 md:flex-row text-[#E2E8F0]'>
            <div>
                <p className='text-center md:text-left'>@ 2023. All rights reserved.</p>
            </div>
            <ul className='flex gap-5 items-center flex-wrap justify-center md:justify-start'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Contact</li>
                <li className='flex gap-1 items-center'><RiGlobalLine /> EN</li>
                <li className='flex gap-1 items-center'><BiEuro /> EUR</li>
                <li><ImInfo /></li>
            </ul>
        </div>
    );
};

export default Footer;