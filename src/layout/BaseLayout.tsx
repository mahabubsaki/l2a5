import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import useToggleSideBar from '../store/useToggleSideBar';
import classNames from 'classnames';
import AnimatedCursor from 'react-animated-cursor';
import { Toaster } from 'sonner';


gsap.registerPlugin(ScrollTrigger);


const BaseLayout = () => {
    const [scrollRef, setScrollRef] = useState<LocomotiveScroll | null>(null);
    const { setClose, setOpen, setScroller } = useToggleSideBar();
    const { pathname } = useLocation();



    useLayoutEffect(() => {
        if (pathname !== '/') return;
        const scroll = new LocomotiveScroll({
            smooth: true, el: (document.querySelector('#container') as HTMLElement),

            tablet: {
                breakpoint: 0
            },
        });


        setScrollRef(scroll);
        setScroller(scroll);

        window.onresize = function () {
            setOpen();
            scroll.update();

            scroll.scrollTo('#container', { duration: 0.5, disableLerp: true });
            setTimeout(() => {
                setClose();
            }, 1500);
        };

        scroll.on("scroll", () => {


            ScrollTrigger.update();
        });


        ScrollTrigger.scrollerProxy('#container', {
            scrollTop(value) {
                return arguments.length ? (scroll as any).scrollTo(value, 0, 0) : (scroll as any).scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: (document.querySelector('#container') as HTMLElement).style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.defaults({
            scroller: document.querySelector('#container'),

        });
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#client',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%'
            }
        });

        timeline.from('.my__heading', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });

        timeline.from('.images', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });

        const timelin2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });
        ['.my__heading2', '.service__description',].forEach((item) => {
            timelin2.from(item, { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
        });
        const timelin3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#service-card-container',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });
        timelin3.from('.service__card', { scale: 0, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });

        const timeline4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#events',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });

        ['.my__heading3', '.events__description'].forEach((item) => {
            timeline4.from(item, { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
        });


        const timeline5 = gsap.timeline({
            scrollTrigger: {
                trigger: '#event-container',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });

        timeline5.from('.event__card', { scale: 0, opacity: 0, duration: 1.5, y: 100, ease: 'power4.out', stagger: 0.2 });

        const timeline6 = gsap.timeline({
            scrollTrigger: {
                trigger: '#pricing',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });

        ['.my__heading4', '.pricing__description'].forEach((item) => {
            timeline6.from(item, { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
        });

        const timeline7 = gsap.timeline({
            scrollTrigger: {
                trigger: '#pricing-card-container',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });

        timeline7.fromTo('.pricing_card_1', { x: '104%', ease: 'power4.out', opacity: 0 }, { x: '0%', opacity: 1 });
        timeline7.fromTo('.pricing_card_2', { ease: 'power4.out', opacity: 0 }, { opacity: 1 });
        timeline7.fromTo('.pricing_card_3', { x: '-104%', ease: 'power4.out', opacity: 0 }, { x: '0%', opacity: 1 });


        const timeline8 = gsap.timeline({
            scrollTrigger: {
                trigger: '#testimonial',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });


        timeline8.fromTo('.my__heading5', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' }, { y: 0, opacity: 1 });
        timeline8.fromTo('.testimonial-btn', { scale: 0, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 }, { scale: 1, opacity: 1 });

        const timeline9 = gsap.timeline({
            scrollTrigger: {
                trigger: '#gallery',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%',
            }
        });
        ['.my__heading6', '.gallery__description'].forEach((item) => {
            timeline9.from(item, { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
        });


        const timeline10 = gsap.timeline({
            scrollTrigger: {
                trigger: '#recent-events',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%'
            }
        });

        timeline10.from('.recent-container-item', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });

        const timeline11 = gsap.timeline({
            scrollTrigger: {
                trigger: '#faq',
                scroller: '#container',
                start: 'top 70%',
                end: 'top 70%'
            }
        });

        timeline11.from('.faq__section', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });



        ScrollTrigger.addEventListener('refresh', () => {
            if (scroll) scroll.update();
        });


        ScrollTrigger.refresh();



        return () => {
            if (scroll) scroll.destroy();
            ScrollTrigger.getAll().forEach(st => st.kill());
            ScrollTrigger.removeEventListener('refresh', () => {
                if (scroll) scroll.update();
            });
            ScrollTrigger.clearMatchMedia();

        };

    }
        , [pathname]);
    const { open: navOpen, sideBar } = useToggleSideBar();
    useEffect(() => {
        console.log({ navOpen, sideBar });
        scrollRef?.update();

        if (navOpen || sideBar) {
            document.documentElement.style.setProperty('--cursor-color', 'rgb(255,255,255)');

        } else {
            document.documentElement.style.setProperty('--cursor-color', 'rgb(0,0,0)');
        }
    }, [navOpen, sideBar]);


    return (

        <Fragment>
            <main id='container' className={classNames('p-0', { 'h-screen': (navOpen || sideBar), 'min-h-screen': (!navOpen || !sideBar), 'overflow-hidden': pathname !== '/' })}>

                <Outlet />
            </main>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}

                innerScale={1}
                outerScale={2}
                outerAlpha={0}

                clickables={['a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    '.clickable',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link']}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)',
                }}
                outerStyle={{
                    border: `3px solid var(--cursor-color)`
                }} />
            <Toaster position='top-center' richColors theme='dark' />
        </Fragment>


    );
};






export default BaseLayout;