import { motion, useAnimate } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import useToggleSideBar from "../store/useToggleSideBar";
import { useLocation } from "react-router-dom";


const Transition = ({ children, item }: { children: ReactNode; item: string; }) => {
    const { setClose, setOpen } = useToggleSideBar();


    const [scope, animate] = useAnimate();
    const rootRef = useRef<HTMLDivElement>(null);
    const slideOutRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);

    const { pathname } = useLocation();

    useEffect(() => {
        // animate('#slide-in', { y: '0%', duration: 0.5, ease: 'easeInOut' });
        async function sequenceAnimation() {

            setOpen();
            await animate(slideOutRef.current!, { x: '0%' }, { duration: 0 });
            await animate(slideOutRef.current!, { y: '0%' }, { duration: 1, ease: 'easeInOut' });
            await animate(titleRef.current!, { y: '0px', opacity: 1 }, { duration: 1, ease: 'easeInOut' });
            await Promise.all([
                animate(slideOutRef.current!, { y: '-100vh' }, { duration: 2, ease: 'easeInOut' }),
                animate(rootRef.current!, { y: '0%', opacity: 1 }, { duration: 3, ease: 'easeInOut' }),
                animate('#border'!, { width: 'fit-content' }, { duration: 0.5, ease: 'easeInOut' })]);

            await animate(slideOutRef.current!, { display: 'none' }, { duration: 0, ease: 'easeInOut' });
            window.dispatchEvent(new Event('resize'));
            if (pathname !== '/') {
                setClose();
            }

            // setTimeout(() => {
            //     setClose();
            // }, 1000);






            // await animate(slideOutRef.current, { y: '-100%', duration: 1.5, ease: 'easeInOut' });
        }

        sequenceAnimation();

    }, [item]);




    return (
        <motion.div initial={{ overflow: 'hidden' }} ref={scope} >
            <motion.div ref={rootRef} initial={{ y: '100vh', opacity: 0 }} className="min-h-screen">
                {children}

            </motion.div>

            <motion.div ref={slideOutRef} id="slide-in" initial={{ y: '100vh', x: '100vw' }} className="absolute left-0 top-0 h-[100dvh] w-full bg-black" >
                <div className="w-full h-full  relative justify-center items-center text-white">
                    <motion.p ref={titleRef} initial={{ opacity: 0, y: '50px' }} className="absolute top-1/2  bottom-1/2 -translate-x-1/2 left-1/2 right-1/2 -translate-y-1/2 text-4xl h-fit text-center font-bold uppercase flex justify-center" >
                        {item}
                        <motion.span initial={{ width: '0px' }} id="border" className="h-[2.5px] mt-2 text-4xl text-transparent bg-white absolute  inline-block mx-auto -bottom-2">
                            {item}
                        </motion.span>
                    </motion.p>

                </div>
            </motion.div>




        </motion.div>


    );

};

export default Transition;