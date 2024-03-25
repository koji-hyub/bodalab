'use client';
import { useRef, useEffect } from 'react';

const Circles = () => {
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        circleRefs.current.forEach((circleRef) => {
            if (circleRef) {
                const circle = circleRef;
                const randomX = Math.random() * 100 + 'vw';
                const randomY = Math.random() * 100 + 'vh';
                const randomSize = Math.random() * 50 + 30 + 'px';

                circle.style.left = randomX;
                circle.style.top = randomY;
                circle.style.width = randomSize;
                circle.style.height = randomSize;
            }
        });
    }, []);

    return (
        <div className="container relative w-full h-96">
            <div
                ref={(el) => (circleRefs.current[0] = el)}
                className="circle absolute rounded-full bg-blue-500 animate-move"
            ></div>
            <div
                ref={(el) => (circleRefs.current[1] = el)}
                className="circle absolute rounded-full bg-blue-500 animate-move"
            ></div>
            <div
                ref={(el) => (circleRefs.current[2] = el)}
                className="circle absolute rounded-full bg-blue-500 animate-move"
            ></div>
        </div>
    );
};

export default Circles;
