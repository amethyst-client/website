"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScroll() {
    const horizontalRef = useRef<HTMLElement>(null);
    const horizontalTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": () => {
                    if (horizontalRef.current && horizontalTrackRef.current) {
                        const getDistance = () => {
                            const totalWidth = horizontalTrackRef.current?.scrollWidth ?? 0;
                            const viewportWidth = horizontalRef.current?.offsetWidth ?? 0;
                            return Math.max(totalWidth - viewportWidth, 0);
                        };

                        gsap.to(horizontalTrackRef.current, {
                            x: () => -getDistance(),
                            ease: "none",
                            scrollTrigger: {
                                trigger: horizontalRef.current,
                                start: "top top",
                                end: () => `+=${getDistance()}`,
                                scrub: 0.7,
                                pin: true,
                                invalidateOnRefresh: true,
                            },
                        });
                    }
                },
            });
        }, horizontalRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={horizontalRef} className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-white/10" />
            <div className="overflow-hidden">
                <div ref={horizontalTrackRef} className="flex min-w-[150vw] items-center gap-20 px-6 py-28">
                    <div className="min-w-[70vw] space-y-6">
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Performance</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#e9e7ff] text-[clamp(3.2rem,6.5vw,4rem)]">
                            Up to ~25% FPS<br />Boost
                        </h2>
                    </div>
                    <div className="min-w-[70vw] space-y-6">
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Modules</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#c4b5fd] text-[clamp(3.2rem,6.5vw,4rem)]">
                            15+ included
                        </h2>
                    </div>
                    <div className="min-w-[70vw] space-y-6">
                        <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Lightweight</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#e9e7ff] text-[clamp(3.2rem,6.5vw,4rem)]">
                            Small install size
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
