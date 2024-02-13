import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import useToggleSideBar from '../store/useToggleSideBar';
import classNames from 'classnames';


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
    const { open: navOpen, sideBar } = useToggleSideBar();
    useEffect(() => {
        scrollRef?.update();
    }, [navOpen, sideBar]);
    console.log({ navOpen, sideBar });

    return (


        <main id='container' className={classNames('', { 'h-[100dvh]': (navOpen || sideBar), 'h-[1000dvh]': (!navOpen || !sideBar) })}>
            <Outlet />
        </main>


    );
};

export default BaseLayout;