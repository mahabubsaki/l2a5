import classNames from 'classnames';
import gsap from 'gsap';
import { Dispatch, ReactNode, SetStateAction, cloneElement, useEffect, useRef } from 'react';
import { NavPath } from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';


const MagneticLink = ({ children, pathname, path, hovered, setHovered, direction, dark = true }: { children: ReactNode; pathname: string; path: string; hovered: NavPath; setHovered: Dispatch<SetStateAction<NavPath>>; direction: 'bottom' | 'left'; dark: boolean; }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    const active = path === pathname;



    useEffect(() => {
        const item = ref.current;
        const spanItem = spanRef.current;


        const mouseMove = (e: MouseEvent) => {

            if (!item) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(item, { x, y });

            if (spanItem) {
                gsap.to(spanItem, { x: x * 1.2, y: y * 1.2, scale: 1 });
            }
        };

        const mouseLeave = () => {

            if (!item) return;

            gsap.to(item, { x: 0, y: 0 });

            if (spanItem) {
                gsap.to(spanItem, { x: 0, y: 0, scale: 0 });
            }
        };

        if (item) {
            item.addEventListener('mousemove', mouseMove);
            item.addEventListener('mouseleave', mouseLeave);

        }

        return () => {
            if (item) {
                item.removeEventListener('mousemove', mouseMove);
                item.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }, []);


    return (
        <div className='relative' onMouseEnter={() => setHovered(path as NavPath)} onMouseLeave={() => setHovered(() => {
            return null;
        })}>
            {cloneElement(children as React.ReactElement, { ref })}
            <span ref={spanRef} className={classNames('size-[7px]  rounded-full bg-black absolute', {
                'left-1/2': direction === 'bottom',
                'right-1/2': direction === 'bottom',
                'top-1/2': direction === 'left',
                'bottom-1/2': direction === 'left',
                'bottom-1': direction === 'bottom',
                '-left-3': direction === 'left',
                'bg-black': dark,
                'bg-white': !dark,
            })} style={{ scale: 0 }} />

            <AnimatePresence mode='wait'>
                {(active && !hovered) ? <motion.span layout initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: 'easeOut' }} exit={{ scale: 0 }} className={classNames('size-[7px]  rounded-full  absolute', {
                    'left-1/2': direction === 'bottom',
                    'right-1/2': direction === 'bottom',
                    'top-1/2': direction === 'left',
                    'bottom-1/2': direction === 'left',
                    'bottom-1': direction === 'bottom',
                    '-left-3': direction === 'left',
                    'bg-black': dark,
                    'bg-white': !dark,
                })} />
                    : null}
            </AnimatePresence>

        </div>
    );
};

export default MagneticLink;
