import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import useToggleSideBar from '../store/useToggleSideBar';
import classNames from 'classnames';
import AnimatedCursor from 'react-animated-cursor';


gsap.registerPlugin(ScrollTrigger);


const BaseLayout = () => {
    const [scrollRef, setScrollRef] = useState<LocomotiveScroll | null>(null);
    useLayoutEffect(() => {
        const scroll = new LocomotiveScroll({
            smooth: true, el: (document.querySelector('#container') as HTMLElement),
            tablet: {
                breakpoint: 0
            }
        });


        setScrollRef(scroll);


        window.onresize = scroll.update();

        scroll.on("scroll", () => ScrollTrigger.update());


        ScrollTrigger.scrollerProxy('#container', {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
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
                start: 'top center',
                end: 'bottom center',
            }
        });

        timeline.from('.my__heading', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });

        timeline.from('.images', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });

        const timelin2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                scroller: '#container',
                start: 'top center',
                end: 'bottom center',
            }
        });
        ['.my__heading2', '.service__description',].forEach((item) => {
            timelin2.from(item, { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
        });
        const timelin3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#service-card-container',
                scroller: '#container',
                start: 'top center',
                end: 'bottom center',
            }
        });
        timelin3.from('.service__card', { scale: 0, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.2 });
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
        , []);
    const { open: navOpen, sideBar } = useToggleSideBar();
    useEffect(() => {
        scrollRef?.update();
        if (navOpen || sideBar) {
            document.documentElement.style.setProperty('--cursor-color', 'rgb(255,255,255)');

        } else {
            document.documentElement.style.setProperty('--cursor-color', 'rgb(0,0,0)');
        }
    }, [navOpen, sideBar]);


    return (

        <Fragment>
            <main id='container' className={classNames('', { 'h-[100dvh]': (navOpen || sideBar), 'min-h-[100dvh]': (!navOpen || !sideBar) })}>

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
        </Fragment>


    );
};

export default BaseLayout;