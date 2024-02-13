import classNames from 'classnames';
import gsap from 'gsap';
import { ReactNode, cloneElement, useEffect, useRef } from 'react';


const MagneticGhostBtn = ({ children, direction, blue = false }: { children: ReactNode; direction: 'bottom' | 'left'; blue?: boolean; }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);





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
                gsap.to(spanItem, { x: 0, y: 0 });
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
        <div className='relative'>
            {cloneElement(children as React.ReactElement, { ref })}
            <span ref={spanRef} className={classNames('size-[7px]  rounded-full  absolute', {
                'left-1/2': direction === 'bottom',
                'right-1/2': direction === 'bottom',
                'top-[45%]': direction === 'left',
                'bottom-[45%]': direction === 'left',

                'bottom-1': direction === 'bottom',
                '-left-1': direction === 'left',
                'bg-blue-500': blue,
                'bg-black': !blue
            })} style={{ scale: 1 }} />



        </div>
    );
};

export default MagneticGhostBtn;
