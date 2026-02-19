"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        if (!cursorRef.current || !followerRef.current) return;

        if (isHovered) {
            gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 });
            gsap.to(followerRef.current, {
                scale: 2.5,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.5)",
                duration: 0.3,
            });
        } else {
            gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
            gsap.to(followerRef.current, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(139, 92, 246, 0.3)",
                duration: 0.3,
            });
        }
    }, [isHovered]);

    return (
        <>
            <div
                ref={cursorRef}
                className="pointer-events-none fixed left-0 top-0 z-10000 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6] mix-blend-difference hidden md:block"
            />
            <div
                ref={followerRef}
                className="pointer-events-none fixed left-0 top-0 z-9999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/30 mix-blend-difference hidden md:block"
            />
        </>
    );
}
