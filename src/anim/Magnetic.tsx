import gsap from 'gsap';
import { ReactNode, cloneElement, useEffect, useRef } from 'react';

const Magnetic = ({ children }: { children: ReactNode; }) => {
    const ref = useRef(null);
    useEffect(() => {

        const item = ref.current ? (ref.current as HTMLElement) : null;
        const mouseMove = (e: MouseEvent) => {
            if (item === null) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(item, { x: x });
            gsap.to(item, { y: y });
        };
        const mouseLeave = () => {
            gsap.to(item, { x: 0 });
            gsap.to(item, { y: 0 });
        };

        if (item === null) return;

        item.addEventListener('mousemove', mouseMove);
        item.addEventListener('mouseleave', mouseLeave);
        return () => {
            if (item === null) return;
            item.removeEventListener('mousemove', mouseMove);
            item.removeEventListener('mouseleave', mouseLeave);
        };
    }, [



    ]);
    return (
        cloneElement(children, { ref })
    );
};

export default Magnetic;