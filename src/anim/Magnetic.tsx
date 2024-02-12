import classNames from 'classnames';
import gsap from 'gsap';
import { Dispatch, ReactNode, SetStateAction, cloneElement, useEffect, useRef } from 'react';
import { NavPath } from '../components/Navbar';


const Magnetic = ({ children, pathname, path, hovered, setHovered }: { children: ReactNode; pathname: string; path: string; hovered: NavPath; setHovered: Dispatch<SetStateAction<NavPath>>; }) => {
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

    console.log({ active, hovered });

    return (
        <div className='relative' onMouseEnter={() => setHovered(path as NavPath)} onMouseLeave={() => setHovered(() => {
            return null;
        })}>
            {cloneElement(children as React.ReactElement, { ref })}
            <span ref={spanRef} className={classNames('size-[5px] left-1/2 rounded-full bg-black absolute right-1/2 bottom-1')} style={{ scale: 0 }} />

            {(active && !hovered) ? <span className={classNames('size-[5px] left-1/2 rounded-full bg-black absolute right-1/2 bottom-1 duration-[5s]')} style={{ scale: (active && !hovered) ? 1 : 0 }} />
                : null}

        </div>
    );
};

export default Magnetic;
