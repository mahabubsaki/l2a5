import React, { Fragment, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';


gsap.registerPlugin(ScrollTrigger);


const BaseLayout = () => {
    useLayoutEffect(() => {
        const scroll = new LocomotiveScroll({ smooth: true, el: (document.querySelector('#container') as HTMLElement) });





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



        ScrollTrigger.addEventListener('refresh', () => scroll.update());


        ScrollTrigger.refresh();

        return () => {
            scroll.destroy();
            ScrollTrigger.getAll().forEach(st => st.kill());
            ScrollTrigger.removeEventListener('refresh', () => scroll.update());
            ScrollTrigger.clearMatchMedia();

        };

    }
        , []);
    return (


        <main id='container' className='h-[1000vh]'>
            <Outlet />
        </main>


    );
};

export default BaseLayout;